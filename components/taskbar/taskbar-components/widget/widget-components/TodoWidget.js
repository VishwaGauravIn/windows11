import { DotsHorizontalIcon, HomeIcon } from "@heroicons/react/outline";
import React from "react";

export default function TodoWidget() {
  return (
    <div className="bg-zinc-800/80 w-full h-[500px] rounded p-4 mt-4">
      <div className="flex relative items-center">
        <img src="/icons/todo.png" alt="" className="w-5 mr-3" />
        <p className="opacity-90">To Do</p>
        <DotsHorizontalIcon className="w-5 mt-0.5 absolute right-0" />
      </div>
      {/* Tasks Collection Selection */}
      <div className="flex bg-zinc-100/10 hover:bg-zinc-100/20 transition-all ease-in-out w-max px-1 pr-2 py-1 rounded mt-4 ml-4">
          <HomeIcon className="w-5"/>
          <p className="ml-1 font-medium">Tasks</p>
      </div>
      {/* Tasks */}
      <div className="px-4 p-4">
        {/* Task 1 */}
        <a
          href="https://github.com/VishwaGauravIn"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full h-10 rounded bg-zinc-100/20 px-2 flex items-center hover:bg-zinc-100/30 transition-all ease-in-out"
        >
          <input
            type="checkbox"
            name=""
            id=""
            className="outline-none w-4 h-4 accent-cyan-400"
          />
          <p className="ml-2 text-sm">Visit our GitHub</p>
        </a>
        {/* Task 2 */}
        <a
          href="https://www.linkedin.com/in/VishwaGauravIn"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full h-10 rounded bg-zinc-100/20 px-2 flex items-center mt-4 hover:bg-zinc-100/30 transition-all ease-in-out"
        >
          <input
            type="checkbox"
            name=""
            id=""
            className="outline-none w-4 h-4 accent-cyan-400"
          />
          <p className="ml-2 text-sm">Follow us on LinkedIn</p>
        </a>
        {/* Task 3 */}
        <a
          href="https://twitter.com/vishwagauravin"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full h-10 rounded bg-zinc-100/20 px-2 flex items-center mt-4 hover:bg-zinc-100/30 transition-all ease-in-out"
        >
          <input
            type="checkbox"
            name=""
            id=""
            className="outline-none w-4 h-4 accent-cyan-400"
          />
          <p className="ml-2 text-sm">Check our tweets !</p>
        </a>
        {/* Task 4 */}
        <a
          href="https://github.com/VishwaGauravIn/windows11-clone"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full h-10 rounded bg-zinc-100/20 hover:bg-zinc-100/30 transition-all ease-in-out px-2 flex items-center mt-4"
        >
          <input
            type="checkbox"
            name=""
            id=""
            className="outline-none w-4 h-4 accent-cyan-400"
          />
          <p className="ml-2 text-sm">Contribute to our Project</p>
        </a>
        {/* <p className="text-center mt-4 opacity-20">Dimensions: 1536x864px</p> */}

      </div>
    </div>
  );
}
