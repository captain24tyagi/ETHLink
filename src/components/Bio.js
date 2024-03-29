import React from 'react'
import Header from './Header'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import LinkIcon from '@mui/icons-material/Link';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import Skills from './Skills';
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';

export default function Bio() {
  return (
    <div>
      <Header/>
        <div className='grid grid-cols-4 h-fit mx-10 my-5 rounded-lg bg-[#4D4C5D] text-white'>
         <div className='col-span-1 flex flex-col items-center m-5'>
          <img className='h-[200px] w-[200px] rounded-full m-5' src='/images/dp 5.png' alt=''/>
          <div className='my-5 bg-black rounded-xl p-5'>
            <div className='flex flex-row space-x-3'>
              <button className='bg-[#98948B] px-3 py-1 rounded-2xl text-[#313131] font-semibold'><PersonAddAltIcon className='mx-1 text-white'/>FOLLOW</button>
              <button className='bg-[#98948B] px-3 py-1 rounded-2xl text-[#313131] font-semibold'><LinkIcon className='mx-1 text-white'/>CONNECT</button>
            </div>
            <div className='flex flex-col mx-5 my-3'>
              <h3 className='text-xl text-[#F18404]'>CONNECTIONS: <span className='text-white'>500+</span></h3>
              <h3 className='text-xl text-[#F18404]'>FOLLOWERS: <span className='text-white'>612</span></h3>
            </div>
          </div>
          <div className='my-5 bg-black p-5 rounded-xl'>
            <h1 className='text-center mb-5 text-xl text-[#F18404]'>CONTACT</h1>
            <div className='space-x-3'>
              <button className='bg-[#98948B] px-3 py-1 rounded-2xl text-[#313131] font-semibold'><EmailRoundedIcon Mail className='mx-1 text-white'/>EMAIL</button>
              <button className='bg-[#98948B] px-3 py-1 rounded-2xl text-[#313131] font-semibold'><ChatRoundedIcon className='mx-1 text-white'/>MESSAGE</button>
            </div>
          </div>
         </div>

        <div className='col-span-2 m-5 bg-black rounded-xl h-fit'>
          <div className='border-solid border-b-2 border-white'>
           <h1 className='m-5 font-bold text-3xl'>GM, MYSELF <span className='text-[#F18404]'> RACHIT DHAKA</span></h1>
          </div>

          <div className='flex flex-col p-5 border-solid border-b-2 border-white'>
            <h2 className='text-2xl text-[#F18404]'>BIO</h2>
            <div className='m-5 flex flex-col'>
             <h3 className=''>DSA - DEVELOPER - DESIGNER</h3>
             <h3 className=''>Web3.0 Enthusiast | Building Vartalaap | Nexus Society | CodeChef SRM RMP</h3>
            </div>
          </div>

          <div className='flex flex-col p-5 border-solid border-b-2 border-white'>
            <h2 className='text-2xl text-[#F18404]'>EDUCATION</h2>
            <div className='m-5 flex flex-row'>
             <div className='flex flex-col w-[600px]'>
              <h3 className='text-xl'>M.Tech</h3>
              <h4 className='text-md'>Computer Science, SRM Ramapuram , Chennai</h4>
              <h5 className='text-md'>2026-2028</h5>
             </div>
             <img className='mx-5 my-3 h-[50px] w-[50px]' src='/images/Srmseal 1.png' alt=''/>
            </div>

            <div className='m-5 flex flex-row'>
             <div className='flex flex-col w-[600px]'>
              <h3 className='text-xl'>B.Tech</h3>
              <h4 className='text-md'>Computer Science, SRM Ramapuram , Chennai</h4>
              <h5 className='text-md'>2022-2026</h5>
             </div>
             <img className='mx-5 my-3 h-[50px] w-[50px]' src='/images/Srmseal 1.png' alt=''/>
            </div>

          </div>

          <div className='flex flex-col p-5 h-fit'>
            <h2 className='text-2xl text-[#F18404]'>POSITION</h2>
            <div className='m-5 flex flex-row'>
             <div className='flex flex-col w-[600px]'>
              <h3 className='text-xl'>Co-Founder</h3>
              <h4 className='text-md'>Vartalaap Podcast</h4>
              <h5 className='text-md'>Jan'2024-current</h5>
             </div>
             <img className='mx-5 my-3 h-[50px] w-[50px]' src='/images/Srmseal 1.png' alt=''/>
           </div>
          </div>

        </div>

        <div className='col-span-1'>
        <div className='m-5 bg-black p-5 rounded-lg'>
          <h1 className='m-5 text-center text-[#F18404]'>SKILLS</h1>
           <Skills name={"Python"} number={"70"}/>
           <Skills name={"Solidity"} number={"80"}/>
           <Skills name={"C"} number={"50"}/>
           <Skills name={"SQL"} number={"40"}/>
           <Skills name={"Javascript"} number={"90"}/>
           <Skills name={"NodeJS"} number={"78"}/>
           
          </div>
        </div>

        </div>

        <div className='rounded-lg mx-10 my-5 h-[800px] bg-[#4C4D5D] text-white'>
         <h1 className='m-5 p-5 text-3xl text-[#F18404]'>EXPERIENCE</h1>
         <div className='flex flex-row rounded-lg m-5 p-5 bg-black'>
          <img className='h-[100px] w-[100px] my-5' src='/images/VARTAA (1).png' alt='' />
          <div className='mx-5 flex flex-col w-[900px]'>
           <h1 className='font-bold text-2xl'>CO-FOUNDER<VerifiedRoundedIcon className='mx-2 mb-1 text-green-500'/></h1>
           <p className='text-xl'>VARTALAAP PODCAST</p>
           <div className='py-5'>
            <p>DEC 2023 - PRESENT</p>
            <p>CHENNAI, TAMIL NADU, INDIA</p>
           </div>
          </div>
          <img className='h-[100px] w-[100px] m-5' src='/images/QR 1.png' alt=''/>

         </div>
         <div className='flex flex-row rounded-lg m-5 p-5 bg-black'>
          <img className='h-[100px] w-[100px] my-5' src='/images/VARTAA (1).png' alt='' />
          <div className='mx-5 flex flex-col w-[900px]'>
           <h1 className='font-bold text-2xl'>CO-FOUNDER<VerifiedRoundedIcon className='mx-2 mb-1 text-green-500'/></h1>
           <p className='text-xl'>VARTALAAP PODCAST</p>
           <div className='py-5'>
            <p>DEC 2023 - PRESENT</p>
            <p>CHENNAI, TAMIL NADU, INDIA</p>
           </div>
          </div>
          <img className='h-[100px] w-[100px] m-5' src='/images/QR 1.png' alt=''/>

         </div>

         <div className='flex flex-row rounded-lg m-5 p-5 bg-black'>
          <img className='h-[100px] w-[100px] my-5' src='/images/VARTAA (1).png' alt='' />
          <div className='mx-5 flex flex-col w-[900px]'>
           <h1 className='font-bold text-2xl'>CO-FOUNDER<VerifiedRoundedIcon className='mx-2 mb-1 text-green-500'/></h1>
           <p className='text-xl'>VARTALAAP PODCAST</p>
           <div className='py-5'>
            <p>DEC 2023 - PRESENT</p>
            <p>CHENNAI, TAMIL NADU, INDIA</p>
           </div>
          </div>
          <img className='h-[100px] w-[100px] m-5' src='/images/QR 1.png' alt=''/>

         </div>

        </div>
    </div>
  )
}
