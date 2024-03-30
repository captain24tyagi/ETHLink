import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
// import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function Signin() {
  return (
    <div className='min-h-screen'>
     <div className='px-10 mx-10 py-5 items-center font-mono justify-normal flex flex-row'>
      <img className='h-[40px] w-[40px] rounded-full mx-2' src='/images/ethLink.jpg' alt=''/>
      <h1 className='text-3xl mr-10 text-white'>ETHLink</h1>
     </div>

     <div className='items-center flex flex-col'>
      <img className='h-[130px] w-[130px] my-10' src='/images/dp 5.png' alt='' />
      <form className='md:p-10 px-5 py-10 text-center items-center'>
        <div className='md:px-20 align-middle mx-10 flex flex-row px-10'>
          <button className='px-10 py-3 rounded-xl bg-[#595B63] mx-5'><img className='md:w-[50px] md:h-[50px] h-[50px] w-[50px]' src='/images/metamask-icon.png' alt=''/></button>
          <button className='px-10 py-3 rounded-xl bg-[#595B63] mx-5'><img className='md:w-[50px] md:h-[50px] h-[50px] w-[50px]' src='/images/Logo-google-icon-PNG.png' alt=''/></button>
          {/* <button className='px-10 py-3 rounded-xl bg-[#595B63] mx-5'></button> */}
        </div>   
        <h2 className='font-bold text-center m-10 p-5 text-white'>OR</h2>
        <div className='flex flex-row'>
             <div className='text-[#fff500] m-5 bg-[#595B63] md:w-[520px] w-[400px] rounded-md flex flex-row'>
               <input type='email' placeholder='Email' className='text-[#fff500] bg-[#595B63] px-3 py-3 w-[520px] rounded-md flex flex-col outline-none'/>
               <EmailIcon className='m-3 bg-[#595B63] text-lg'/>
             </div>
            </div>

            <div className='flex flex-row'>
             <div className='text-[#fff500] m-5 bg-[#595B63] md:w-[520px] w-[400px] rounded-md flex flex-row'>
               <input type='password' placeholder='Password' className='text-[#fff500] bg-[#595B63] px-3 py-3 w-[520px] rounded-md flex flex-col outline-none'/>
               <VisibilityIcon className='m-3 bg-[#595B63] text-lg'/>
             </div>
            </div>
            <button className='text-white'>SUBMIT</button>        
      </form>
     </div>
        
    </div>
  )
}
