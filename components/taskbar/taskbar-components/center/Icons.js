import React from 'react'
import Icon from './Icon'

export default function Icons() {
  return (
    <div className='flex absolute left-1/2 -translate-x-1/2 space-x-1'>
        <Icon name="start" title="Start"/>
        <Icon name="edge" title="Microsoft Edge"/>
        <Icon name="vsc" title="Visual Studio Code"/>
        <Icon name="fe" title="File Explorer"/>
    </div>
  )
}
