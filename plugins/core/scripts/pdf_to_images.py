#!/usr/bin/env python3
"""
PDF to Image Converter using PyMuPDF (fitz)
Converts PDF pages to images for visual analysis by Claude

Usage: python scripts/pdf_to_images.py <pdf_path> [options]
Options:
    --pages <range>    Convert specific pages (e.g., "1-5" or "1,3,5")
    --output <dir>     Output directory for images
    --dpi <number>     Resolution (default: 150, use 200-300 for drawings)
    --format <fmt>     Output format: png (default), jpg
"""

import fitz  # PyMuPDF
import os
import sys
import json
import argparse
from pathlib import Path
from datetime import datetime


def parse_page_range(range_str, total_pages):
    """Parse page range string like '1-5' or '1,3,5' into list of page numbers."""
    if not range_str:
        return list(range(1, total_pages + 1))

    pages = set()
    for part in range_str.split(','):
        part = part.strip()
        if '-' in part:
            start, end = map(int, part.split('-'))
            pages.update(range(start, min(end + 1, total_pages + 1)))
        else:
            page_num = int(part)
            if page_num <= total_pages:
                pages.add(page_num)

    return sorted(pages)


def format_bytes(size):
    """Format bytes to human readable string."""
    for unit in ['Bytes', 'KB', 'MB', 'GB']:
        if size < 1024:
            return f"{size:.2f} {unit}"
        size /= 1024
    return f"{size:.2f} TB"


def convert_pdf_to_images(pdf_path, output_dir=None, pages=None, dpi=150, fmt='png'):
    """Convert PDF pages to images."""

    print("=" * 80)
    print("PDF TO IMAGE CONVERTER (PyMuPDF)")
    print("=" * 80)
    print(f"File: {os.path.basename(pdf_path)}")
    print(f"DPI: {dpi} | Format: {fmt}")
    print("=" * 80)
    print()

    # Open PDF
    doc = fitz.open(pdf_path)
    total_pages = len(doc)

    print(f"Total pages: {total_pages}")

    # Create output directory
    if output_dir is None:
        base_name = Path(pdf_path).stem
        # Clean filename for directory name
        safe_name = "".join(c if c.isalnum() or c in (' ', '-', '_') else '_' for c in base_name)
        output_dir = Path(pdf_path).parent / f"{safe_name}_images"
    else:
        output_dir = Path(output_dir)

    output_dir.mkdir(parents=True, exist_ok=True)
    print(f"Output directory: {output_dir}")
    print()

    # Parse page range
    pages_to_convert = parse_page_range(pages, total_pages)
    print(f"Pages to convert: {len(pages_to_convert)}")
    print()

    # Calculate zoom factor for desired DPI (default PDF is 72 DPI)
    zoom = dpi / 72
    matrix = fitz.Matrix(zoom, zoom)

    results = []
    success_count = 0
    error_count = 0

    print("Converting pages...")

    for page_num in pages_to_convert:
        print(f"  Page {page_num}/{total_pages}...", end=" ", flush=True)

        try:
            # Get page (0-indexed)
            page = doc[page_num - 1]

            # Render to pixmap
            pix = page.get_pixmap(matrix=matrix, alpha=False)

            # Output filename
            output_filename = f"page_{page_num:03d}.{fmt}"
            output_path = output_dir / output_filename

            # Save image
            if fmt.lower() == 'jpg' or fmt.lower() == 'jpeg':
                pix.save(str(output_path), jpg_quality=90)
            else:
                pix.save(str(output_path))

            file_size = output_path.stat().st_size

            results.append({
                'page': page_num,
                'filename': output_filename,
                'path': str(output_path),
                'width': pix.width,
                'height': pix.height,
                'size': file_size,
                'sizeFormatted': format_bytes(file_size)
            })

            print(f"OK ({pix.width}x{pix.height}, {format_bytes(file_size)})")
            success_count += 1

        except Exception as e:
            print(f"ERROR: {e}")
            results.append({
                'page': page_num,
                'error': str(e)
            })
            error_count += 1

    doc.close()

    # Summary
    print()
    print("=" * 80)
    print("CONVERSION COMPLETE")
    print("=" * 80)
    print(f"Successful: {success_count}")
    print(f"Failed: {error_count}")
    print(f"Output: {output_dir}")

    # List output files
    output_files = [r for r in results if 'error' not in r]
    print()
    print("Output files:")
    for f in output_files:
        print(f"  {f['filename']} ({f['width']}x{f['height']}, {f['sizeFormatted']})")

    # Create manifest
    manifest = {
        'source': str(pdf_path),
        'sourceName': os.path.basename(pdf_path),
        'outputDir': str(output_dir),
        'dpi': dpi,
        'format': fmt,
        'totalPages': total_pages,
        'convertedPages': success_count,
        'images': output_files,
        'errors': [r for r in results if 'error' in r],
        'createdAt': datetime.now().isoformat(),
        'instructions': "Use Claude's Read tool on the image paths to analyze the drawings visually"
    }

    manifest_path = output_dir / 'manifest.json'
    with open(manifest_path, 'w', encoding='utf-8') as f:
        json.dump(manifest, f, indent=2, ensure_ascii=False)

    print()
    print(f"Manifest: {manifest_path}")

    print()
    print("-" * 60)
    print("READY FOR CLAUDE VISUAL ANALYSIS")
    print("-" * 60)
    print("To analyze drawings, ask Claude to read the image files:")
    for f in output_files[:5]:
        print(f"  {f['path']}")
    if len(output_files) > 5:
        print(f"  ... and {len(output_files) - 5} more")
    print("-" * 60)
    print()

    return manifest


def main():
    parser = argparse.ArgumentParser(
        description='Convert PDF pages to images for Claude visual analysis',
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  python scripts/pdf_to_images.py drawing.pdf
  python scripts/pdf_to_images.py drawing.pdf --pages "1-5"
  python scripts/pdf_to_images.py drawing.pdf --pages "1" --dpi 200
  python scripts/pdf_to_images.py drawing.pdf --dpi 300 --format jpg

After conversion, use Claude's Read tool on the output images
for visual analysis of engineering drawings.
        """
    )

    parser.add_argument('pdf_path', help='Path to PDF file')
    parser.add_argument('--pages', help='Page range (e.g., "1-5" or "1,3,5")')
    parser.add_argument('--output', help='Output directory')
    parser.add_argument('--dpi', type=int, default=150, help='Resolution (default: 150)')
    parser.add_argument('--format', choices=['png', 'jpg'], default='png', help='Output format')

    args = parser.parse_args()

    if not os.path.exists(args.pdf_path):
        print(f"Error: File not found: {args.pdf_path}")
        sys.exit(1)

    try:
        convert_pdf_to_images(
            args.pdf_path,
            output_dir=args.output,
            pages=args.pages,
            dpi=args.dpi,
            fmt=args.format
        )
    except Exception as e:
        print(f"Error: {e}")
        sys.exit(1)


if __name__ == '__main__':
    main()
