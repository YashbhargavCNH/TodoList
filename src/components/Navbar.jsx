import React from 'react'

const Navbar = () => {
  return (
      
      <nav className="flex justify-between bg-slate-800 text-white p-4 py-2">
        <div className="logo">
            <span className="text-xl mx-8 font-bold">Todo List</span>
        </div>
          <ul className="flex gap-8 mx-9"> 
        <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
        <li className='cursor-pointer hover:font-bold transition-all'>Your Tasks</li>
        </ul>
    </nav>
  )
}

export default Navbar
