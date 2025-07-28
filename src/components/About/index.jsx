import React from "react";
import { useTheme } from "../../context/theme-context";

const AboutPage = () => {
  const { theme, themes } = useTheme();

  return (
    <div className={`w-full p-20`}>
      <div className="flex justify-between w-full mb-6">
        <h2
          className={`text-2xl  ${
            theme === themes.light ? "text-black" : "text-white"
          }`}
        >
          <span className={` text-5xl font-semibold `}>T</span>
          his is it,{" "}
          <span className="text-4xl">;{`)`}</span>
        </h2>
        <hr
          className={` w-5/6 self-end ${
            theme === themes.light ? "text-black" : "text-white"
          }`}
        />
      </div>
      <div className="flex flex-col space-y-10">
        <p
          className={`text-base leading-loose text-justify ${
            theme === themes.light ? "text-black" : "text-white"
          }`}
        >
          Kishan A. is an Indian{" "}
          <span className="font-semibold">
            {" "}
            Full Stack Developer, AI Innovator & Tech Explorer{" "}
          </span>
          with a relentless drive to reimagine how technology intersects with
          everyday life. Boldly curious and passionately hands-on, Kishan
          thrives at the intersection of creativity and code — turning ambitious
          ideas into clean, user-focused digital experiences.
          <br />
          He holds a bachelor’s degree in{" "}
          <span className="font-semibold"> Computer Science & Engineering</span>
          . Throughout his academic journey, Kishan has led from the front —
          developing AgriTech AI, a visionary project that detects plant
          diseases using deep learning and helps farmers take early preventive
          action.
          <br />
          He has hands-on expertise in the{" "}
          <span className="font-semibold">
            MERN stack, RESTful APIs, and machine learning,{" "}
          </span>{" "}
          and has built robust projects using{" "}
          <span className="font-semibold">
            {" "}
            React, Node.js, MongoDB, and TensorFlow{" "}
          </span>
          . From intuitive <span className="font-semibold"> UI/UX </span> to
          complex backend logic, Kishan builds software that not only works, but
          matters.
          <br />
          Currently based in India, he operates as an independent creator,
          constantly experimenting — whether it's building a next-gen portfolio
          in React, optimizing CNN models for real-time prediction, or diving
          deep into prompt engineering and AI innovation.
          <br />
          His passion isn’t limited to code. He’s deeply inspired by system
          design, visual storytelling, and the joy of turning a whiteboard
          sketch into a live product. When he’s not coding, you’ll find him
          sketching ideas, analyzing UX flows, bingeing on tech tutorials, or
          reverse-engineering something just to rebuild it better.
        </p>
        <hr
          className={` w-1/3 self-center ${
            theme === themes.light ? "text-black" : "text-white"
          }`}
        />
      </div>
    </div>
  );
};

export default AboutPage;
