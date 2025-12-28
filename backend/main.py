from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="CoC NIS-2 Backend")

# allow local frontend dev server
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get("/")
def read_root():
    return {"message": "CoC NIS-2 Backend is running"}

@app.get("/health")
def health():
    return {"status": "ok"}

@app.get("/api/hello")
def api_hello():
    return {"hello": "world"}
