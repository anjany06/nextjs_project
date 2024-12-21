"use Client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const skills = {
  "Programming Languages": [
    { name: "C++", logo: "/path/to/cpp-logo.png" },
    { name: "C", logo: "/path/to/c-logo.png" },
    { name: "Python", logo: "/path/to/python-logo.png" },
    { name: "Java", logo: "/path/to/java-logo.png" },
  ],
  "Development Skills": [
    { name: "HTML", logo: "/path/to/html-logo.png" },
    { name: "CSS", logo: "/path/to/css-logo.png" },
    { name: "JavaScript", logo: "/path/to/javascript-logo.png" },
    { name: "PHP", logo: "/path/to/php-logo.png" },
    { name: "MySQL", logo: "/path/to/mysql-logo.png" },
    { name: "MongoDB", logo: "/path/to/mongodb-logo.png" },
    { name: "Node.js", logo: "/path/to/nodejs-logo.png" },
    { name: "TypeScript", logo: "/path/to/typescript-logo.png" },
  ],
  "Libraries/Frameworks": [
    { name: "React JS", logo: "/path/to/react-logo.png" },
    { name: "Bootstrap", logo: "/path/to/bootstrap-logo.png" },
    { name: "Next.js", logo: "/path/to/nextjs-logo.png" },
    { name: "Tailwind", logo: "/path/to/tailwind-logo.png" },
    { name: "Material UI", logo: "/path/to/materialui-logo.png" },
  ],
  "Tools & Platforms": [
    { name: "Git", logo: "/path/to/git-logo.png" },
    { name: "GitHub", logo: "/path/to/github-logo.png" },
    { name: "Figma", logo: "/path/to/figma-logo.png" },
    { name: "VS Code", logo: "/path/to/vscode-logo.png" },
    { name: "Postman", logo: "/path/to/postman-logo.png" },
  ],
};

const SkillsCard = () => {
  // Flattening the skills into a single array for the moving cards
  const movingItems = Object.entries(skills).flatMap(([category, items]) =>
    items.map((skill) => ({
      category,
      name: skill.name,
      logo: skill.logo,
    }))
  );

  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">
        Here is my Tech Stack
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={movingItems}
            direction="right"
            speed="slow"
          />
          <InfiniteMovingCards
            items={movingItems}
            direction="left"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;
