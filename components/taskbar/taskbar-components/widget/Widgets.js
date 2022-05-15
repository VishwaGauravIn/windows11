import { PlusIcon, UserIcon } from "@heroicons/react/solid";
import React from "react";

export default function Widgets() {
  return (
    <div className="absolute z-20 h-[835px] w-[750px] bg-gray-700/90 top-0 left-4 -mt-[800px] rounded-lg text-gray-200">
      {/* Header */}
      <div className="relative">
        <p className="absolute left-1/2 -translate-x-1/2 text-3xl mt-6">
          15:44
        </p>
        <div className="w-[88px] h-12 bg-gray-600/90 absolute right-4 top-4 rounded-md flex justify-center items-center">
          <PlusIcon className="w-7" />
          <div className="rounded-full w-8 aspect-square bg-zinc-200 ml-1 flex justify-center items-center">
            <UserIcon className="w-6 fill-zinc-700" />
          </div>
        </div>
      </div>
    </div>
  );
}
