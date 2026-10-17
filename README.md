# Ishan Srivastav — Personal Portfolio

**Live site:** https://er-ishan-srivastav.github.io/

A hand-built, responsive portfolio focused on data engineering, analytics, backend systems, applied AI, and selected project case studies.

## Highlights

- Responsive dark visual system with accessible navigation, scroll progress, and progressive reveal effects.
- Dedicated **SmartVolt** feature with one primary live-app button, secondary API/source links, architecture summary, and release verification notes.
- Case studies for CAMAF, BrillX, PayFlow UPI, Enkryptor, and AI Vision Assistant.
- C-DAC Big Data Analytics Learning Hub linking 10 public study modules.
- Experience, technical stack, research, and contact sections, with eClerx shown as a completed role (May–Aug 2026).
- Open Graph metadata for improved link previews; no frontend framework or build step required.

## Tech

- HTML5, CSS, and vanilla JavaScript.
- Inter and DM Mono via Google Fonts.
- Static hosting on GitHub Pages.

## Repository layout

```text
.
├── index.html
├── assets/
│   ├── css/
│   │   ├── styles.css
│   │   ├── cdac.css
│   │   └── project.css
│   ├── img/
│   └── js/main.js
└── projects/
    ├── camaf.html
    ├── brillx.html
    ├── payflow.html
    ├── enkryptor.html
    └── vision-assistant.html
```

## Local preview

Run a static file server from the repository root:

```bash
python -m http.server 8080
```

Open http://localhost:8080.

## Featured live build

- [SmartVolt application](https://smartvolt-demo.duckdns.org/overview)
- [FastAPI docs](https://smartvolt-demo.duckdns.org/docs)
- [SmartVolt source repository](https://github.com/Er-Ishan-Srivastav/SmartVolt)

SmartVolt simulates meter readings and recharges; it does not connect to physical meters or process real payments.

## Related project

The [Ishan Learning Hub](https://er-ishan-srivastav.github.io/Ishan-Learning-Hub/) is a separate public study and revision site.
