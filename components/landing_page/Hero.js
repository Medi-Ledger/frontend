import React from 'react'
import HeroImg from './HeroImg'

const Hero = () => {
    const style = 'className="p-1 text-xs text-center font-semibold border-2 border-gray-600"'
    return (
        <section className="px-10 flex items-center">
            <div className="w-1/2 mr-10">
                <span style={{
                    border: '2px solid transparent',
                    borderImage: 'linear-gradient(-180deg, #0E7490 0%, #FFC671 100%) 1',
                    padding: '7px',
                }}>Welcome to MediLedger</span>
                <h1 className="text-6xl font-bold text-gray-900 my-7">Secure Medical Data</h1>
                <p className="text-gray-600 text-md font-medium mb-7">Streamline your healthcare data management with our blockchain-powered platform.</p>
                <a className="bg-[#ffb84e] hover:bg-[#ffa958] text-white py-2 px-6" href="#get-started">
                    Get Started
                </a>
            </div>
            <HeroImg />
        </section>
    )
}

export default Hero