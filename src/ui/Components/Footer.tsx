import React from 'react'
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'react-icons/ai'
import LogoMemoriasNoHH from '../../../public/logo-memoriasnohh.png'

const Footer = () => {
  return (
    <div
      className="bg-white flex items-center justify-center max-lg:flex-col max-lg:p-4 max-lg:gap-8 "
      style={{ height: '5%' }}
    >
      <div className="flex justify-end items-center gap-4 w-3/5 max-lg:flex-col max-lg:w-full max-lg:justify-center">
        <span className="text-lg max-lg:text-base max-lg:text-center ">
          Desenvolvido por Lucas Guidi
        </span>
        <div className="flex gap-4 max-lg:w-full max-lg:justify-center">
          <a href="https://www.linkedin.com/in/lucasrguidi/">
            <AiFillLinkedin className="text-2xl" />
          </a>
          <a href="https://github.com/lucasrguidi/quando-o-criciuma-joga">
            <AiFillGithub className="text-2xl" />
          </a>
          <a href="https://instagram.com/lucasrguidi/">
            <AiFillInstagram className="text-2xl" />
          </a>
        </div>
      </div>
      <div className="flex gap-2 items-center w-2/5 justify-end pr-4 max-lg:pr-0 max-lg:w-full max-lg:justify-center">
        <a
          href="https://memoriasnohh.myportfolio.com/"
          className="font-bold max-lg:text-center"
        >
          Memórias no HH
        </a>
        <img
          src={LogoMemoriasNoHH.src}
          style={{ height: '1.5em' }}
          alt="Logo Memórias no HH"
        />
      </div>
    </div>
  )
}

export default Footer
