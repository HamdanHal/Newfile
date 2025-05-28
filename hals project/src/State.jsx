import React, { useState } from 'react'

function State() {
    const [Count, setCount] = useState(1015654654)
  return (
   <>
   <p>You clicked {Count} times</p>
   <button className='border p-1 rounded'
   onClick={() => {
    setCount(Count+1)
}}>
    click
</button>
  
   </>
    
)}



export default State