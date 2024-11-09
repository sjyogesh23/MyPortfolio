"use client";

import React, { useState } from 'react';
import Image from "next/image";
import see_more from "./See_more.png";
import { X } from "react-bootstrap-icons";

const importAllImages = (context) => {
  return context.keys().map(context);
};

const allImages = importAllImages(require.context('./Images/', false, /\.(png|jpe?g|svg)$/));

const Modal = ({ isOpen, onClose, images }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ">
      <div className="bg-white p-4 rounded-lg max-w-4xl h-[90vh] overflow-hidden">
        <button className="grid justify-end w-full" onClick={onClose}>
          <X size={24} className="mb-4 top-2 right-2 text-lg focus:outline-none duration-200 ease-in-out hover:scale-150 hover:rotate-90" />
        </button>

        <div className="grid grid-cols-2 gap-4 overflow-y-auto overflow-x-hidden h-[78vh]">
          {images.map((src, index) => (
            <Image
              key={index}
              src={src.default}
              alt={`Additional image ${index + 1}`}
              width={500}
              height={500}
              className="object-contain aspect-video duration-200 ease-in-out md:hover:scale-105"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export const Certificate = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full text-center flex flex-col items-center py-20">
      <div className="w-full text-2xl md:text-5xl font-bold text-webpri mb-8 mt-14">Certificate</div>
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-4 w-full py-4">
        {allImages.slice(0, 3).map((src, index) => (
          <Image
            key={index}
            src={src.default}
            alt={`Image ${index + 1}`}
            width={500}
            height={500}
            className="object-contain aspect-video size-96 w-full md:shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        ))}

        <div className="w-full grid items-center justify-center duration-200 ease-in-out  md:hover:translate-x-5  border-webpri border-2 md:border-8 md:shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" onClick={handleOpenModal}>
          <div className="flex md:flex-col w-full items-center gap-2 py-2 mb:py-0">
            <Image
              src={see_more}
              alt="See more"
              width={500}
              height={500}
              className="object-contain aspect-video size-6 md:size-24 w-full cursor-pointer"
            />
            <div className="text-lg md:text-4xl text-nowrap text-webpri font-semibold cursor-pointer">See more</div>
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} images={allImages.slice(3)} />
    </div>
  );
};
