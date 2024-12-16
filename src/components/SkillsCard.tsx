"use Client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
const testimonials = [
  {
    quote:
      "Working with Anjany was a game-changer for our project. His dedication and problem-solving skills were unparalleled. He took our ideas and turned them into reality with finesse.",
    name: "John Doe",
    title: "Software Engineer",
  },
  {
    quote:
      "Anjany's ability to stay focused and deliver quality work under tight deadlines is impressive. His innovative thinking and attention to detail make him an invaluable asset to any team.",
    name: "Jane Smith",
    title: "Project Manager",
  },
  {
    quote:
      "Anjany has a rare talent for understanding complex user needs and translating them into intuitive designs. His creativity and collaborative spirit make every project a joy to work on.",
    name: "Michael Lee",
    title: "UI/UX Designer",
  },
  {
    quote:
      "It's not often you find someone who is equally skilled in technical and interpersonal aspects of work. Anjany is one of those rare individuals who excels in both.",
    name: "Emily Carter",
    title: "Product Owner",
  },
];

const SkillsCard = () => {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">
        Here is my Tech Stack
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="fast"
          />
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;
