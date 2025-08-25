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
os.makedirs("uploads", exist_ok=True)
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

@app.post("/transcribe/")
async def transcribe_audio(uploaded_file: UploadFile = File(...)):
    """endpoint to transcribe an uploaded audio file using Whisper."""
    if not os.getenv("OPENAI_API_KEY"):
        raise HTTPException(status_code=500, detail="OpenAI API key not set in environment variables.")
    file_content = await uploaded_file.read()

    file_path = UPLOAD_DIR / uploaded_file.filename
    with open(file_path, "wb") as f:
        f.write(file_content)
    
    try:
        with open(file_path, "rb") as audio_file:
            transcript = client.audio.transcriptions.create(
                model = "whisper-1",
                file = audio_file,
            )
        os.unlink(file_path)  # Clean up the uploaded file
        return {"success": True,
                "filename": uploaded_file.filename,
                "transcription": transcript.text,
                }
    except Exception as e:
        if os.path.exists(file_path):
            os.unlink(file_path)  # Clean up the uploaded file
        raise HTTPException(status_code=500, detail=f"TRANSCRIPTION FAILED: {str(e)}")
    
    #can add auto run uvicorn here if needed