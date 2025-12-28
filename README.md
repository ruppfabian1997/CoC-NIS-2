# CoC-NIS-2

Monorepo for the NIS-2 support tool (MVP) based on the master's thesis of Fabian Rupp.

This repository contains two top-level projects:
- frontend — Vite + React + TypeScript (SPA)
- backend  — FastAPI (Python)

Quickstart (local)

1) Frontend
   cd frontend
   npm install
   npm run dev

2) Backend
   cd backend
   python -m venv .venv
   source .venv/bin/activate   # (Linux / macOS)
   .venv\Scripts\Activate     # (Windows PowerShell)
   pip install -r requirements.txt
   uvicorn main:app --reload --port 3001
