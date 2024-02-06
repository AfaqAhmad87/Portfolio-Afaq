import React from "react";
import Radial from "./Radial";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function Skills() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className=" lg:w-full  lg:flex lg:flex-row  lg:justify-around overflow-y-hidden sm:flex sm:flex-col sm:gap-16"
      >
        <div className="lg:flex lg:flex-col lg:gap-12 sm:flex sm:flex-col sm:gap-7 sm:p-3">
          <h2 className="text-[#fff] text-4xl">My profeshional skills</h2>
          <div>
            <div className="lg:flex lg:flex-row lg:justify-between sm:flex sm:flex-row sm:justify-between ">
              <h2 className="text-[#fff]">HTML5</h2>
              <h2 className="text-[#fff]">90%</h2>
            </div>
            <div class="skills-line-container" className="bg-[#fff]">
              <div class="skills-line1"></div>
            </div>
          </div>
          <div>
            <div className="flex flex-row justify-between ">
              <h2 className="text-[#fff]">CSS3</h2>
              <h2 className="text-[#fff]">70%</h2>
            </div>
            <div class="skills-line-container" className="bg-[#fff]">
              <div class="skills-line2"></div>
            </div>
          </div>
          <div>
            <div className="flex flex-row justify-between ">
              <h2 className="text-[#fff]">Javascript</h2>
              <h2 className="text-[#fff]">60%</h2>
            </div>
            <div class="skills-line-container" className="bg-[#fff]">
              <div class="skills-line3"></div>
            </div>
          </div>
          <div>
            <div className="flex flex-row justify-between">
              <h2 className="text-[#fff]">ReactJS</h2>
              <h2 className="text-[#fff]">50%</h2>
            </div>
            <div class="skills-line-container" className="bg-[#fff]">
              <div class="skills-line4"></div>
            </div>
          </div>
          <div>
            <div className="flex flex-row justify-between">
              <h2 className="text-[#fff]">Tailwind css</h2>
              <h2 className="text-[#fff]">80%</h2>
            </div>
            <div class="skills-line-container" className="bg-[#fff]">
              <div class="skills-line5"></div>
            </div>
          </div>{" "}
          <div>
            <div className="flex flex-row justify-between">
              <h2 className="text-[#fff]">AntDesign</h2>
              <h2 className="text-[#fff]">80%</h2>
            </div>
            <div class="skills-line-container" className="bg-[#fff]">
              <div class="skills-line6"></div>
            </div>
          </div>
        </div>
        <Radial />
      </section>
    </>
  );
}

export default Skills;
