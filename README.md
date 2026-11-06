# Ishan Srivastav — Personal Portfolio

**Live site:** https://er-ishan-srivastav.github.io/

A hand-built, responsive portfolio presenting Ishan's Data Engineering focus, with complementary work in backend systems, databases, and applied AI.

## Portfolio focus

- Professional experience: Analyst Team Lead at eClerx (May–August 2026), plus internships in data analysis and ETL testing.
- Education: B.E. in CSE (Big Data Analytics), completed in 2026; C-DAC PGCP-BDA, Mumbai (August 2026–March 2027).
- Data Engineering case study: StreamBharat, a PySpark/Delta Lake OTT analytics project with 20 question modules and two separate Structured Streaming jobs.
- SmartVolt: full-stack prepaid electricity-meter simulation with React/TypeScript, FastAPI, SQLAlchemy, PostgreSQL, Alembic, Docker Compose, and Caddy HTTPS.
- Additional case studies: PayFlow UPI, CAMAF, BrillX, Enkryptor, and AI Vision Assistant.

## Tech

- HTML5, CSS, and vanilla JavaScript.
- Inter and DM Mono via Google Fonts.
- Static hosting on GitHub Pages; no framework or build step required.

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
    ├── vision-assistant.html
    └── streambharat.html
```

## Preview locally

```bash
python -m http.server 8080
```

Then open http://localhost:8080.

## Featured project

- [SmartVolt demo](https://smartvolt-demo.duckdns.org/overview)
- [SmartVolt API docs](https://smartvolt-demo.duckdns.org/docs)
- [SmartVolt source](https://github.com/Er-Ishan-Srivastav/SmartVolt)

SmartVolt is a simulation/learning project. It does not connect to physical electricity meters or process real payments. For current test and build status, use the source repository's CI and documentation rather than relying on static portfolio claims.

## Related resource

The [Ishan Learning Hub](https://er-ishan-srivastav.github.io/Ishan-Learning-Hub/) is a separate C-DAC study and revision site.

## StreamBharat project scope

[StreamBharat source](https://github.com/Er-Ishan-Srivastav/StreamBharat) is a six-member, course-scoped OTT data engineering project. The implementation includes 20 question modules, a finite batch orchestrator, and separate file-based Structured Streaming entry points for trending and live ad pacing. I own Q4 incremental ingestion, Q17 real-time trending, Q20 churn-model work, and integration across workstreams.

The repository's own status notes distinguish implemented modules and deterministic CI checks from full Spark/Delta runtime reconciliation, streaming restart/late-event validation, and measured ML metrics, which remain work to verify. The sample data is synthetic; this is not represented as a production OTT platform. The project case study is available at [projects/streambharat.html](projects/streambharat.html).
