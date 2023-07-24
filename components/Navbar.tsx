import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="drawer sticky top-0">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col">
    {/* Navbar */}
    <div className="w-full navbar   ">
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div className="flex-1 px-2 mx-2 font-bold text-xl">
        <Link href="/">
        Cameron Michel
        </Link>
        
        </div>
      <div className="flex-none hidden lg:block md:bg-white">
        <ul className="menu menu-horizontal">
          {/* Navbar menu content here */}
          <li><Link href="/info">Info</Link></li>
          <li><Link href="">CV</Link></li>
          <li><a href="mailto:cameronmichel@gmail.com?subject=Mail from Website">Contact</a></li>      

        </ul>
      </div>
    </div>
    {/* Page content here */}
    
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-3" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full bg-base-200">
      {/* Sidebar content here */}
      <li><Link href="/info">Info</Link></li>
      <li><Link href="">CV</Link></li>
      <li><a href="mailto:cameronmichel@gmail.com?subject=Mail from Website">Contact</a></li>      
    </ul>
    
  </div>
</div>
  )
}

export default Navbar