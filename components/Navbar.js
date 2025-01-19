import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className='flex sticky top-0 justify-between items-center px-4 h-14 bg-[#8a83f0] text-white'>
        <Link className='font-bold text-xl text-orange-100' href={'/'}>Linkify</Link>
        <div className='flex font-bold items-center gap-x-4'> 
            <Link href={'/'}>Home</Link>
            <Link href={'/about'}>About</Link>
            <Link href={'/shortner'}>Shortner</Link>
            <Link href={'/contact'}>Contact</Link>
            <Link target='_blank' href={'https://github.com/NamanS4ini'}><button type="button" className="text-white font-bold bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-lg text-sm px-5 py-2.5 text-center me-2">GitHub</button></Link>
        </div>
    </div>
  )
}

export default Navbar