import React from "react";
import { useTheme } from "../../context/theme-context";
import { useNavigate } from "react-router";

const HomePage = () => {
  const { theme, themes } = useTheme();
  const navigate = useNavigate();

  return (
    <div className="p-10 flex justify-between items-center lg:p-20 h-full">
      <div className="">
        <div className="bg-linear-to-r from-cyan-300 to-stone-500 rounded-tl-4xl rounded-r-4xl py-2 px-4 inline-block">
          <h3 className="text-white font-bold text-md">Hello!</h3>
        </div>
        <h1
          className={`text-5xl ${
            theme === themes.light ? "text-black" : "text-white"
          }`}
        >
          I'm{" "}
          <span
            className={`text-gray-400 underline font-bold ${
              theme === themes.light ? "decoration-black" : "decoration-white"
            }`}
          >
            Kishan A
          </span>
        </h1>
        <p
          className={`text-xl lg:text-2xl mt-4 ${
            theme === themes.light ? "text-black" : "text-white"
          }`}
        >
          Full Stack Developer, UI/UX Design & Thinker.
        </p>
        <p
          className={`text-xl mt-1 ${
            theme === themes.light ? "text-black" : "text-white"
          }`}
        >
          Based in Bangalore
        </p>
        <div className="flex space-x-10 mt-20">
          <button
            onClick={() => navigate("/resume")}
            className="btn bg-linear-to-r from-red-500 to-orange-300 border-2 border-white"
          >
            Download CV
          </button>
          <button
            onClick={() => navigate("/contact")}
            className="btn border-2 border-white"
          >
            Get in Touch
          </button>
        </div>
      </div>
      <img
        className="hidden lg:block self-center h-[350px] w-[350px]"
        src="/developer.png"
        alt="developer"
      />
    </div>
  );
};

export default HomePage;
