import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Aboutme() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <main className="lg:flex lg:flex-col ">
        <section className="lg:w-[100vw] lg:h-[100%]  lg:flex lg:flex-row  lg:justify-around  lg:items-center sm:flex sm:flex-col-reverse sm:gap-10 ">
          <div
            data-aos="fade-right"
            data-aos-delay="100"
            data-aos-duration="2700"
            className=""
          >
            <img src="./Images/AFAQ.jpg" alt="" />
          </div>

          <div
            data-aos="fade-left"
            data-aos-delay="100"
            data-aos-duration="2700"
            className="lg:w-[40%] lg:font-bold text-[#fff] lg:flex lg:flex-col lg:gap-5 lg:justify-between lg:h-[100%]  lg:pt-9  sm:pl-3 "
          >
            <div className="lg:flex sm:flex sm:flex-row gap-1 ">
              <h1>About</h1>
              <h1 className="lg:ml-[10px] text-[#39bda7] "> Me</h1>
            </div>

            <div>
              <p className="lg:w-[100%] text-[#fff] lg:text-justify sm:text-justify sm:text[16px] sm:pr-3 lg:text-[20px] md:text-[24px]">
                Junior Web Developer specializing in ReactJS.Experienced with
                all stages of the development cycle for dynamic web projects.
                Well-versed in front end development Technologies like HTML5
                ,CSS, JavaScript, TailwindCSS,ReactJS. Strong background in
                project management and customer relations.
              </p>
            </div>

            <div className="">
              <button class="button">Learn about me</button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Aboutme;
