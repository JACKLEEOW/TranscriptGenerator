import openai
from fastapi import FASTAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse

API_KEY = 'enter api key here '

model_id = 'whisper-1'

media_file_path = "pass the media file path here"

media_file = open(media_file_path, "rb")

#can also translate media files by using translate instead of transcribe
# response = openai.Audio.translate 
response = openai.Audio.transcribe(
    api_key = API_KEY,
    model = model_id,
    file = media_file,
    response_format='text' # json, text, srt, or vtt
)

print(response.data['text']) # or response.data['json'] for json format