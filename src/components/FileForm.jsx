import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import { div } from 'framer-motion/client';

function FileForm() {
    const onDrop = useCallback(async (acceptedFiles) => {
        const file = acceptedFiles[0];
        const formData = new FormData();
        formData.append("file", file);

        try {
            const res = await axios.post("http://localhost:8000/upload/", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            alert(`Uploaded: ${res.data.filename}`);
        } catch (err) {
            alert("Upload failed");
            console.error(err);
        }   
    }, []);

    const {
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject
    } = useDropzone ({
        onDrop,
        accept: {
            'audio/*' : ['.mp3', '.mpga', '.m4a', '.ogg', '.webm'],
            'video/*' : ['.mp4', '.mpeg', '.ogg', '.wav', '.webm']
        }
    });

    return (
        <div className="border-dun border-2 rounded-xl bg-dun w-64 text-center m-auto">
            <div {...getRootProps({className: 'dropzone'})}>
                <input {...getInputProps()} />
                {isDragAccept && (<p className='cursor-default'>Upload your video/audio file here</p>)}
                {isDragReject && (<p>Invalid file format!</p>)}
                {!isDragActive && (<p className='cursor-default'>Upload your video/audio file here</p>)}
            </div>
        </div>
    );
}

export default FileForm;