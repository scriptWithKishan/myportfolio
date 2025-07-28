import { useTheme } from "../../context/theme-context";
import SkillItem from "../SkillItem";

import { skillsData } from "./skills";

const SkillsPage = () => {
  const { theme, themes } = useTheme();

  return (
    <div className="p-5 w-full lg:p-20">
      <div className="flex justify-between w-full mb-6">
        <h2
          className={`text-base lg:text-2xl ${
            theme === themes.light ? "text-black" : "text-white"
          }`}
        >
          <span className={` text-5xl font-semibold `}>W</span>
          hat I do
        </h2>
        <hr
          className={`hidden lg:inline w-5/6 self-end ${
            theme === themes.light ? "text-black" : "text-white"
          }`}
        />
      </div>
      <ul className="gap-4 flex flex-wrap lg:gap-2 items-center justify-center">
        {skillsData.map((skill) => (
          <SkillItem key={skill.id} details={skill} />
        ))}
        <hr
          className={` w-1/3 self-center ${
            theme === themes.light ? "text-black" : "text-white"
          }`}
        />
      </ul>
    </div>
  );
};

export default SkillsPage;
