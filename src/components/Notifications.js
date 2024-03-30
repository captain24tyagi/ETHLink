import React from 'react'
import Header from './Header'
// import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt'
// import LinkIcon from '@mui/icons-material/Link'

export default function Notifications() {
  return (
    <div className='min-h-screen text-white'>
        <Header/>
        <div className='grid grid-cols-3 text-white mx-10 my-5 rounded-lg'>

        <div className='col-span-1 p-3 rounded-l-lg text-left border-solid border-r-2 border-white bg-[#4D4C5D]'>
        <div className='p-5 items-center'>
          <img
            className='h-[200px] w-[200px] items-center rounded-full mx-10 m-5'
            src='/images/dp 5.png'
            alt=''
          />
          <div className='my-5 rounded-xl p-5 bg-black'>
            <div className='flex flex-row space-x-3'>
            <div className='m-5 flex flex-col'>
              <h1 className='text-center mb-5 text-xl '>RACHIT DHAKA</h1>
              <h3 className=''>DSA - DEVELOPER - DESIGNER</h3>
              <h3 className=''>
                Web3.0 Enthusiast | Building Vartalaap | Nexus Society |
                CodeChef SRM RMP
              </h3>
            </div>
            </div>
          </div>
        </div>
        </div>

        <div className='col-span-2 p-3 rounded-r-lg text-left text-white bg-[#4D4C5D]'>
         <div className='text-left border-solid border-b-2 border-white font-bold text-xl'>
            <h1 className='p-5'>NOTIFICATIONS</h1>
         </div>

        <div className='flex flex-row space-x-5 justify-between py-3 w-full my-2 rounded-lg bg-black'>
         
         <div className='flex flex-row space-x-4'>
         <div className='w-[40px] h-[40px] rounded-full mx-5 my-3 '>
           <img className='w-full h-full rounded-full size-fit' src='/images/Sarthak 3.png' alt=''/>
          </div>

          <div>
            <h2 className='font-bold py-1 text-xl text-white text-left'>
             Sarthak Tyagi posted:
            </h2>
            <p className='py-1 text-lg text-white text-left'>
            Hacking at ETH Mumbai and booking Russian, let's connect
            </p>
          </div>
          
         </div>
        </div>

        <div className='flex flex-row space-x-5 justify-between py-3 w-full my-2 rounded-lg bg-black'>
         
         <div className='flex flex-row space-x-4'>
         <div className='w-[40px] h-[40px] rounded-full mx-5 my-3 '>
           <img className='w-full h-full rounded-full size-fit' src='/images/Sarthak 3.png' alt=''/>
          </div>

          <div>
            <h2 className='font-bold py-1 text-xl text-white text-left'>
             Sarthak Tyagi posted:
            </h2>
            <p className='py-1 text-lg text-white text-left'>
            Hacking at ETH Mumbai and booking Russian, let's connect
            </p>
          </div>
          
         </div>
        </div>

         </div>
        </div>
      </div>
    
  )
}
