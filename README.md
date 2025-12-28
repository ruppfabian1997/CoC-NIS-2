# CoC-NIS-2

Monorepo for the NIS-2 support tool (MVP) based on the master's thesis of Fabian Rupp.

This repository contains two top-level projects:
- frontend — Vite + React + TypeScript (SPA)
- backend  — FastAPI (Python)

## Quickstart (local)

Prerequisites
- Node.js (v18+ recommended) and npm
- Python 3.10+ and virtualenv

1) Clone the repository

```bash
git clone https://github.com/ruppfabian1997/CoC-NIS-2.git
cd CoC-NIS-2
```

2) Start the backend

```bash
cd backend
python -m venv .venv
# macOS / Linux
source .venv/bin/activate
# Windows (PowerShell)
# .venv\Scripts\Activate
pip install -r requirements.txt
# Optional: set a secure SECRET_KEY for JWTs
# Example (bash): export SECRET_KEY=$(python -c "import secrets; print(secrets.token_urlsafe(32))")
uvicorn main:app --reload --port 3001
```

- Health endpoint: http://localhost:3001/health
- Example API: http://localhost:3001/api/hello

3) Start the frontend

```bash
cd frontend
npm install
npm run dev
# Frontend dev server: http://localhost:5173
```

4) Test registration and login (example with curl)

Register a new user (JSON body):

```bash
curl -X POST http://localhost:3001/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com","password":"secretpassword"}'
```

Login (x-www-form-urlencoded):

```bash
curl -X POST http://localhost:3001/auth/login \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "username=user@example.com&password=secretpassword"
```

The login response returns a bearer token:

```json
{"access_token":"<JWT_TOKEN>","token_type":"bearer"}
```

Use the token to call a protected endpoint:

```bash
curl -H "Authorization: Bearer <JWT_TOKEN>" http://localhost:3001/users/me
```

## Environment / Security notes
- Set `SECRET_KEY` (strong random string) in the environment for production. The code currently falls back to a placeholder value which is insecure for production.
- `ACCESS_TOKEN_EXPIRE_MINUTES` can be configured via environment variable (default = 1440 min = 24h).
- The backend currently uses SQLite for quick prototyping (`backend/database.db`). For production use PostgreSQL and add migrations.

## Development notes
- Backend: FastAPI + SQLModel. Tables are created automatically on startup.
- Frontend: Vite + React + TypeScript. Default dev port is 5173.

## Next steps (recommended)
- Add migrations (Postgres + Alembic / SQLModel migration tooling).
- Implement refresh tokens and secure cookie storage for JWTs.
- Add frontend pages for registration/login and token handling.
- Add tests and CI pipeline.

---

If you want, I can also update or add a separate `docs/` file with extended developer instructions or create a minimal GitHub Actions workflow to run lint/tests.
