import { useTheme } from "../../context/theme-context";

const ResumePage = () => {
  const { theme, themes } = useTheme();

  return (
    <div className="w-full h-full flex flex-col items-center justify-center space-y-8">
      <div className="flex-col space-x-0 space-y-10 lg:flex-row flex items-center lg:space-x-10 lg:space-y-0">
        <img
          className={`w-[350px] h-[500px] ${
            theme === themes.light
              ? "shadow-sm hover:shadow-lg"
              : "shadow-neutral-800 shadow-sm hover:shadow-lg"
          }`}
          src={`${
            theme === themes.light ? "/page-1-light.png" : "/page-1-dark.png"
          }`}
          alt="resume"
        />
        <img
          className={`w-[350px] h-[500px] ${
            theme === themes.light
              ? "shadow-sm hover:shadow-lg"
              : "shadow-neutral-800 shadow-sm hover:shadow-lg"
          }`}
          src={`${
            theme === themes.light ? "/page-2-light.png" : "/page-2-dark.png"
          }`}
          alt="resume"
        />
      </div>
      <p
        className={`mb-10 lg:mb-0 text-base ${
          theme === themes.light ? "text-black" : "text-white"
        }`}
      >
        To download the Resume{" "}
        <a
          className={`link link-hover font-semibold ${
            theme === themes.light ? "link-neutral" : ""
          }`}
          href="/resume.pdf"
          download
        >
          click here
        </a>
      </p>
    </div>
  );
};

export default ResumePage;
