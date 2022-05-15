import React from "react";
import { MoonIcon } from "@heroicons/react/outline";

export default function Tray() {
  return (
    <div className="absolute right-0 mr-5 opacity-95 flex flex-wrap">
      {/* Date-Time and DND */}
      <div className="">
        <div className="text-xs mr-2">
          <p className="text-right">14:16</p>
          <p className="">15-05-2022</p>
        </div>
        <MoonIcon className="w-5 stroke-[1.5] -rotate-90" />
      </div>
    </div>
  );
}
