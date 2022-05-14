import React from "react";

export default function Icon({ name }) {
  return (
    <>
      <div className="w-10 aspect-square rounded hover:bg-white/10 select-none hover:ring-1 ring-white/5 p-2">
        <img src={`/icons/${name}.png`} alt="" />
      </div>
      {/* Overlay */}
      
    </>
  );
}
