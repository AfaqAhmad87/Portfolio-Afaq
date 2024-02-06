import React from "react";
import "./index.css";
function Radial() {
  return (
    <div
      class="dashboard"
      className="flex flex-col items-center gap-7 text-[aqua]"
    >
      <h4 className="text-[#fff] text-[2.5rem] relative top-[-7px] ">
        Other Skills
      </h4>
      <div className="flex lg:gap-3 sm:gap-16 md:gap-[150px]">
        <div className="flex flex-col items-center">
          <h4 className="text-[#fff] text-[16px]">Comunication Skills</h4>
          <svg>
            <h2 className="text-[#fff] text-[16px]">Other Skills</h2>
            <circle class="bg" cx="57" cy="57" r="52" />
            <circle class="meter-1" cx="57" cy="57" r="52" />
          </svg>
          <span className="text-[aqua]">80%</span>
        </div>
        <div className="flex flex-col items-center">
          <h4 className="text-[#fff] text-[16px]">Quick Learner</h4>
          <svg>
            <h1 className="text-[#fff] text-[16px]">Other Skills</h1>
            <circle class="bg" cx="57" cy="57" r="52" />
            <circle class="meter-2" cx="57" cy="57" r="52" />
          </svg>
          <span className="text-[aqua]">50%</span>
        </div>
      </div>
      <div className="lg:flex lg:gap-3 items-center sm:flex sm:flex-row sm:gap-16 md:gap-[150px]">
        <div className="flex flex-col items-center">
          <h4 className="text-[#fff] text-[16px]">Creative </h4>
          <svg id="svgs">
            <h1 className="text-[#fff] text-[px]">Other Skills</h1>
            <circle class="bg" cx="57" cy="57" r="52" />
            <circle class="meter-3" cx="57" cy="57" r="52" />
          </svg>
          <span className="text-[aqua]">70%</span>
        </div>
        <div className="flex flex-col items-center ">
          <h4 className="text-[#fff] text-[16px]">passionate</h4>
          <svg>
            <h1 className="text-[#fff] text-[16px]">Other Skills</h1>
            <circle class="bg" cx="57" cy="57" r="52" />
            <circle class="meter-4" cx="57" cy="57" r="52" />
          </svg>
          <span className="text-[aqua]">99%</span>
        </div>
      </div>
    </div>
  );
}

export default Radial;
