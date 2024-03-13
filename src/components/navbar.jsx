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
    <div className="sm:flex justify-between xl:hidden hidden items-center content-center border-b-2 pb-3 w-full">
        <div className='flex justify-start'>
      <div className="pl-7  cursor-pointer"></div>
      <div className="flex items-center justify-center   mt-3  text-sm  border border-slate-500 rounded-full ml-11 xl:ml-28">
        <div className='border-r border-slate-500  px-4 py-1 cursor-pointer'>About</div>
        <div className='border-r border-slate-500  px-4 py-1 cursor-pointer'>Banking</div>
        <div className=' text-slate-400 cursor-pointer flex items-center pl-2 pr-1 py-1'>Add guest 
        </div>
        </div>
        </div>
      <div className=" self-end justify-self-end flex right-0 items-center justify-center content-center gap-2 mt-3  text-sm py-2">
      <div className=' cursor-pointer'>Airbnb your home</div>
        <div className=' cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
        </svg>
        </div>
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
