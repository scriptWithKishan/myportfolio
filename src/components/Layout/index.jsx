import { useTheme } from "../../context/theme-context";

import { Outlet } from "react-router";
import { Navbar } from "../Navbar";

import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";

const PageLayout = () => {
  const { theme, themes } = useTheme();

  return (
    <div
      className={`min-h-screen flex flex-col ${
        theme === themes.light ? "bg-white" : "bg-neutral-900"
      }`}
    >
      <Navbar />
      <div className="flex flex-1 justify-between">
        <ul className="space-y-5 px-8 py-10 flex flex-col justify-end">
          <li>
            <a target="_black" href="https://github.com/scriptWithKishan">
              <div
                className={`border-2 rounded-3xl p-2 ${
                  theme === themes.light ? "border-black" : "border-white"
                }`}
              >
                <FiGithub
                  className={
                    theme === themes.light ? "text-black" : "text-white"
                  }
                />
              </div>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/kishan-a-04705b234/"
            >
              <div
                className={`border-2 rounded-3xl p-2 ${
                  theme === themes.light ? "border-black" : "border-white"
                }`}
              >
                <FaLinkedinIn
                  className={
                    theme === themes.light ? "text-black" : "text-white"
                  }
                />
              </div>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://x.com/KishanA76586656">
              <div
                className={`border-2 rounded-3xl p-2 ${
                  theme === themes.light ? "border-black" : "border-white"
                }`}
              >
                <FaTwitter
                  className={
                    theme === themes.light ? "text-black" : "text-white"
                  }
                />
              </div>
            </a>
          </li>
        </ul>
        <div className="flex-1 overflow-auto">
          <Outlet />
        </div>
        <div className="flex flex-col justify-around items-center py-50">
          <p
            className={`${
              theme === themes.light ? "text-black" : "text-white"
            } -rotate-90 whitespace-nowrap`}
          >
            kishan.2785.2003@gmail.com
          </p>
          <div
            className={`w-0.5 h-8 rotate-90 ${
              theme === themes.light ? "bg-black" : "bg-white"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default PageLayout;
