import React from 'react'
import { FaStar } from "react-icons/fa";



const Repos = () => {
    return (


        <div className='pb-10 '>

            <div className='flex justify-evenly items-center gap-10 center pt-12 ' >

                <h1 className='text-[#58A6FF] text-3xl '>get-repos</h1>



                <div className='flex flex-row-reverse gap-5 '>
                    <div className='bg-[#21262D] flex gap-2 px-2 py-1 rounded-md border-[#363B42] border-2'>

                        <h1 className='text-[#E3B341] pt-1 '><FaStar /></h1>
                        <h1 className='text-[#C9D1D9]'>Starred</h1>
                        <h1 className='text-[#C9D1D9] bg-[#30363D] rounded-full w-6 h-6 text-center mt-[2px] '>2</h1>

                    </div>

                    <div className='bg-[#1F6FEB] flex gap-2 px-8 py-2 text-white rounded-md'>
                        <button className='hover:opacity-80 transition-all'>Visite</button>
                    </div>
                </div>

            </div>




           <div className='flex justify-evenly items-center gap-10 center pt-12 '>

                <h1 className='text-[#58A6FF] text-3xl '>get-repos</h1>



                <div className='flex flex-row-reverse gap-5'>
                    <div className='bg-[#21262D] flex gap-2 px-2 py-1 rounded-md border-[#363B42] border-2'>

                        <h1 className='text-[#E3B341] pt-1 '><FaStar /></h1>
                        <h1 className='text-[#C9D1D9]'>Starred</h1>
                        <h1 className='text-[#C9D1D9] bg-[#30363D] rounded-full w-6 h-6 text-center mt-[2px] '>2</h1>

                    </div>

                    <div className='bg-[#1F6FEB] flex gap-2 px-8 py-2 text-white rounded-md'>
                        <button>Visite</button>
                    </div>
                </div>

            </div>


        </div>











    )
}

export default Repos
