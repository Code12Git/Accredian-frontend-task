import React from 'react';
import { icons } from '../../constants';

const Navbar = () => {
    return (
        <header className='w-full p-4 '>
            <div className='container mx-auto flex flex-wrap items-center justify-around'>
                <div className='flex items-center gap-8'>
                    <img src={icons.logo} className='h-8' alt='accredian' />
                    <div className='flex '>
                        <button type="button" class="inline-flex w-full justify-center gap-x-1.5 text-white bg-secondary-100 rounded-lg p-2 px-4" id="menu-button" aria-expanded="true" aria-haspopup="true">
                            Courses
                            <svg class=" mt-1 h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                            </svg>
                        </button>

                    </div>
                </div>
                <div className='w-full md:w-auto flex flex-col md:flex-row items-center gap-6'>
                    <div className='flex flex-col md:flex-row items-center gap-10'>
                        <a href='/refer' >Refer & Earn</a>
                        <a href='/resources' >Resources</a>
                        <a href='/aboutus'>About Us</a>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <button className='bg-secondary-200 rounded-lg p-2 px-4 hover:bg-secondary-300'>Login</button>
                        <button className='bg-secondary-100 rounded-lg p-2 px-4 text-white '>Try for free</button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
