"use client";
import React from "react";
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

const UpcomingWebinars = () => {
  const featuredWebinars = [
    {
      title: "Mastering React.js: Advanced Techniques",
      description:
        "Explore advanced React.js concepts, including hooks, context API, and performance optimization. Perfect for developers looking to elevate their skills.",
      slug: "mastering-reactjs-advanced-techniques",
      isFeatured: true,
    },
    {
      title: "Building Scalable Web Apps with Firebase",
      description:
        "Learn how to use Firebase to create scalable, secure, and real-time web applications. Ideal for beginners and experienced developers.",
      slug: "building-scalable-web-apps-with-firebase",
      isFeatured: false,
    },
    {
      title: "Tailwind CSS: Designing Modern UI",
      description:
        "Dive into the world of Tailwind CSS and learn how to design responsive and modern user interfaces efficiently.",
      slug: "tailwind-css-designing-modern-ui",
      isFeatured: true,
    },
    {
      title: "Introduction to TypeScript",
      description:
        "Understand the basics of TypeScript, its benefits over JavaScript, and how to integrate it into your projects for better scalability.",
      slug: "introduction-to-typescript",
      isFeatured: false,
    },
    {
      title: "Full Stack Development with MERN",
      description:
        "Discover the power of the MERN stack (MongoDB, Express, React, Node.js) and how to build full-stack web applications from scratch.",
      slug: "full-stack-development-with-mern",
      isFeatured: true,
    },
  ];

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED WEBINAR
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Enhance Your Musical Journey
          </p>
        </div>
        <div className="max-w-full mx-auto px-4 sm:px-8 mt-10">
          <HoverEffect
            items={featuredWebinars.map((webinar, index) => ({
              id: webinar.slug,
              title: webinar.title,
              description: webinar.description,
              link: `/webinars/${webinar.slug}`,
            }))}
          />
        </div>
        <div className="mt-20 text-center">
          <Link
            href={"/courses"}
            className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white 
        hover:bg-gray-100 transition duration-200"
          >
            View All Webinars
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpcomingWebinars;
