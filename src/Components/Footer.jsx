import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import LogoMemoriasNoHH from '../assets/logo-memoriasnohh.png';

const Footer = () => {
  return (
    <div
      className="bg-white flex items-center justify-center"
      style={{ height: '5%' }}
    >
      <div className="flex justify-end items-center gap-4 w-3/5">
        <span className="text-lg">Desenvolvido por Lucas Guidi</span>
        <a href="https://www.linkedin.com/in/lucasrguidi/">
          <AiFillLinkedin className="text-2xl" />
        </a>
        <a href="https://github.com/lucasrguidi">
          <AiFillGithub className="text-2xl" />
        </a>
      </div>
      <div className="flex gap-2 items-center w-2/5 justify-end pr-4">
        <span className="font-bold">Memórias no HH</span>
        <img src={LogoMemoriasNoHH} style={{ height: '1.5em' }} alt="" />
      </div>
    </div>
  );
};

export default Footer;
