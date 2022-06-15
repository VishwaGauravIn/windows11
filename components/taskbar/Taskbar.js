import React from "react";
import Icons from "./taskbar-components/center/Icons";
import Tray from "./taskbar-components/right/Tray";
import Weather from "./taskbar-components/widget/Weather";

export default function Taskbar() {
  return (
    <div className="absolute top-[100vh] -mt-12 h-12 w-[100vw] bg-[#030C1B] flex items-center">
      <Weather />
      <Icons />
      <Tray />
    </div>
  );
}
