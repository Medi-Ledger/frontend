import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const InnerHeader = () => {
  return (
    <header className="py-4">
      <div className="px-10 container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className='flex items-center gap-2'>
            <Image src="/logo.png" alt="Website Logo" width={30} height={30} />
            <span className="font-semibold text-lg">MEDI<span className='text-cyan-700 font-bold'>LEDGER</span></span>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default InnerHeader