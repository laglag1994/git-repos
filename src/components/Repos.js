import React from 'react'
import { FaStar } from "react-icons/fa";



const Repos = ({ repo }) => {
    console.log(repo)
    return (


        <div className='pb-10 '>

            <div className='flex justify-evenly items-center gap-10 center pt-12 ' >

                <h1 className='text-[#58A6FF] text-2xl w-[300px]'>{repo.name}</h1>



                <div className='flex flex-row-reverse gap-5 w-[300px]'>
                    <div className='bg-[#21262D] flex gap-2 px-2 py-1 rounded-md border-[#363B42] border-2'>

                        <h1 className='text-[#E3B341] pt-1 '><FaStar /></h1>
                        <h1 className='text-[#C9D1D9]'>Starred</h1>
                        <h1 className='text-[#C9D1D9] bg-[#30363D] rounded-full w-6 h-6 text-center mt-[2px] '>{repo.stargazers_count}</h1>

                    </div>

                    <div className='bg-[#1F6FEB] flex gap-2 px-8 py-2 text-white rounded-md'>
                        <a href={repo.html_url} className='hover:opacity-80 transition-all'>Visite</a>
                    </div>
                </div>

            </div>





        </div>











    )
}

export default Repos
