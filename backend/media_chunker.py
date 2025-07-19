from pydub import AudioSegment 

# This is for if the video length > 25 minutes. We have to chunk the audio file into smaller parts.
# For this, we will use pydub to split the audio file into smaller chunks.

audio_file_path = "" # pass a variable here
audio_extension = audio_file_path.split('.')[-1]
audio = AudioSegment.from_file(audio_file_path) 
output_prefix = 'minute_chunk_'

#pydub is in milliseconds, so we need to convert minutes to milliseconds

one_second = 1000
one_minute = 60 * one_second
ten_minutes = 10 * one_minute

