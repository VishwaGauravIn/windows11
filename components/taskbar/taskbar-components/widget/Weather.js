import React from "react";
import Widgets from "./Widgets";

export default function Weather() {
  return (
    <>
      <div className="ml-3 flex group flex-wrap justify-center items-center pl-2 pr-16 py-1 rounded hover:bg-white/10 select-none hover:ring-1 ring-white/5">
        <img src="/icons/sunny-cloud.png" alt="" className="w-7 h-7" />
        <div className="ml-2">
          <p className="text-xs opacity-95">40°C</p>
          <p className="text-xs opacity-80">Cloudy</p>
        </div>
      <Widgets/>
      </div>
    </>
  );
}
