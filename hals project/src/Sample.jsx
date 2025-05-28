import { Button, TextField } from '@mui/material'
import React from 'react'

function Sample() {
  return (
  <>
    {/* <div className='flex gap-25'>
    <div className='text-shadow-blue-800 bg-amber-100 border-8 border-b-cyan-800 border-purple-800 w-75 h-10 text-center rounded-4xl'>How you doingggggggggg</div>
    <div className='text-shadow-blue-800 bg-amber-100 border-8 border-b-cyan-800 border-purple-800 w-75 h-10 shadow-black text-center rounded-4xl'>Goood</div>
    <div className='text-shadow-blue-800 bg-amber-100 border-8 border-b-cyan-800 border-purple-800 w-75 h-10 shadow-black text-center rounded-4xl'>Goood</div>
  </div>

  <div className='grid grid-cols-4 grid-rows-3 gap-2'>
    <div className='text-shadow-blue-800 bg-amber-100 border-8 border-b-cyan-800 border-purple-800 w-75 h-10 text-center rounded-4xl'>How you doingggggggggg</div>
    <div className='text-shadow-blue-800 bg-amber-100 border-8 border-b-cyan-800 border-purple-800 w-75 h-10 text-center rounded-4xl'>How  doingggggggggg</div>
    <div className='text-shadow-blue-800 bg-amber-100 border-8 border-b-cyan-800 border-purple-800 w-75 h-10 text-center rounded-4xl'>How you </div>
   <div className='text-shadow-blue-800 bg-amber-100 border-8 border-b-cyan-800 border-purple-800 w-75 h-10 text-center rounded-4xl'>How are you </div>
  </div> */}
  <Button
  onClick={() => {
    alert('clicked');
  }}
>
  Click me
</Button>
<div className='flex gap-2'>
  <TextField id="outlined-basic" label="Outlined" variant="outlined" />
<TextField id="filled-basic" label="Filled" variant="filled" />
<TextField id="standard-basic" label="Standard" variant="standard" />

</div>
  

  
  
  
  
  
  
  
  </>


)
}

export default Sample