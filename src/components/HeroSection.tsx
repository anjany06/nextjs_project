"use client";
import React from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
import { FaXTwitter } from "react-icons/fa6";

function HeroSection() {
  return (
    <div
      className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center
     justify-center relative overflow-hidden mx-auto py-10 md:py-0"
    >
      {" "}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-24 md:mt-8 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Hello I'm Anjany Pandey
        </h1>
        <p className="mt-5 font-normal text-base md:text-xl text-neutral-300 max-w-xl mx-auto">
          A Passionate front-end developer with a strong
          foundation in C++ and a growing expertise in React.js, currently
          pursuing BCA from VIPS-TC. I enjoy turning complex problems into
          simple, beautiful, and intuitive designs.
        </p>
        <div className="mt-6 flex md:flex-row flex-col justify-center items-center gap-8">
          <div>
            <Link href={"/courses"}>
              <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
              >
                Explore More
              </Button>
            </Link>
          </div>

          <div className="flex gap-5">
            <Button
              borderRadius="0rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
              style={{ width: "50px", height: "50px" }}
            >
              <FaGithub style={{ width: "30px", height: "30px" }} />
            </Button>
            <Button
              borderRadius="0rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
              style={{ width: "50px", height: "50px" }}
            >
              <FaLinkedin style={{ width: "30px", height: "30px" }} />
            </Button>
            <Button
              borderRadius="0rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
              style={{ width: "50px", height: "50px" }}
            >
              <FaXTwitter style={{ width: "30px", height: "30px" }} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
