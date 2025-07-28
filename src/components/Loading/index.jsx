import { useTheme } from "../../context/theme-context";

export const Loading = () => {
  const { theme, themes } = useTheme();
  return (
    <div
      className={`h-screen flex justify-center items-center ${
        theme === themes.light ? "bg-white" : "bg-neutral-900"
      }`}
    >
      <span
        className={`loading loading-dots loading-xl ${
          theme === themes.light ? "text-black" : "text-white"
        }`}
      ></span>
    </div>
  );
};
