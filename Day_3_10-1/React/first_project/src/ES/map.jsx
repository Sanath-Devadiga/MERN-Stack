import React from 'react'

export default function map() {
  const fruits = ["Apple", "Banana", "Cherry"];
//{arrayName.map(arrowfunction(item) => (<//code to be executed for each item >))}
  return (
    <div>
        {fruits.map((item,index) => (
            <div>
            <p>{index}-{item}</p>
            </div>
        ))}
    </div>
  )
}
