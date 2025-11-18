import React from "react";
import { FaTelegramPlane } from "react-icons/fa";

function Home() {
  const handleTelegram = () => {
    const username = "@love_you_husband"; // Replace with your Telegram username
    window.open(`https://t.me/${username}`, "_blank");
  };

  return (
    <section
      id="home"
      className="relative flex items-center min-h-screen gap-10 px-20 py-20 bg-cover bg-center"
    >
      {/* Content */}
      <div className="relative flex flex-col md:flex-row items-center gap-10 z-10">
        {/* Image */}
        <img
          src="/images/me.jpg"
          alt="me"
          className="h-[550px] w-90 object-cover object-top rounded-2xl shadow-2xl shadow-black/40 hover:shadow-orange-500/40 hover:scale-[1.02] transition-all duration-500 border-2 border-orange-400/50 mt-20 brightness-90"
        />

        {/* Text */}
        <div className="flex flex-col gap-6 text-white">
          <h1 className="text-4xl font-bold animate-float">
            Hello, I am <span className="text-orange-400">Senait Agumasie</span>
          </h1>

          <h2 className="text-3xl animate-float">
            Full Stack Developer
          </h2>

          <p className="text-lg animate-float">
            I create web solutions that solve real problems, combining responsive design,
            <br />
            smooth functionality, and user-focused experiences.
          </p>

          <button 
            onClick={handleTelegram}
            className="flex items-center gap-2 px-10 py-3 bg-orange-400 text-white rounded-full hover:bg-blue-500 transition duration-300 ease-in-out w-fit mt-4"
          >
            <FaTelegramPlane className="text-2xl" />
            Say Hello!
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home;
