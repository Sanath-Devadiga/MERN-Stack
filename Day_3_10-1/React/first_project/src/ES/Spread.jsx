import React from 'react'

export default function Spread() {
  const numbers = [1,2,3,4,5];
  const newNumbers =  [...numbers,6,7,8];
  return(
      <div>
          {newNumbers}
      </div>
  )
}
