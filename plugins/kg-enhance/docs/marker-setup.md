# Marker — Installation & Usage Guide

Marker is the recommended document-to-markdown converter for Omega engagements. It uses Surya OCR (GPU-accelerated) to handle Arabic PDFs, scanned documents, and files with embedded private fonts that break text-extraction tools (Markitdown, Docling). It is the only open-source local tool that reliably converts Arabic PDFs to clean markdown.

## Requirements

| Requirement | Minimum | Notes |
|---|---|---|
| Python | 3.9 – 3.13 | **Not** 3.14 — no wheels yet |
| GPU VRAM | 8 GB | RTX 3060 12GB is ideal |
| RAM | 16 GB | 128 GB optimal for large batches |
| OS | Windows / Linux / macOS | Windows: use `py -3.13` launcher |

## Installation

> **One install covers all projects on the machine.** Marker installs into Python 3.13's global site-packages. No per-project reinstall needed.

```bash
# Windows — use the Python launcher to target 3.13 explicitly
py -3.13 -m pip install marker-pdf python-docx python-pptx Pillow

# Linux / macOS
python3.13 -m pip install marker-pdf python-docx python-pptx Pillow
```

> **Why the extra packages:** `marker-pdf` ships only the PDF converter in most installs
> (`marker.converters.docx` / `.pptx` / `.image` are frequently absent). doc-ingest reads
> DOCX via **python-docx**, PPTX via **python-pptx**, and OCRs images by rendering them to a
> 1-page PDF with **Pillow** then feeding Marker's PDF path. Install all four together.

First run downloads Surya model weights (~300 MB) automatically to:
`C:\Users\<user>\AppData\Local\datalab\datalab\Cache\models\`

These are cached permanently — subsequent runs are fast.

## Verify Installation

```bash
py -3.13 -c "import marker; print('Marker ready')"
```

## Usage in Code

### Standard conversion (DOCX, PPTX, English PDF)

```python
from marker.converters.pdf import PdfConverter
from marker.converters.docx import DocxConverter
from marker.models import create_model_dict
from marker.config.parser import ConfigParser
from marker.output import text_from_rendered
import os

models = create_model_dict()

def convert_to_markdown(input_path: str) -> str:
    ext = os.path.splitext(input_path)[1].lower()
    opts = {'output_format': 'markdown', 'languages': 'ar,en'}

    if ext == '.pdf':
        # force_ocr=True bypasses corrupt text layers (Arabic embedded fonts)
        opts['force_ocr'] = True
        converter = PdfConverter(
            config=ConfigParser(opts).generate_config_dict(),
            artifact_dict=models
        )
    else:
        converter = DocxConverter(
            config=ConfigParser(opts).generate_config_dict(),
            artifact_dict=models
        )

    rendered = converter(input_path)
    md, _, _ = text_from_rendered(rendered)
    return md
```

### CLI one-liner (for scripts and hooks)

```bash
# Convert a PDF to markdown (saves alongside source file)
py -3.13 -c "
from marker.converters.pdf import PdfConverter
from marker.models import create_model_dict
from marker.config.parser import ConfigParser
from marker.output import text_from_rendered
import sys, os

path = r'<input_path>'
models = create_model_dict()
cfg = ConfigParser({'output_format': 'markdown', 'languages': 'ar,en', 'force_ocr': True})
conv = PdfConverter(config=cfg.generate_config_dict(), artifact_dict=models)
md, _, _ = text_from_rendered(conv(path))
out = os.path.splitext(path)[0] + '_marker.md'
open(out, 'w', encoding='utf-8').write(md)
print(f'Converted: {out}  ({len(md):,} chars)')
"
```

## Format Coverage

| Format | Marker Support | Notes |
|---|---|---|
| `.pdf` (English) | ✅ Excellent | Clean text + tables |
| `.pdf` (Arabic, embedded fonts) | ✅ Excellent | `force_ocr=True` required |
| `.pdf` (scanned / image-only) | ✅ Excellent | Surya OCR handles it |
| `.docx` (any language) | ✅ Excellent | Tables, headings preserved |
| `.pptx` | ✅ Good | Slide-by-slide, images as refs |
| `.xlsx` | ⚠️ Partial | Use python-openpyxl for data sheets |
| Images (`.jpg`, `.png`) | ✅ Via OCR | Treats as scanned page |

## License Note

- Marker code: GPL-3.0
- Surya model weights: CC-BY-NC-SA-4.0, **with commercial carve-out** for organisations with < $5M annual revenue AND < $5M lifetime VC/angel funding.
- Omega currently qualifies. Document this dependency in the ISO 42001 AI inventory if applicable.

## Fallback Chain (when Marker unavailable)

If Marker is not installed (CPU-only machine, no Python 3.13), `/omega:doc-ingest` falls back in order:

1. **pandoc** — `pandoc input.docx -o output.md` (DOCX/PPTX only, no OCR)
2. **Manual** — consultant converts and passes the `.md` file directly

Arabic PDFs cannot be reliably converted without Marker. Flag them for manual attention if fallback is triggered.
