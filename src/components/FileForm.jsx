import { div } from 'framer-motion/client';
import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

function FileForm() {
    const [file, setFile] = useState(null);

    // This is gross code i think
    const onDrop = useCallback(async (acceptedFiles) => {
        const file = acceptedFiles[0];
        setFile(file.name)
        console.log('Attempting upload: ', file, )

        const formData = new FormData();
        formData.append('uploaded_file', file)

        try {
            const endpoint = 'http://localhost:8000/upload/'
            const response = await fetch(endpoint, {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                console.log('File uploaded sucessfully');
            } else {
                console.error('File failed to upload');
            }
        } catch(error) {
            console.error(error);
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
        onDrop
    });

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
        </div>
    );
}

export default FileForm;