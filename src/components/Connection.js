import React from 'react'
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';

export default function Connection(props) {
  return (
    <>
        <div className='flex flex-row justify-between items-start py-3 my-2 rounded-lg bg-black'>
          <div className='w-[40px] h-[40px] ml-2 rounded-full'>
           <img className='w-full h-full rounded-full size-fit' src='/images/man.png' alt=''/>
          </div>
          <h2 className='font-bold py-1 text-lg items-start'>
             {props.name}
            </h2>
            <div className='py-0 space-x-3 mx-4'>
                <button className='rounded-full w-[40px] h-[40px] bg-green-600'>
                  <DoneIcon/>
                </button>
                <button className='rounded-full w-[40px] h-[40px] bg-red-600'>
                  <ClearIcon/>
                </button>
            </div>
        </div>
       </> 
  )
}
