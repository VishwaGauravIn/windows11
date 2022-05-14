import React from 'react'

export default function Taskbar() {
  return (
    <div className='absolute -mt-12 h-12 w-full bg-[#030C1B] flex items-center'>
        <div className="px-5 flex flex-wrap justify-center items-center">
            <img src="/icons/sunny-cloud.png" alt="" className='w-7 h-7'/>
            <div className="ml-2">
                <p className="text-xs">40°C</p>
                <p className="text-xs">Cloudy</p>
            </div>
        </div>
    </div>
  )
}
