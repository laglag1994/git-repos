import React from 'react'
import { FaStar } from "react-icons/fa";



const Repos = () => {
    return (

        
        <div className='w-[800px] flex items-center justify-center pt-12 pb-20'>

            <div className='flex justify-center items-center gap-10'>
                
                <h1 className='text-[#58A6FF] text-3xl '>get-repos</h1>

                <div className='bg-[#21262D] flex gap-2 px-2 py-1 rounded-md'>

                    <h1 className='text-[#E3B341] pt-1'><FaStar /></h1>
                    <h1 className='text-[#C9D1D9]'>Starred</h1>
                    <h1 className='text-[#C9D1D9] bg-[#30363D] rounded-full w-5 h-5 text-center mt-[2px] '>2</h1>

                </div>
            </div>


        </div>
    )
}

export default Repos
