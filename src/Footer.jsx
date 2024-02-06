import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaTiktok } from "react-icons/fa";

function Footer() {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <footer className=" bg-slate-950 lg:flex lg:flex-row  lg:justify-between  lg:font-[1rem]  w-[100%] items-center sm:flex sm:flex-col sm:justify-between">
        <span className="lg:text-slate-600 lg:pl-10 sm:pt-3 md:text-[2rem] lg:text-[1rem]">
          Copyright@ 2023 afaqahmad alright recieved
        </span>
        <div className="text-[#fff] bg-slate-950 lg:flex lg:flex-row  lg:pr-10 lg:gap-2 sm:flex sm:flex-row sm:gap-1 md:gap-14 ">
          <FaLinkedin
            className="w-8
          text-[aqua]"
          />
          <FaWhatsappSquare
            className="w-8
          text-[aqua]"
          />
          <FaFacebook
            className="w-8
          text-[aqua]"
          />
          <IoLogoYoutube
            className="w-8
         text-[aqua]"
          />

          <FaTiktok
            className="w-8
         text-[aqua]"
          />
        </div>
      </footer>
    </>
  );
}

export default Footer;
