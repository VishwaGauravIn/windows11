import React from 'react'
import Weather from './taskbar-components/weather'

export default function Taskbar() {
  return (
    <div className='absolute -mt-12 h-12 w-full bg-[#030C1B] flex items-center'>
        <Weather/>
    </div>
  )
}
