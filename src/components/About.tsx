import React from "react";
import mypic from "../assets/images/My Pic distorted.png";

import Summary from "./Summary";

const About: React.FC = () => {
  return (
    <>
      <div className="bg-slate-200 py-16">
        <div className="flex flex-col md:grid md:grid-cols-12 mx-auto md:max-w-5xl w-full md:auto-rows-auto p-4">
          <div className="order-last md:order-1 md:col-span-7 flex flex-col justify-center">
            <div className="text-4xl lg:text-6xl font-playfair mb-4 flex justify-center md:justify-start mt-4 md:mt-0">
              DevOps Architect
            </div>
            <div className="">
              <div className="text-md font-playfair md:w-10/12">
       
                <br />
                <br />
                With{" "}
                <span className="text-red-600">Experienced Architect with a demonstrated history of working in the information technology and services industry. Skilled in Public Cloud like AWS, along with Kubernetes & Docker solution, DevOps tools. Strong knowledge on end to end Cloud Solutions and migration skill.
              </div>
            </div>
          </div>
          <div className="md:order-2 md:col-span-5">
            <div className="flex justify-center rounded-full">
              <img src={mypic} alt="" className="h-64 md:h-96 rounded-full" />
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 bg-slate-800 w-full text-slate-100 flex justify-center items-center text-xs md:text-md p-2">
        <div className="mx-auto w-8/12 text-center font-thin tracking-wide">
          Welcome to my portfolio website. Please find all the required
          information about me here!
        </div>
      </div>
    </>
  );
};

export default About;
