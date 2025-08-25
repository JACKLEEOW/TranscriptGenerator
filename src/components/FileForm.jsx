import { div } from 'framer-motion/client';
import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import Output from './Output.jsx'

function FileForm() {
    const [file, setFile] = useState(null);
    const [transcription, setTranscription] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    
    // This is gross code i think
    const onDrop = useCallback(async (acceptedFiles) => {
        const file = acceptedFiles[0];
        setFile(file.name)
        console.log('Attempting upload: ', file, )
        setIsLoading(true);

        setTranscription(''); // initialize transcription

        const formData = new FormData();
        formData.append('uploaded_file', file)

        try {
            const endpoint = 'http://localhost:8000/transcribe/'
            const response = await fetch(endpoint, {
                method: 'POST',
                body: formData
            });
            const result = await response.json();

            if (response.ok) {
                console.log('File uploaded sucessfully');
                setTranscription(result.transcription);

            } else {
                console.error('File failed to upload');
            }
        } catch(error) {
            console.error(error);
        }
        finally {
            setIsLoading(false);
        }
    }, []);

    const {
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject
    } = useDropzone ({
        accept: {
            'audio/*' : ['.mp3', '.mpga', '.m4a', '.ogg', '.webm'],
            'video/*' : ['.mp4', '.mpeg', '.ogg', '.wav', '.webm']
        },
        onDrop,
        disabled: isLoading
    });
    //have to add display of transcription
    return (
        <div className='max-w-md m-auto px-6 md:max-w-xl'>
            <div className="p-4 bg-element-bg rounded-xl flex-col text-element-text text-center">
                <div {...getRootProps({className: 'dropzone h-20'})}>
                    <input {...getInputProps()} />
                    {isDragAccept && (<p className='cursor-default'>:D</p>)}
                    
                    {!isDragActive && (<p className='cursor-default'>Upload your video/audio file here</p>)}
                    <br />
                    {isDragReject && (<p className='text-element-text'>Invalid file format!</p>)}
                    {file && (<p className='text-element-text'>File was successfully uploaded!</p>)}
                </div>
            </div>

            {transcription && (<Output text={transcription} />)}
        </div>
    );
}

export default FileForm;