import React from 'react'
import Header from './Header';
import Connection from './Connection';
import Posts from './Posts';
import Post from './Post';

export default function Feed() {
  return (
    <div className='bg-black w-full min-h-screen'>
     <Header/>
     <div className='grid grid-cols-4 min-h-screen mb-5 text-white m-5'>

       <div className='px-3 rounded-xl h-fit bg-[#4D4C5D] col-span-1'>
        <div className='p-3 mb-3 text-center border-solid border-b-2 border-white'>
         <h1 className='text-2xl font-bold'>CONNECTIONS</h1>
        </div>
        <Connection name="Rachit Dhaka"/>
        <Connection name="Aniket Kumar"/>
        <Connection name="Pranav Vinodan"/>
        <Connection name="Sarthak Tyagi"/>
        <Connection name="Chris Gayle"/>
       </div>

       <div className='px-5 mx-5 col-span-2'>
         <div className='p-3 rounded-xl h-fit bg-[#4D4C5D]'>
           <Posts

           />
         </div>
       </div>

      <div className='mx-0 bg-black'>
        <Post/>

        <div className='bg-[#4D4D5D] my-5 rounded-lg'>
         <div className='p-3 mb-3 text-center border-solid border-b-2 border-white'>
          <h1 className='text-2xl font-bold'>NEWS</h1>
         </div>

         <div className=' justify-between items-start py-3 my-2 rounded-lg bg-[#4D4C5D]'>
          <div className='flex flex-row text-center p-3 mx-3 space-x-3'>
           <button className='px-2 py-1 bg-black hover:bg-[#F18404] rounded-2xl'>WEB3</button>
           <button className='px-2 py-1 bg-black hover:bg-[#F18404] rounded-2xl'>AI</button>
           <button className='px-2 py-1 bg-black hover:bg-[#F18404] rounded-2xl'>CYBER</button>
           <button className='px-2 py-1 bg-black hover:bg-[#F18404] rounded-2xl'>CLOUD</button>
           <button className='px-2 py-1 bg-black hover:bg-[#F18404] rounded-2xl'>IOT</button>
          </div>
          <div>
            News
          </div>
         </div>
        </div>
          
      </div>
    
     </div>
    </div>
  )
}
