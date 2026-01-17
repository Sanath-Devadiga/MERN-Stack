import React from 'react'

const Test = () => <h1>Hello World  </h1>
const test = () => <h1>Hello World  </h1>
export default function Arrowfunction() {
  return (
    <div>Arrowfunction
    <Test/>
    {test()}
    </div>
  )
}
