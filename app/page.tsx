import ThemeToggle from "@/components/ThemeToggle";
import React from "react";

const Home = () => {
  return (
    <div className="size-full p-4 bg-bgClr">
      <ThemeToggle />
      <div className="mt-10 text-lg/7 text-textClr">
        Using next-theme package implemented this toggletheme mode.
      </div>
    </div>
  );
};

export default Home;
