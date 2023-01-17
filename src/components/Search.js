import React from 'react'

const Search = () => {
  return (
    <div className='bg-[#161B22] h-24 py-4 px-10 flex justify-center items-center'>
      <form>
        <input className='h-8 py-2 pr-6 px-1 bg-[#0D1117] border-[#30363D] border-2 rounded-md text-left' type="text" placeholder="Github Username"/>
        <i class="fa-brands fa-github"></i>
      </form>
    </div>
  )
}

export default Search
