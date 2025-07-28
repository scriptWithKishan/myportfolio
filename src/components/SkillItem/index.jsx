import { useTheme } from "../../context/theme-context";

const SkillItem = ({ details }) => {
  const { name, description, icon } = details;
  const { theme, themes } = useTheme();

  return (
    <li className="w-[140px] h-[220px] p-4 lg:w-[200px] lg:h-[220px] space-y-3">
      <div className="text-3xl">{icon}</div>
      <h3
        className={`text-xs lg:text-sm font-semibold ${
          theme === themes.light ? "text-black" : "text-white"
        }`}
      >
        {name}
      </h3>
      <p
        className={`text-xs  ${
          theme === themes.light ? "text-black" : "text-white"
        }`}
      >
        {description}
      </p>
    </li>
  );
};

export default SkillItem;
