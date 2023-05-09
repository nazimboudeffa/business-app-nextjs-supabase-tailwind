import GitHub from '@/components/GitHub'
import Modal from '@/components/Modal'
import Link from 'next/link'
import { useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

function Social () {
  const [showModal, setShowModal] = useState(false)
  const handleOnClose = () => setShowModal(false)
  return (
    <>
    <div className="navbar bg-base-100">
      <div className="navbar-start">
          <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link href="/services">Services</Link></li>
              <li><a>Contact</a></li>
          </ul>
          </div>
          <Link href="/" className="btn btn-ghost normal-case text-xl">Allbizzz</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          <li><Link href="/dashboard">Home</Link></li>
          <li><Link href="/services">Services</Link></li>
          </ul>
      </div>
      <div className="navbar-end flex-none">
          <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
              <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li>
              <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
              </a>
              </li>
              <li><a onClick={()=>setShowModal(true)}>Settings</a></li>
              <li><a>Logout</a></li>
          </ul>
          </div>
      </div>
    </div>
    <Modal onClose={()=>handleOnClose()} visible={showModal} />
    <QueryClientProvider client={queryClient}>
      <GitHub />
    </QueryClientProvider>
    </>
  )
}

export default Social