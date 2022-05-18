import { SearchIcon } from "@heroicons/react/outline";
import { PlusIcon, UserIcon } from "@heroicons/react/solid";
import React from "react";
import SportsWidget from "./widget-components/SportsWidget";
import StockWidget from "./widget-components/StockWidget";
import TodoWidget from "./widget-components/TodoWidget";

export default function Widgets() {
  const d = new Date();
  return (
    <div className="absolute hidden group-hover:block z-20 h-[835px] w-[750px] bg-gray-700/90 top-0 left-4 -mt-[800px] rounded-lg text-gray-200 fadein">
      {/* Header */}
      <div className="relative">
        <p className="absolute left-1/2 -translate-x-1/2 text-3xl mt-5">
          {d.getHours()}:{d.getMinutes()}
        </p>
        <div className="w-[88px] h-11 bg-gray-600/90 absolute right-4 top-4 rounded-md flex justify-center items-center">
          <PlusIcon className="w-6" />
          <div className="rounded-full w-7 aspect-square bg-zinc-200 ml-1 flex justify-center items-center">
            <UserIcon className="w-5 fill-zinc-700" />
          </div>
        </div>
      </div>
      {/* Search Bar */}
      <div className="w-[615px] h-9 bg-zinc-800/90 mt-20 relative left-1/2 -translate-x-1/2 rounded flex items-center">
        <SearchIcon className="w-5 ml-2" />
        <input
          type="text"
          name=""
          id=""
          className="h-7 bg-transparent ml-1 w-11/12 outline-none"
          placeholder="Search the web"
          autoFocus={true}
        />
      </div>
      {/* Widgets */}
      <div className="w-[615px] relative left-1/2 -translate-x-1/2 mt-8">
        {/* Stack 1 */}
        <div className="flex justify-between">
          {/* Sports Card */}
          <SportsWidget />
          {/* Stock Card */}
          <StockWidget />
        </div>
        {/* Stack 2 */}
        <TodoWidget />
      </div>
    </div>
  );
}
