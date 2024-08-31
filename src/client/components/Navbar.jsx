import React from 'react'
import logo from '../assets/MainLogo.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
<header className=" p-4 bg-transparent text-white">
	<div className=" flex justify-between h-16 mx-10">
		<a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
			<img src={logo} alt="" />
		</a>
	
		<div className="items-center space-x-7 flex-shrink-0 hidden lg:flex text-black">
		<ul className="items-stretch hidden space-x-3 lg:flex">
			{/* <li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 text-black  border-black    ">Link</a>
			</li> */}
			<Link to='/' className="flex">
				<a rel="noopener noreferrer" href="#" className="a  text-white hover:text-yellow-500 flex items-center font-semibold px-4 mb-1 border-black">Home</a>
			</Link>
			<Link  to='/ourteam' className="flex">
				<a rel="noopener noreferrer" href="#" className="a  text-white hover:text-yellow-500 flex items-center font-semibold px-4 mb-1 border-black">Team</a>
			</Link> 
			<li className="flex">
				<a rel="noopener noreferrer" href="/aboutpage" className="a  text-white hover:text-yellow-500 flex items-center font-semibold px-4 mb-1 border-black">About Us</a>
			</li>
		</ul>
			{/* <button className="self-center px-8 py-3 rounded font-semibold border-black border-2">Sign in</button> */}
			<Link to='/studentloginpage' className="self-center px-8 py-3 font-semibold rounded   bg-white  text-black hover:bg-transparent  hover:border-yellow-500 hover:text-yellow-500 hover:border-2">Get Started</Link>
		</div>
		<button className="p-4 lg:hidden">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-800">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button>
	</div>
</header>

  )
}

export default Navbar
