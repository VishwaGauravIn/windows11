import {
  ChevronRightIcon,
  CogIcon,
  MoonIcon,
  PaperAirplaneIcon,
  PencilIcon,
  SunIcon,
  VolumeUpIcon,
  WifiIcon,
} from "@heroicons/react/outline";
import React from "react";

export default function TrayItems() {
  return (
    <div className="hidden group-hover:block w-[357px] h-[394px] bg-zinc-800/90 absolute right-0.5 bottom-3 rounded-lg ring-1 ring-zinc-300/10 p-5 fadein z-10">
      {/* Stack 1 */}
      <div className="flex justify-between text-sm">
        {/* Item 1 */}
        <div className="w-[98px] h-[51px] bg-cyan-400 rounded-md ring-1 ring-zinc-300/10 relative flex justify-center hover:bg-cyan-300 transition-all ease-in-out">
          <WifiIcon className="w-5 mr-6 stroke-gray-800" />
          <ChevronRightIcon className="w-5 stroke-gray-800" />
          <p className="absolute -bottom-7 left-1/2 -translate-x-1/2 opacity-95">
            WiFi
          </p>
        </div>
        {/* Item 2 */}
        <div className="w-[98px] h-[51px] bg-zinc-100/20 rounded-md ring-1 ring-zinc-300/10 relative flex justify-center hover:bg-zinc-100/30 transition-all ease-in-out">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 fill-zinc-100"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="m8.543 3.948 1.316 1.316L8.543 6.58V3.948Zm0 8.104 1.316-1.316L8.543 9.42v2.632Zm-1.41-4.043L4.275 5.133l.827-.827L7.377 6.58V1.128l4.137 4.136L8.787 8.01l2.745 2.745-4.136 4.137V9.42l-2.294 2.274-.827-.827L7.133 8.01ZM7.903 16c3.498 0 5.904-1.655 5.904-8.01 0-6.335-2.406-7.99-5.903-7.99C4.407 0 2 1.655 2 8.01 2 14.344 4.407 16 7.904 16Z"
            />
          </svg>
          <p className="absolute -bottom-7 left-1/2 -translate-x-1/2 opacity-95">
            Bluetooth
          </p>
        </div>
        {/* Item 3 */}
        <div className="w-[98px] h-[51px] bg-zinc-100/20 rounded-md ring-1 ring-zinc-300/10 relative flex justify-center hover:bg-zinc-100/30 transition-all ease-in-out">
          <PaperAirplaneIcon className="w-5" />
          <p className="absolute -bottom-7 left-1/2 -translate-x-1/2 w-max opacity-95">
            Airplane mode
          </p>
        </div>
      </div>
      {/* Stack 2 */}
      <div className="flex justify-between text-sm mt-12">
        {/* Item 1 */}
        <div className="w-[98px] h-[51px] bg-zinc-100/20 rounded-md ring-1 ring-zinc-300/10 relative flex justify-center hover:bg-zinc-100/30 transition-all ease-in-out">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 fill-zinc-100"
            viewBox="0 0 16 16"
          >
            <path d="M9.585 2.568a.5.5 0 0 1 .226.58L8.677 6.832h1.99a.5.5 0 0 1 .364.843l-5.334 5.667a.5.5 0 0 1-.842-.49L5.99 9.167H4a.5.5 0 0 1-.364-.843l5.333-5.667a.5.5 0 0 1 .616-.09z" />
            <path d="M2 4h4.332l-.94 1H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2.38l-.308 1H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
            <path d="M2 6h2.45L2.908 7.639A1.5 1.5 0 0 0 3.313 10H2V6zm8.595-2-.308 1H12a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H9.276l-.942 1H12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.405z" />
            <path d="M12 10h-1.783l1.542-1.639c.097-.103.178-.218.241-.34V10zm0-3.354V6h-.646a1.5 1.5 0 0 1 .646.646zM16 8a1.5 1.5 0 0 1-1.5 1.5v-3A1.5 1.5 0 0 1 16 8z" />
          </svg>
          <p className="absolute -bottom-7 left-1/2 -translate-x-1/2 w-max opacity-95">
            Battery saver
          </p>
        </div>
        {/* Item 2 */}
        <div className="w-[98px] h-[51px] bg-cyan-400 rounded-md ring-1 ring-zinc-300/10 relative flex justify-center hover:bg-cyan-300 transition-all ease-in-out">
          <MoonIcon className="w-5 -rotate-90 stroke-gray-800" />
          <p className="absolute -bottom-7 left-1/2 -translate-x-1/2 w-max opacity-95">
            Alarms only
          </p>
        </div>
        {/* Item 3 */}
        <div className="w-[98px] h-[51px] bg-zinc-100/20 rounded-md ring-1 ring-zinc-300/10 relative flex justify-center hover:bg-zinc-100/30 transition-all ease-in-out">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 fill-zinc-100"
            viewBox="0 0 16 16"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
          </svg>
          <p className="absolute -bottom-7 left-1/2 -translate-x-1/2 w-max opacity-95">
            Accessibility
          </p>
        </div>
      </div>
      {/* Stack 3 - Sliders */}
      <div className="mt-[68px]">
        {/* Brightness Slider */}
        <div className="flex">
          <SunIcon className="w-4" />
          <input type="range" name="" id="" className="w-[290px] ml-2" />
        </div>
        {/* Volume Slider */}
        <div className="flex mt-11">
          <VolumeUpIcon className="w-4" />
          <input type="range" name="" id="" className="w-[290px] ml-2" />
        </div>
      </div>
      {/* Tray-Footer */}
      <div className="absolute bottom-0 h-12 w-[357px] bg-zinc-900 right-[0px] rounded-b-md">
          <div className=" top-4 absolute left-4 flex text-xs items-center"><svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 fill-white mr-1"
          viewBox="0 0 16 16"
        >
          <path d="M2 6h5v4H2V6z" />
          <path d="M2 4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H2zm10 1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h10zm4 3a1.5 1.5 0 0 1-1.5 1.5v-3A1.5 1.5 0 0 1 16 8z" />
        </svg> 55%
        </div>
        
        <div className="absolute right-4 flex top-4">
          <PencilIcon className="w-5 stroke-1" />
          <CogIcon className="w-5 stroke-1 ml-6" />
        </div>
      </div>
    </div>
  );
}
