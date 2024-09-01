import React from 'react'
import logo from '../assets/MainLogo.svg'
const FooterPage = () => {
  return (
    <div className='mt-10 border-t p-3'>
      <div className="text-center">
    <a href="#" className="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900">
        <img src={logo} className="h-12 mr-3 sm:h-9" alt="Landwind Logo"/>

    </a>

    <span className="block text-lg text-center text-gray-50">©2024. All Rights Reserved.
		Built with 
        <a href=""
			className="text-yellow-600 hover:underline"> MernStack</a> and 
            <a
			href="https://tailwindcss.com" className="text-yellow-600 hover:underline">Tailwind
			CSS
        </a>.

	</span>
    <h1 className='text-center text-white text-lg'>Design by <a href="https://github.com/kabi-60" className='text-yellow-500'>kabi-60</a> & <a href="https://github.com/Ramana2130" className='text-yellow-500'>Ramana2130</a></h1>

</div>
    </div>
  )
}

export default FooterPage
