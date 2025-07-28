import { useRef, useState } from "react";

import emailjs from "@emailjs/browser";

import { useTheme } from "../../context/theme-context";

const ContactPage = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("");
  const { theme, themes } = useTheme();

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("Message sent!"), formRef.current.reset();
        },
        () => setStatus("Failed to send!.")
      );
  };

  return (
    <div className={`w-full p-20`}>
      <div className=" flex justify-between w-full mb-6">
        <h2
          className={`text-2xl  ${
            theme === themes.light ? "text-black" : "text-white"
          }`}
        >
          <span className={` text-5xl font-semibold `}>C</span>
          ontact Me
        </h2>
        <hr
          className={` w-5/6 self-end ${
            theme === themes.light ? "text-black" : "text-white"
          }`}
        />
      </div>
      <div className="w-full flex justify-center items-center mt-10">
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="flex flex-col space-y-2 w-2xl"
        >
          <div className="space-y-2">
            <label
              className={`validator flex flex-col space-y-2 `}
              htmlFor="username"
            >
              <p
                className={`text-base font-semibold ${
                  theme === themes.light ? "text-black" : "text-white"
                }`}
              >
                Username
              </p>
              <input
                name="user_name"
                id="username"
                type="text"
                placeholder="John Doe"
                className="bg-transparent border-gray-500 border-1 text-gray-500 outline-0 p-2 rounded-md w-md"
                required
                pattern="[A-Za-z][A-Za-z0-9\-]*"
                minLength="3"
                maxLength="30"
              />
            </label>

            <p className="validator-hint">
              Must be 3 to 30 characters containing only letters, numbers or
              dash
            </p>
          </div>
          <div className="space-y-2">
            <label
              className={`validator flex flex-col space-y-2 `}
              htmlFor="email"
            >
              <p
                className={`text-base font-semibold ${
                  theme === themes.light ? "text-black" : "text-white"
                }`}
              >
                Email
              </p>
              <input
                name="user_email"
                id="email"
                type="email"
                placeholder="johndoe@example.com"
                className="bg-transparent border-gray-500 border-1 text-gray-500 outline-0 p-2 rounded-md w-md"
                required
              />
            </label>

            <p className="validator-hint">Enter valid email address</p>
          </div>
          <div className="space-y-2">
            <label
              className={`validator flex flex-col space-y-2 `}
              htmlFor="message"
            >
              <p
                className={`text-base font-semibold ${
                  theme === themes.light ? "text-black" : "text-white"
                }`}
              >
                Message
              </p>
              <textarea
                name="message"
                id="message"
                placeholder="Your Message"
                className="bg-transparent border-gray-500 border-1 text-gray-500 outline-0 p-2 rounded-md w-md"
                required
                minLength="15"
                maxLength="155"
                rows="3"
              ></textarea>
            </label>

            <p className="validator-hint">Minimum 15 characters required</p>
          </div>
          <button
            type="submit"
            className={`btn w-20 ${
              theme === themes.light ? "btn-neutral" : "bg-white text-black"
            }`}
          >
            Send
          </button>
          {status && (
            <p
              className={`text-center font-semibold ${
                theme === themes.light ? "text-black" : "text-white"
              }`}
            >
              {status}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
