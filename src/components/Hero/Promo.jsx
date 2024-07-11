import React from 'react';
import { images } from '../../constants';
import Modal from '../ui/Modal';
const PromoSection = () => {
    return (
        <div className='bg-secondary-300 rounded-2xl p-6 w-full max-w-6xl mx-auto mt-8 shadow-lg'>
            <div className='flex flex-col md:flex-row md:items-center gap-8'>
                <img src={images.money} className='w-24 transform rotate-90 md:rotate-0 md:w-32 lg:w-40' alt='money' />
                <div className='flex flex-col gap-6 md:flex-1'>
                    <h1 className='font-roboto font-bold text-4xl md:text-5xl lg:text-6xl leading-tight text-gray-900'>
                        Let's Learn <br />& Earn
                    </h1>
                    <p className='text-lg md:text-2xl lg:text-3xl text-gray-700'>
                        Get a chance to win up-to <span className='text-3xl md:text-4xl lg:text-5xl font-bold text-blue-500'>Rs. 15,000</span>
                    </p>
                    <Modal padding='px-6 py-3' />

                </div>
                <div className='w-full md:w-1/3 lg:w-1/2'>
                    <img src={images.referral} className='w-full rounded-lg shadow-md' alt='referral' />
                </div>
            </div>
        </div>
    );
};

export default PromoSection;
