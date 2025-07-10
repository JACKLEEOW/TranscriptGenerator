import React from 'react';
import { FileText } from 'lucide-react';


function Header() {
    
    
    return (
        <div className = "text-center mb-16 font-default">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mb-6">
            <FileText className="w-8 h-8 text-white" />
            </div>
            <h1 
                className = "text-4xl font-bold mb-4">Transcript Generator

            </h1>
            <p className = "text-gray-300 max-w-2xl mx-auto">
                Transform your video content into accurate transcripts effortlessly,
                click to get started.
            </p>





        </div>

    );



}
export default Header;