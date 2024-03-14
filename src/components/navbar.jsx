import React from 'react'

const Navbar = () => {
  return (
    <div className='sticky top-0 z-[999] bg-white w-full flex flex-col border-b border-slate-300'>
    <div className="flex justify-between  items-center content-center border-b-2 pb-3 w-full">
      <div className="pl-7  cursor-pointer"></div>
      <div className="flex items-center justify-center   mt-3  text-sm  border border-slate-500 rounded-full  xl:ml-28">
        <div className='border-r border-slate-500  px-4 py-1 cursor-pointer'>About</div>
        <div className='border-r border-slate-500  px-4 py-1 cursor-pointer'>Banking</div>
        <div className=' text-slate-400 cursor-pointer flex items-center pl-2 pr-1 py-1'>KYC
            
        </div>
        </div>
      <div className=" self-end justify-self-end flex right-0 items-center justify-center content-center gap-2 mt-3  text-sm py-2">
      <div className=' cursor-pointer'>Go to banking</div>
        <div className=' cursor-pointer flex items-center border-slate-500 border rounded-full px-3 py-2'>
            <div className='mr-2'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
</svg>

</div>
<div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>
</div>
        </div>
      </div>
    </div>
    
        

    
    </div>

  )
}

export default Navbar
