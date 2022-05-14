import React from "react";

export default function Icon({ name, title }) {
  return (
    <>
      <div className="w-10 group aspect-square rounded hover:bg-white/10 select-none hover:ring-1 ring-white/5 p-2">
        <img src={`/icons/${name}.png`} alt="" />
      {/* Overlay */}
      <div className="hidden absolute group-hover:flex -mt-[4.6rem] bg-[#050E74] px-3 p-1.5 select-none hover:ring-1 ring-white/5 rounded text-sm fadein">
          <p className="w-max">{title}</p>
      </div>
      </div>

    </>
  );
}
