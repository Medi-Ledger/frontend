import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const InnerHeader = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    router.push("/");
  }

  return (
    <header className="py-4">
      <div className="px-10 container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className='flex items-center gap-2'>
            <Image src="/logo.png" alt="Website Logo" width={30} height={30} />
            <span className="font-semibold text-lg">MEDI<span className='text-cyan-700 font-bold'>LEDGER</span></span>
          </Link>
        </div>
        <div className="flex items-center justify-end gap-5">
          <Link href="/diagnosed-patients" className='hover:text-cyan-700'>View Patients</Link>
          <Link href="/diagnosed-patients/history" className='hover:text-cyan-700'>View History</Link>
          <Link href="/diagnosed-patients/upload" className='hover:text-cyan-700'>Upload Record</Link>
          <button className='hover:text-cyan-700' onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </header>
  )
}

export default InnerHeader