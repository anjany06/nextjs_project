import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const Contact = () => {
  const people = [
    {
      id: 1,
      name: "Alice Johnson",
      designation: "Software Engineer",
      image: "https://source.unsplash.com/random/300x300/?person,technology",
    },
    {
      id: 2,
      name: "Bob Smith",
      designation: "Project Manager",
      image: "https://source.unsplash.com/random/300x300/?person,management",
    },
    {
      id: 3,
      name: "Catherine Lee",
      designation: "UI/UX Designer",
      image: "https://source.unsplash.com/random/300x300/?person,design",
    },
    {
      id: 4,
      name: "David Brown",
      designation: "Data Scientist",
      image: "https://source.unsplash.com/random/300x300/?person,data",
    },
    {
      id: 5,
      name: "Emily Carter",
      designation: "Product Owner",
      image: "https://source.unsplash.com/random/300x300/?person,product",
    },
  ];

  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
      <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
        <h2 className="">Meet Me Now!</h2>
        <p className="">
          Discover the talented professionals who will guide your musical
          journey
        </p>
      </WavyBackground>
    </div>
  );
};

export default Contact;
