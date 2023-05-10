import Link from 'next/link'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import Modal from '@/components/Modal'
import { useSupabaseClient} from '@supabase/auth-helpers-react'

function NavbarSession ({ session }) {
    const supabase = useSupabaseClient()
    const router = useRouter();

    const [showModal, setShowModal] = useState(false)
    const handleOnClose = () => setShowModal(false)

    const signOut = async () => {
        console.log('logout')
        supabase.auth.signOut()
        console.log('logoutlogout')
        router.push('/')
    }

    return (
        <>
        <div className="navbar bg-base-100">
        <div className="navbar-start">
            <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li><Link href="/">Home</Link></li>
                <li><a>About</a></li>
                <li><Link href="/services">Services</Link></li>
                <li><a>Pricing</a></li>
                <li><a>Contact</a></li>
            </ul>
            </div>
            <Link href="/" className="btn btn-ghost normal-case text-xl">Allbizzz</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
            <li><Link href="/">Home</Link></li>
            <li><a>About</a></li>
                <li><Link href="/services">Services</Link></li>
                <li><a>Pricing</a></li>
                <li><a>Contact</a></li>
            </ul>
        </div>
        <div className="navbar-end flex-none">
            {!session? <Link className="btn btn-primary" href="/login">Sign in</Link> :
            
            <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                <Link className="justify-between" href="/profile">
                    Profile
                    <span className="badge">public</span>
                </Link>
                </li>
                <li><a onClick={()=>setShowModal(true)}>Settings</a></li>
                <li><button onClick={()=>signOut()}>Logout</button></li>
            </ul>
            </div>
            
            }
        </div>
        </div>
        <Modal onClose={()=>handleOnClose()} visible={showModal} />
        </>
    )
}

export default NavbarSession