from openai import OpenAI
import os
from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from dotenv import load_dotenv

load_dotenv()
api_key=os.getenv("OPENAI_API_KEY")

model_id = 'gpt-4o-mini-transcribe'

client = OpenAI()

media_file_path = 'backend/tell_may_i_said.mp3'

media_file = open(media_file_path, "rb")

#can also translate media files by using translate instead of transcribe
# response = openai.Audio.translate 
response = client.audio.transcriptions.create(
    model = model_id,
    file = media_file,
    response_format='text' # json, text, srt, or vtt
)

print(response.data['text']) # or response.data['json'] for json format