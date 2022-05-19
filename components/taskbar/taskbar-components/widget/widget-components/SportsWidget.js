import { DotsHorizontalIcon } from "@heroicons/react/outline";
import React from "react";

export default function SportsWidget() {
  return (
    <div className="w-[301px] bg-zinc-800/80 h-[145px] rounded p-4">
      <div className="flex relative">
        <img src="/icons/ipl.png" alt="" className="w-4 mr-3" />
        <p className="opacity-90">Indian Premier League</p>
        <DotsHorizontalIcon className="w-5 mt-0.5 absolute right-0" />
      </div>
      {/* Scores */}
      <div className="flex mt-5 relative">
        <img src="/icons/csk.png" alt="" className="w-[52px] opacity-80" />
        <div className="text-sm ml-1 mt-2 opacity-80">
          <p className="">200/7</p>
          <p className="">20.0 overs</p>
        </div>

        <img
          src="/icons/mi.png"
          alt=""
          className="w-[52px] opacity-80 h-10 absolute right-0 mt-1"
        />
        <div className="text-sm ml-6 mt-2 opacity-80">
          <p className="text-right">138/7</p>
          <p className="">16.8 overs</p>
        </div>
      </div>
      {/* For Extras */}
      <p className="text-sm mt-2 text-center text-cyan-500 opacity-80 hover:opacity-100 transition-all ease-in-out">
        <a
          href="https://www.cricbuzz.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          See more about IPL
        </a>
      </p>
    </div>
  );
}
