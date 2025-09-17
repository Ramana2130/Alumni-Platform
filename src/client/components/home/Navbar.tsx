import React from 'react'

const Navbar = () => {
  return (
   <header
    className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md  bg-white/80 py-3  backdrop-blur-lg  lg:max-w-screen-xl">
    <div className="px-4">
        <div className="flex items-center justify-between">
            <div className="flex shrink-0">
                <a aria-current="page" className="flex items-center" href="/">
                    <p className="font-bold text-xl  ">GestureConnect</p>
                </a>
            </div>
            <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
                <a aria-current="page"
                    className="inline-block rounded-lg px-2 py-1 text-md font-medium text-black transition-all duration-200 hover:text-[#006BFF]"
                    href="/">Main</a>
                <a aria-current="page"
                    className="inline-block rounded-lg px-2 py-1 text-md font-medium text-black transition-all duration-200 hover:text-[#006BFF]"
                    href="/guide">Guide</a>
                <a className="inline-block rounded-lg px-2 py-1 text-md font-medium text-black transition-all duration-200 hover:text-[#006BFF]"
                    href="/statistics">Statistics</a>
                <a className="inline-block rounded-lg px-2 py-1 text-md font-medium text-black transition-all duration-200 hover:text-[#006BFF]"
                    href="/test">Test</a>
            </div>
            <div className="flex items-center justify-end gap-3">
                <a className="inline-flex items-center justify-center rounded-xl bg-[#006BFF] px-5 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-transparent hover:border-2 border-black hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006BFF]"
                    href="/auth/login">Login</a>
            </div>
        </div>
    </div>
</header>
  )
}

export default Navbar