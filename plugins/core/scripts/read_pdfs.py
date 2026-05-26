import os
import sys
sys.stdout.reconfigure(encoding='utf-8')

from PyPDF2 import PdfReader

data_dir = os.path.join(os.path.dirname(__file__), "..", "01_Discovery", "data_collected")

def read_pdf(file_path):
    try:
        reader = PdfReader(file_path)
        text = ""
        for page in reader.pages:
            text += page.extract_text() + "\n"
        return text
    except Exception as e:
        return f"Error reading {file_path}: {e}"

def main():
    for file in os.listdir(data_dir):
        if file.endswith('.pdf'):
            print("\n" + "=" * 80)
            print(f"FILE: {file}")
            print("=" * 80 + "\n")
            content = read_pdf(os.path.join(data_dir, file))
            print(content)

if __name__ == "__main__":
    main()
