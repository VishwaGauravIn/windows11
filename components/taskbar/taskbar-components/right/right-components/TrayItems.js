import React from "react";

export default function TrayItems() {
  return (
    <div className="w-[357px] h-[394px] bg-zinc-900/90 absolute right-0.5 bottom-3 rounded-lg ring-1 ring-zinc-300/10 p-5">
      {/* Stack 1 */}
      <div className="flex justify-between text-sm">
        <div className="w-[98px] h-[51px] bg-cyan-400 rounded-md ring-1 ring-zinc-300/10 relative">
          <p className="absolute -bottom-7 left-1/2 -translate-x-1/2 opacity-95">
            WiFi
          </p>
        </div>
        <div className="w-[98px] h-[51px] bg-zinc-100/20 rounded-md ring-1 ring-zinc-300/10 relative">
          <p className="absolute -bottom-7 left-1/2 -translate-x-1/2 opacity-95">
            Bluetooth
          </p>
        </div>
        <div className="w-[98px] h-[51px] bg-zinc-100/20 rounded-md ring-1 ring-zinc-300/10 relative">
          <p className="absolute -bottom-7 left-1/2 -translate-x-1/2 w-max opacity-95">
            Airplane mode
          </p>
        </div>
      </div>
      {/* Stack 1 */}
      <div className="flex justify-between text-sm mt-12">
        <div className="w-[98px] h-[51px] bg-zinc-100/20 rounded-md ring-1 ring-zinc-300/10 relative">
          <p className="absolute -bottom-7 left-1/2 -translate-x-1/2 w-max opacity-95">
            Battery saver
          </p>
        </div>
        <div className="w-[98px] h-[51px] bg-cyan-400 rounded-md ring-1 ring-zinc-300/10 relative">
          <p className="absolute -bottom-7 left-1/2 -translate-x-1/2 w-max opacity-95">
            Alarms only
          </p>
        </div>
        <div className="w-[98px] h-[51px] bg-zinc-100/20 rounded-md ring-1 ring-zinc-300/10 relative">
          <p className="absolute -bottom-7 left-1/2 -translate-x-1/2 w-max opacity-95">
            Accessibility
          </p>
        </div>
      </div>
    </div>
  );
}
