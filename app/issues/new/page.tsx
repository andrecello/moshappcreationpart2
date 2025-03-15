'use client'
import React from 'react'
import { TextField, Button} from '@radix-ui/themes'

const NewIssuePage = () => {
  return (
    <div className='max-w-xl space-y-3'>
        <TextField.Root placeholder="Title">
	        <TextField.Slot>
	        </TextField.Slot>
        </TextField.Root>
        <TextField.Root placeholder="Description"></TextField.Root>
        <Button>Submit New Issue</Button>

    </div>
  )
}

export default NewIssuePage