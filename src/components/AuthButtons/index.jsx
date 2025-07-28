import { useAuth0 } from "@auth0/auth0-react";
import { useTheme } from "../../context/theme-context";
import { Navigate, useNavigate } from "react-router";

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  const { theme, themes } = useTheme();

  return (
    <button
      className={`btn ${
        theme === themes.light
          ? "bg-neutral-900 text-white"
          : "bg-gray-300 text-black"
      }`}
      onClick={() => loginWithRedirect()}
    >
      Login
    </button>
  );
};

export const LogoutButton = () => {
  const { theme, themes } = useTheme();
  const { logout } = useAuth0();

  return (
    <button
      className={`btn ${
        theme === themes.light
          ? "bg-neutral-900 text-white"
          : "bg-gray-300 text-black"
      }`}
      onClick={() =>
        logout({
          logoutParams: {
            returnTo: window.location.origin,
          },
        })
      }
    >
      Logout
    </button>
  );
};

export const RedirectButton = () => {
  const navigate = useNavigate();
  const { theme, themes } = useTheme();

  return (
    <button
      className={`btn ${
        theme === themes.light
          ? "bg-neutral-900 text-white"
          : "bg-gray-300 text-black"
      }`}
      onClick={() => navigate("/home")}
    >
      Go to Home Page
    </button>
  );
};
