"use client";
import { Github, Linkedin, Instagram, TwitterX } from "react-bootstrap-icons";
import { useState } from "react";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

export const ContactMe = () => {
    const [tooltip, setTooltip] = useState({ show: false, text: '' });
    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        setTooltip({ show: true, text: 'Copied!' });
        setTimeout(() => setTooltip({ show: false, text: '' }), 1500);
    };
    return (
        <div> 
            <div className="bg-gradient-to-br from-lwebpri to-webpri py-20 w-full text-center flex flex-col items-center">                    
                    <div className="my-12 lg:mt-0 flex lg:block flex-col items-center mb-36">
                        <div className="text-2xl lg:text-5xl font-bold text-white">Let's Connect!</div>
                        <div>
                            <div className="flex text-lg md:text-2xl text-center text-white gap-2 md:gap-4 mt-8 mb-10 justify-center">
                                <div className="font-semibold cursor-pointer flex gap-2" onClick={() => handleCopy("sjyogesh23@gmail.com")} >
                                    <div>Mail me: </div>
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={
                                            <Tooltip>
                                                Click to Copy!
                                            </Tooltip>
                                        }>
                                        <div>sjyogesh23@gmail.com</div>
                                    </OverlayTrigger>
                                </div>
                            </div>
                            <div className="text-white flex justify-between gap-4">
                                <a className="flex flex-col items-center duration-200 ease-in-out lg:hover:scale-105" href="https://linkedin.com/in/sjyogesh23">
                                    <Linkedin className="size-6 md:size-8 mb-2" /><div className="text-xs">sjyogesh23</div>
                                </a>
                                <a className="flex flex-col items-center duration-200 ease-in-out lg:hover:scale-105" href="https://github.com/sjyogesh23">
                                    <Github className="size-6 md:size-8 mb-2" /><div className="text-xs">sjyogesh23</div>
                                </a>
                                <a className="flex flex-col items-center duration-200 ease-in-out lg:hover:scale-105" href="https://instagram.com/sjyogesh23">
                                    <Instagram className="size-6 md:size-8 mb-2" /><div className="text-xs">sjyogesh23</div>
                                </a>
                                <a className="flex flex-col items-center duration-200 ease-in-out lg:hover:scale-105" href="https://twitter.com/sjyogesh23">
                                    <TwitterX className="size-6 md:size-8 mb-2" /><div className="text-xs">sjyogesh23</div>
                                </a>
                            </div>
                        </div>
                </div>                
            </div>
        </div>
    );
};
