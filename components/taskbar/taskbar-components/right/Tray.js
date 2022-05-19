import React from "react";
import {
  ChevronUpIcon,
  MoonIcon,
  RefreshIcon,
  VolumeOffIcon,
  WifiIcon,
} from "@heroicons/react/outline";
import TrayItems from "./right-components/TrayItems";

export default function Tray() {
  const d = new Date();
  return (
    <div className="absolute right-0 mr-3 opacity-90 flex items-center">
      {/* Minor Tray */}
      <ChevronUpIcon className="w-[24px] stroke-[1] hover:bg-white/10 h-12 px-0.5" />
      <RefreshIcon className="w-[24px] stroke-[1] hover:bg-white/10 h-12 -scale-x-100 px-0.5" />
      {/* Tray Icons (post) */}
      <div className="flex flex-wrap space-x-2 px-2 ml-1 rounded hover:bg-white/10 select-none hover:ring-1 ring-white/5 py-2.5 group">
        <WifiIcon className="w-[18px] stroke-[2]" />
        <VolumeOffIcon className="w-[18px] stroke-[2]" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-[18px] stroke-[2] fill-white"
          viewBox="0 0 16 16"
        >
          <path d="M2 6h5v4H2V6z" />
          <path d="M2 4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H2zm10 1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h10zm4 3a1.5 1.5 0 0 1-1.5 1.5v-3A1.5 1.5 0 0 1 16 8z" />
        </svg>
      <TrayItems />
      </div>
      {/* Date-Time and DND */}
      <div className="flex rounded hover:bg-white/10 select-none hover:ring-1 ring-white/5 mr-2 py-0.5 px-2">
        <div className="text-xs mr-2">
          <p className="text-right">
            {d.getHours()}:{d.getMinutes()}
          </p>
          <p className="">
            {d.getDate()}-
            {d.getUTCMonth() < 10 ? `0${d.getMonth() + 1}` : d.getMonth()}-
            {d.getUTCFullYear()}
          </p>
        </div>
        <MoonIcon className="w-5 stroke-[1.5] -rotate-90" />
      </div>
    </div>
  );
}
