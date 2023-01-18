import React from 'react'
import { FaBook } from "react-icons/fa";
import { FaUser } from "react-icons/fa";




const Card = () => {
    return (
        <div className=' pt-10 flex items-center justify-center '>
            <div className='w-[700px] h-[400px] border-[#30363D] border-2 rounded-md flex items-center justify-evenly '>

                <div className='flex flex-col items-center justify-center gap-5'>
                    <img src='https://avatars.githubusercontent.com/u/120031321?v=4' className="rounded-full h-[200px]" />
                    <h1 className='text-[#C9D1D9] text-3xl'>{Data.name}</h1>
                </div>

                <div className='text-[#8B949E] text-1xl flex flex-col gap-3 justify-start items-start'>


                    <div className='flex flex-row-reverse gap-2'>
                        <div>
                            <h1>Followers: 2</h1>
                            <h1>Following: 2</h1>
                        </div>

                        <h1 className='text-2xl text-[#8B949E] pt-3'><FaUser /></h1>
                    </div>

                    <div className='flex flex-row-reverse gap-2'>
                    <h1>Public repostories: 18</h1>
                    <h1 className='text-2xl text-[#8B949E] '><FaBook /></h1>
                    </div>

                    <h1 className='text-[#8B949E] text-xl pt-10'>Bio</h1>

                </div>

            </div>
        </div>

    )
}

export default Card
