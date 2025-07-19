from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
import tempfile
import subprocess
import os
from pathlib import Path

UPLOAD_DIR = Path()/"uploads"

app = FastAPI(title = "Transcript Generator API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"], #
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Welcome to the Transcript Generator API!"}



@app.post("/upload/")
async def upload_file(uploaded_file: UploadFile):
    contents = await uploaded_file.read()
    save_to = UPLOAD_DIR / uploaded_file.filename
    with open(save_to, "wb") as f:
        f.write(contents)
    return {"filename": uploaded_file.filename}