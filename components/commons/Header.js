import React from 'react'
import Image from 'next/image'

const Header = () => {
    return (
        <header className="py-4">
            <div className="px-10 container mx-auto flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Image src="/logo.png" alt="Website Logo" width={30} height={30}/>
                    <span className="font-semibold text-lg">MEDI<span className='text-cyan-700 font-bold'>LEDGER</span></span>
                </div>
                <nav className="space-x-4">
                    <a href="#" className="hover:text-yellow-500">Home</a>
                    <a href="#" className="hover:text-yellow-500">Features</a>
                    <a href="#" className="hover:text-yellow-500">How It Works</a>
                    <a href="#" className="hover:text-yellow-500">FAQ</a>
                    <a href="#" className="hover:text-yellow-500">Contact Us</a>
                </nav>
            </div>
        </header>
    )
}

export default Header