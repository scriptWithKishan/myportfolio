import { useAuth0 } from "@auth0/auth0-react";
import { useTheme } from "../../context/theme-context";
import { LoginButton, RedirectButton } from "../AuthButtons";

const LandingPage = () => {
  const { theme, themes } = useTheme();

  const { isAuthenticated } = useAuth0();

  return (
    <div
      className={`h-screen space-y-10 flex flex-col justify-center items-center ${
        theme === themes.light ? "bg-white" : "bg-neutral-900"
      }`}
    >
      <h1
        className={`text-5xl ${
          theme === themes.light ? "text-black" : "text-white"
        } `}
      >
        My Portfolio
      </h1>

      {isAuthenticated ? <RedirectButton /> : <LoginButton />}
    </div>
  );
};

export default LandingPage;
