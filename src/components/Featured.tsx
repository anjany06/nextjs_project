"use client";
import React from "react";
import courseData from "../data/music_courses.json";
import Link from "next/link";
import Image from "next/image";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
  id: number;
  title: string;
  description: string;
  isFeatured: boolean;
  image: string;
  code: string; // Add this line
  Link: string;
}

const Featured = () => {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );

  return (
    <div className="py-12 bg-gray-900 ">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            "Simple Projects, Big Learning"
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            FEATURED PROJECTS
          </p>
        </div>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCourses.map((course: Course) => (
            <div key={course.id} className="flex justify-center m-3">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm relative">
                <div className="p-2 sm:m-2 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <p className="text-2xl sm:text-xl text-black dark:text-neutral-200">
                    {course.title}
                  </p>
                  <img
                    src={course.image}
                    alt={course.title}
                    width={500}
                    height={500}
                    className="w-full h-48 px-3 py-6 object-cover rounded-lg group-hover/card:shadow-xl"
                  />
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                    {course.description}
                  </p>
                  <div className="flex space-x-4 mt-4 mb-2 sm:mb-4">
                    <Link href={course.Link}>
                      <button className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">
                        View
                      </button>
                    </Link>
                    <Link href={course.code}>
                      <button className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">
                        Code
                      </button>
                    </Link>
                  </div>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link
          href={"/courses"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white 
        hover:bg-gray-100 transition duration-200"
        >
          View All Courses
        </Link>
      </div>
    </div>
  );
};

export default Featured;
