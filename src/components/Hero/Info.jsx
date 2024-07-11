import React from 'react';

const Info = () => {
    return (
        <div className='mt-24 w-full max-w-7xl  m-auto  p-5 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 rounded-lg shadow-lg'>
            <div className='flex flex-col  lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-12'>
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                    <rect width="80" height="80" rx="12" fill="#E2E8F0" fillOpacity="0.35" />
                    <rect x="4" y="4" width="72" height="72" rx="12" fill="white" />
                    <path d="M61 30.6667C63.5774 30.6667 65.6666 32.756 65.6666 35.3334V44.6667C65.6666 47.2441 63.5774 49.3334 61 49.3334H58.5222C57.374 58.5414 49.519 65.6667 40 65.6667V61C47.7319 61 54 54.732 54 47V33C54 25.2681 47.7319 19 40 19C32.268 19 26 25.2681 26 33V49.3334H19C16.4226 49.3334 14.3333 47.2441 14.3333 44.6667V35.3334C14.3333 32.756 16.4226 30.6667 19 30.6667H21.4777C22.626 21.4587 30.4809 14.3334 40 14.3334C49.519 14.3334 57.374 21.4587 58.5222 30.6667H61ZM30.1053 48.8315L32.579 44.8737C34.7304 46.2212 37.2742 47 40 47C42.7258 47 45.2696 46.2212 47.4209 44.8737L49.8947 48.8315C47.0261 50.6281 43.6344 51.6667 40 51.6667C36.3656 51.6667 32.9739 50.6281 30.1053 48.8315Z" fill="#1A73E8" />
                </svg>
                <div className="text-white text-center lg:text-left">
                    <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold mb-2'>
                        Want to delve deeper into the program?
                    </h1>
                    <p className='text-lg md:text-xl lg:text-2xl'>
                        Share your details to receive expert insights from our program team!
                    </p>
                </div>
                <div className="flex justify-center lg:justify-end mt-6 lg:mt-0">
                    <button className='text-lg text-blue-400 bg-white p-3 md:p-4 rounded-lg shadow-md hover:bg-blue-50 focus:outline-none'>
                        Get in touch &gt;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Info;
