import React from 'react';

const Features = () => {
    return (
        <div className='bg-primary rounded-full flex justify-center mt-12 p-2 w-full max-w-2xl mx-auto'>
            <div className='flex flex-wrap justify-center gap-4 sm:gap-20'>
                <a href='#' className='relative text-blue-400 py-2 px-4 rounded-lg hover:bg-secondary-100 hover:text-white'>
                    Refer
                    <span className='absolute left-1/2 transform -translate-x-1/2 bottom-0 inline-block w-0 h-0 border-t-2 border-solid border-secondary-100'></span>
                </a>
                <a href='#' className='relative py-2 px-4 rounded-lg hover:bg-secondary-100 hover:text-white'>
                    Benefits
                    <span className='absolute left-1/2 transform -translate-x-1/2 bottom-0 inline-block w-0 h-0 border-t-2 border-solid border-secondary-100'></span>
                </a>
                <a href='#' className='relative py-2 px-4 rounded-lg hover:bg-secondary-100 hover:text-white'>
                    FAQs
                    <span className='absolute left-1/2 transform -translate-x-1/2 bottom-0 inline-block w-0 h-0 border-t-2 border-solid border-secondary-100'></span>
                </a>
                <a href='#' className='relative py-2 px-4 rounded-lg hover:bg-secondary-100 hover:text-white'>
                    Support
                    <span className='absolute left-1/2 transform -translate-x-1/2 bottom-0 inline-block w-0 h-0 border-t-2 border-solid border-secondary-100'></span>
                </a>
            </div>
        </div>
    );
};

export default Features;
