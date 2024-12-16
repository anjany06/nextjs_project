"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
const content = [
  {
    title: "Collaborative Problem-Solving",
    description:
      "I enjoy working with teams, clients, and stakeholders to tackle challenges head-on. Whether it's brainstorming new ideas or streamlining workflows, I believe in the power of collaboration to drive productivity and achieve impactful results.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Collaborative Problem-Solving
      </div>
    ),
  },
  {
    title: "Continuous Learning",
    description:
      "Staying updated is essential in the tech world. I continuously strive to learn new technologies and refine my skills. Real-time learning and adapting to changes have become a part of my daily routine, keeping me aligned with industry trends.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        {/* <Image
          src="/mypic.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Learning illustration"
        /> */}
        Continuous Learning
      </div>
    ),
  },
  {
    title: "Project Ownership",
    description:
      "I value taking ownership of my projects. By focusing on version control and efficient workflows, I ensure that each task is completed with precision and professionalism. My goal is to deliver work that is not only functional but also impactful.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Project Ownership
      </div>
    ),
  },
  {
    title: "Creative Problem-Solving",
    description:
      "I believe that challenges are opportunities in disguise. With a creative and analytical mindset, I strive to find innovative solutions to problems while maintaining a focus on delivering value through my work.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Creative Problem-Solving
      </div>
    ),
  },
];

const WhyChooseUs = () => {
  return (
    <div>
      <StickyScroll content={content} />
    </div>
  );
};

export default WhyChooseUs;
