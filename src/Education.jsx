import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Education() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      className="lg:w-[80%] lg:m-auto sm:h-[60vh]       "
      data-aos="zoom-out"
      data-aos-delay="100"
      data-aos-duration="2700"
    >
      <div className="flex flex-row  sm:pl-2 sm:pt-9 ">
        {" "}
        <h1 className="text-[#fff]">Education</h1>
        <span className="text-[aqua] text-5xl">.</span>
      </div>
      <div className="lg:flex lg:flex-col lg:gap-11 sm:flex sm:flex-col sm:gap-[80px] sm:pl-2 sm:p-12 sm:pt-[110px] lg:pt-[60px] md:gap-[120px] md:pl-6 ">
        <div className=" lg:grid lg:grid-cols-[140px_1fr_240px] sm:grid sm:grid-cols-[80px_200px_100px] text-[#fff] sm:w-[100%] lg:justify-between lg:items-center sm:items-center md:grid md:grid-cols-[140px_1fr_240px]">
          <div className="">
            <h2 className="sm:text-[10px] md:text-[16px]">(2019 To 2023)</h2>
          </div>
          <div className="flex flex-col items-center ">
            <h1 className="sm:text-[16px] lg:text-[2.3rem] font-bold md:text-[20px] ">
              Engineering
            </h1>
            <h2 className="sm:text-[10px] font-semibold md:text-[20px]">
              Computer software Engineering
            </h2>
          </div>
          <div className=" text-end">
            <h3 className="text-center font-bold  sm:text-[10px] md:text-[20px]">
              Uet Mardan
            </h3>
          </div>
        </div>
        <div className=" lg:grid lg:grid-cols-[140px_1fr_240px] text-[#fff]  sm:grid sm:grid-cols-[80px_200px_100px] lg:justify-between items-center md:grid md:grid-cols-[140px_1fr_240px]  ">
          <div className="">
            <h2 className="sm:text-[10px]  md:text-[16px]">(2016 To 2018)</h2>
          </div>
          <div className="flex flex-col items-center ">
            <h1 className="sm:text-[16px] lg:text-[2.3rem] md:text-[20px] font-bold">
              Intermediate
            </h1>
            <h2 className="sm:text-[10px] font-semibold md:text-[20px]">
              Fsc Engineering
            </h2>
          </div>
          <div className=" text-end">
            <h3 className="text-center font-bold  sm:text-[10px] md:text-[20px]">
              Pmdc
            </h3>
          </div>
        </div>{" "}
        <div className=" lg:grid lg:grid-cols-[140px_1fr_240px] sm:grid sm:grid-cols-[100px_80px_200px] text-[#fff]  lg:justify-between lg:items-center sm:items-center md:grid md:grid-cols-[140px_1fr_240px]">
          <div className="">
            <h2 className="sm:text-[10px]  md:text-[16px]">(2010 To 2016)</h2>
          </div>
          <div className="flex flex-col items-center 800">
            <h1 className="sm:text-[16px] lg:text-[2.3rem] pl-16 font-bold md:text-[20px] md:pr-10">
              School
            </h1>
          </div>
          <div className="text-end">
            <h3 className="text-1xl font-bold  sm:text-[10px] md:pr-12 md:text-[16px]">
              Islamia collegiate school
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
