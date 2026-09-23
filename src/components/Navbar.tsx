import { useState } from 'react';
import { FiX } from 'react-icons/fi';
import logo from '../assets/logo-text.png';
import hamburgerIcon from '../assets/hamburger.png';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className='w-full bg-white border-b border-gray-100 sticky top-0 z-50'>
            <div className='container mx-auto h-20 px-6 md:px-12 flex justify-between items-center'>

                <button
                    className='lg:hidden flex items-center justify-center p-1 text-gray-700'
                    onClick={() => setOpen(!open)}
                    aria-label='Toggle navigation'
                >
                    {open ? (
                        <FiX className='w-6 h-6' />
                    ) : (
                        <img src={hamburgerIcon} alt='Menu' className='w-6 h-6 object-contain' />
                    )}
                </button>

                <div>
                    <a className='flex items-center' href='#home'>
                        <img className='h-9 w-auto object-contain' src={logo} alt='Dev Stack Logo' />
                    </a>
                </div>

                <nav className='hidden lg:flex justify-center items-center gap-8 text-sm font-medium text-gray-600'>
                    <a href='#home' className='text-pink-600 font-semibold transition-colors'>Home</a>
                    <a href='#technologies' className='hover:text-gray-950 transition-colors'>Technologies</a>
                    <a href='#projects' className='hover:text-gray-950 transition-colors'>Projects</a>
                    <a href='#about' className='hover:text-gray-950 transition-colors'>About</a>
                    <a href='#contact' className='hover:text-gray-950 transition-colors'>Contact</a>
                </nav>

                <div className='flex items-center gap-5 text-sm font-medium'>
                    <button className='text-gray-700 hover:text-gray-950 transition-colors px-2 py-1 whitespace-nowrap'>
                        Sign In
                    </button>
                    <button className='brand-gradient text-white px-6 py-2.5 rounded-full shadow-sm hover:opacity-95 transition-opacity whitespace-nowrap'>
                        Sign Up
                    </button>
                </div>
            </div>

            {open && (
                <nav className='lg:hidden flex flex-col gap-4 px-6 pb-5 text-sm font-medium text-gray-600 bg-white border-b border-gray-100'>
                    <a href='#home' className='text-pink-600 font-semibold' onClick={() => setOpen(false)}>Home</a>
                    <a href='#technologies' onClick={() => setOpen(false)}>Technologies</a>
                    <a href='#projects' onClick={() => setOpen(false)}>Projects</a>
                    <a href='#about' onClick={() => setOpen(false)}>About</a>
                    <a href='#contact' onClick={() => setOpen(false)}>Contact</a>
                </nav>
            )}
        </header>
    );
};

export default Navbar;