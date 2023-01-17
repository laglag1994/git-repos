import React from 'react'
import { FaGithub } from "react-icons/fa";


const Search = () => {
    return (
        <div className='bg-[#161B22] h-24 py-4 px-10 flex justify-center items-center'>
            <form>
                <div className='flex gap-3 flex-row-reverse'>

                    <div className='flex text-[#9CA3AF] relative '>
                    <button className='text-sm mt-5 left-72 px-2 via-transparent text-left absolute border-[#30363D] border-2 rounded-md'>/</button>
                    <input className='h-8 py-2 pr-6 px-1 mt-4 w-80 bg-[#0D1117] border-[#30363D] border-2 rounded-md text-left' type="text" placeholder="Search or jump to..." />
                    </div>

                    <h1 className='text-6xl text-[#F0F6FC]'><FaGithub /></h1>

                    
                </div>

            </form>
        </div>
    )
}

export default Search
