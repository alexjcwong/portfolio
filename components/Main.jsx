import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="flex justify-center">
        <h1>Alexander Wong</h1>
        <h1>Fullstack Engineer Runner Writer</h1>
        <div className="flex">
          <FaLinkedin />
          <FaGithub />
          <FaEnvelope />
        </div>
      </div>
    </div>
  );
};
