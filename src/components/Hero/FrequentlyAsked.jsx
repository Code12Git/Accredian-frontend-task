import React from 'react';

const FrequentlyAsked = () => {
    return (
        <div className='w-full mt-12 max-w-7xl mx-auto px-4'>
            <h1 className='text-xl md:text-3xl text-center font-bold mb-8 text-gray-900'>
                Frequently Asked <span className='text-blue-600'>Questions</span>
            </h1>
            <div className='flex flex-col lg:flex-row gap-12 items-center justify-around'>
                <div className='space-y-6'>
                    <button className=' w-full  text-blue-400 shadow-lg border border-gray-400 py-6 px-4 text-center rounded-md hover:bg-blue-50 hover:text-blue-500 focus:outline-none'>
                        Eligibility
                    </button>
                    <button className='w-full  text-blue-400 shadow-lg border border-gray-400 py-6 px-4 text-center rounded-md hover:bg-blue-50 hover:text-blue-500 focus:outline-none'>
                        How to use?
                    </button>
                    <button className='w-full  text-blue-400 shadow-lg border border-gray-400 py-6 px-4 text-center rounded-md hover:bg-blue-50 hover:text-blue-500 focus:outline-none'>
                        Terms & Conditions
                    </button>
                </div>
                <div className='space-y-16'>
                    <p className='text-lg text-blue-600'>
                        Do I need to have prior Product Management and Project Management experience to enroll in the program?
                    </p>
                    <p className='text-base text-gray-800'>
                        No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work.
                    </p>
                    <p className='text-lg font-bold text-black'>
                        What is the minimum system configuration required?
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FrequentlyAsked;
