import { Button, TextField } from '@mui/material'
import React from 'react'

function Myapp() {
  return (<>
    
    <div className='flex flex-col justify-center max-w-md m-auto pt-7'>
        <div className='font-bold'>Contact Us </div>
       <div>Name</div>
       <TextField id="outlined-basic" label="Enter your name" variant="outlined" />
       <div>E-mail</div>
       <TextField id="outlined-basic" label="Enter you E-mail" variant="outlined" />
       <div>Message</div>
       <TextField id="outlined-basic" label="Enter your Message" variant="outlined" />

        <div>
            <Button variant="contained">Submit</Button>
        </div>
      </div>     
   </>
  )

}

export

default Myapp



 