import React from 'react'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser'
import GroupsIcon from '@mui/icons-material/Groups'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='font-mono min-h-screen md:max-w-full max-w-xl text-white bg-gradient-to-r from-[#350f58] via-[#5e3b7f] to-[#cb758c] scroll'>
      <div className='px-10 mx-10 py-5 items-center font-mono justify-between flex flex-row'>
        <div className='flex flex-row items-center'>
          <img
            className='h-[40px] w-[40px] rounded-full mx-2'
            src='/images/ethLink.jpg'
            alt=''
          />
          <h1 className='text-3xl'>ETHLink</h1>
        </div>
        <div className='flex flex-row'>
          <Link to='/signin'>
            <button className='md:px-10 md:py-3 px-5 py-1 rounded-xl bg-[#595B63] mx-5'>
              SIGN IN
            </button>
          </Link>
          <Link to='/signup'>
            <button className='md:px-10 md:py-3 px-5 py-1 rounded-xl bg-[#595B63] mx-5'>
              SIGN UP
            </button>
          </Link>
        </div>
      </div>

      <div className='p-5 mx-10 my-5 rounded-lg bg-[#181616] md:w-fit w-[500px]'>
        <h1 className='m-5 md:text-4xl text-3xl font-bold '>
          WELCOME TO
          <span className='text-[#F18404]'> ETHLink: </span>
          YOUR GATEWAY TO DECENTRALIZED DEVELOPMENT
        </h1>
        <div className='m-5 py-5 flex md:flex-row flex-col-reverse'>
          <p className='pr-5 md:text-2xl text-md my-5 items-start'>
            At 
            <span className='text-[#F18404]'> ETH Link </span>
            , we are revolutionizing the way you search for jobs and
            verify the authenticity of companies using the power of Web3
            technology. Say goodbye to traditional job search platforms an hello
            to a decentralized ecosystem where transparency and trust are
            paramount
          </p>
          <img
            className='w-[350px] h-[350px] p-10 mx-10 rounded-full size-fit'
            src='/images/ethlink2.jpg'
            alt=''
          />
        </div>
      </div>

      <p className='text-2xl p-5 mx-10 text-center'>Why ETHLink ?</p>

      <div className='p-5 mx-10 my-5 flex md:flex-row flex-col justify-between'>
        <div className='m-5 rounded-lg bg-[#181616] py-5 text-center'>
          <VerifiedUserIcon className='m-5 text-blue-400' />
          <h1 className='text-center font-bold text-2xl text-[#FFA500]'>
            Trust & Security
          </h1>
          <p className='my-2 py-3 px-10 text-center'>
            Your data is secured on the blockchain, giving you full control over
            your professional identity.
          </p>
        </div>

        <div className='m-5 rounded-lg bg-[#181616] py-5 text-center'>
          <GroupsIcon className='m-5 text-green-400' />
          <h1 className='text-center font-bold text-2xl text-[#FFA500]'>
            Global Network
          </h1>
          <p className='my-2 py-3 text-center px-5'>
            Connect with professionals across the globe without intermediaries.
          </p>
        </div>

        <div className='m-5 rounded-lg bg-[#181616] py-5 text-center'>
          <BusinessCenterIcon className='m-5 text-purple-600' />
          <h1 className='text-center font-bold text-2xl text-[#FFA500]'>
            Endless Oppurtunities
          </h1>
          <p className='my-2 py-3 text-center px-5'>
            Discover job opportunities and projects that match your skills and
            experience
          </p>
        </div>
      </div>

      <div className='p-5 mx-10 my-10 rounded-lg bg-[#181616] text-center md:w-fit w-[500px]'>
        <h1 className='p-5 text-2xl font-bold text-[#FFA500]'>Decentralize and Transparent</h1>
        <p className='px-10 py-5 text-xl'>
          ChainLinked is built on the principle of decentralization, ensuring
          transparency and fairness in the professional world. Take control of
          your career path with a platform that's as invested in your success as
          you are.
        </p>
      </div>

      <p className='text-md p-5 m-10 text-center'>
        ©2023 ETHLink. All rights reserved
      </p>
    </div>
  )
}
