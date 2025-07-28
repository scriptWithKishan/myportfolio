import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export const skillsData = [
  {
    id: 1,
    name: "Vanilla JavaScript",
    description:
      "Strong foundation in core JavaScript principles including ES6+, DOM manipulation, and event-driven programming.",
    icon: <SiJavascript className="text-yellow-400" />,
  },
  {
    id: 2,
    name: "TypeScript",
    description:
      "Skilled in using TypeScript to build scalable, type-safe, and maintainable applications.",
    icon: <SiTypescript className="text-blue-600" />,
  },
  {
    id: 3,
    name: "HTML & CSS",
    description:
      "Expertise in creating responsive and semantic UIs using HTML5 and modern CSS techniques.",
    icon: (
      <div className="flex gap-1">
        <SiHtml5 className="text-orange-600" />
        <SiCss3 className="text-blue-500" />
      </div>
    ),
  },
  {
    id: 5,
    name: "TailwindCSS",
    description:
      "Rapid UI development using utility-first CSS with Tailwind for clean, scalable designs.",
    icon: <SiTailwindcss className="text-cyan-400" />,
  },
  {
    id: 4,
    name: "React & Node.js",
    description:
      "Full-stack proficiency with React for dynamic UIs and Node.js for scalable backend services.",
    icon: (
      <div className="flex gap-1">
        <SiReact className="text-cyan-400" />
        <SiNodedotjs className="text-green-600" />
      </div>
    ),
  },
  {
    id: 6,
    name: "MongoDB",
    description:
      "Experience building NoSQL solutions using MongoDB with Mongoose for schema design.",
    icon: <SiMongodb className="text-green-700" />,
  },
  {
    id: 7,
    name: "Next.js",
    description:
      "Expertise in server-side rendering, routing, and API integration with Next.js for full-stack apps.",
    icon: <SiNextdotjs className="text-gray-500" />,
  },
  {
    id: 8,
    name: "Python",
    description: "Versatile in Python for scripting and AI/ML projects.",
    icon: <SiPython className="text-yellow-400" />,
  },
];
