import React from 'react'
import logo from '../images/logo.png'
import '../components/Navbar.css'
const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 bg-black ">
  <div className="  navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className=" btn btn-ghost btn-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 stroke-white "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor  ">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h7" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="  menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>Homepage</a></li>
        <li><a>Menu</a></li>
        <li><a>About</a></li>
        <li><a>Contact</a></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center">
    <a className=" bg-black text-3xl"><span className='text-red-700' >Taco</span> <span className='text-green-700' >Mania</span> <span className=' text-yellow-500 ' >Catering</span></a>
  </div>
  <div className="navbar-end">
    <button className=" text-blue-100 bg-transparent btn  btn-circle">
    <img className='' src={logo} alt="logo" />
    </button>
   
  </div>
</div>
    </div>
  )
}

export default Navbar
