import React from 'react';
import { FileText } from 'lucide-react';


function Header() {
    
    
    return (
        <div className = "text-center m-auto p-6 max-w-md md:max-w-xl">
            <FileText className="w-16 h-16 text-white inline-flex items-center m-4"/>
            <h1 
                className = "text-3xl text-white font-bold m-4">Transcript Generator

            </h1>
            <p className = "text-element-text max-w-2xl mx-auto m-4">
                Generate transcriptions from your video and audio files effortlessly.
            </p>
        </div>
    );



}
export default Header;