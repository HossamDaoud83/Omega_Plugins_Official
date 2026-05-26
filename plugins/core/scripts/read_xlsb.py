"""
Script to read .xlsb Excel Binary files
Requires: pip install pyxlsb pandas
"""

import sys
import os

# Try to install pyxlsb if not available
try:
    from pyxlsb import open_workbook
except ImportError:
    import subprocess
    print("Installing pyxlsb...")
    subprocess.check_call([sys.executable, "-m", "pip", "install", "pyxlsb"])
    from pyxlsb import open_workbook

import pandas as pd

def read_xlsb_file(file_path):
    """Read an xlsb file and extract all data"""
    print("=" * 80)
    print("XLSB FILE READER")
    print("=" * 80)
    print(f"File: {os.path.basename(file_path)}")
    print("=" * 80)

    with open_workbook(file_path) as wb:
        print(f"\nSheets found: {wb.sheets}")
        print()

        for sheet_name in wb.sheets:
            print("-" * 60)
            print(f"SHEET: {sheet_name}")
            print("-" * 60)

            # Read sheet data
            with wb.get_sheet(sheet_name) as sheet:
                data = []
                for row in sheet.rows():
                    row_data = [item.v for item in row]
                    data.append(row_data)

                if data:
                    # Create DataFrame
                    df = pd.DataFrame(data[1:], columns=data[0] if data else None)
                    print(f"Rows: {len(df)}, Columns: {len(df.columns)}")
                    print(f"\nHeaders: {list(df.columns[:10])}")
                    print("\nFirst 20 rows:")
                    print(df.head(20).to_string())

                    # Summary of numeric columns
                    numeric_cols = df.select_dtypes(include=['number']).columns
                    if len(numeric_cols) > 0:
                        print(f"\n\nNumeric Column Summary:")
                        for col in numeric_cols[:10]:
                            try:
                                print(f"  {col}: Sum={df[col].sum():,.2f}, Max={df[col].max():,.2f}")
                            except:
                                pass
                else:
                    print("  (empty sheet)")
            print()

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python read_xlsb.py <file_path>")
        sys.exit(1)

    file_path = sys.argv[1]
    if not os.path.exists(file_path):
        print(f"Error: File not found: {file_path}")
        sys.exit(1)

    read_xlsb_file(file_path)
