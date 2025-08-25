import { div } from 'framer-motion/client';
import React from 'react';
import { Copy } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';

function Output({ text }) {
    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(text);
            toast(
                "Transcription copied to clipboard!", {
                    className: "bg-element-bg text-element-text",
                    position: "bottom-right",
                    autoClose: 1000,
                    customProgressBar: true
                }
            );
            console.log("Text copied to clipboard");
        } catch (err) {
            console.error("Something went wrong when copying to clipboard: ", err);
        }
    };

    return (
        <div className='text-center m-auto max-w-md md:max-w-xl'>
            <div className='flex flex-row my-6 text-white'>
                <h3 className='text-2xl font-bold text-left'>Generated Transcription</h3>
                <Copy onClick={handleCopy} className="w-8 h-8 ml-auto cursor-pointer"/>
                <ToastContainer/>
            </div>  
            <div className="bg-element-bg rounded-xl flex-col my-6 text-element-text text-center max-w-md md:max-w-xl p-6 h-64 overflow-auto scrollbar">
                <p> {text} </p>
            </div>
        </div>
    );
}

export default Output;