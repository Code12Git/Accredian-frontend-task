import React from 'react';
import Selector from '../ui/Selector';
import Table from '../ui/Table';
import { ProgramData } from '../../data/data';
import SwitchButton from '../ui/Switch';
import Modal from '../ui/Modal';

const ReferralBenefits = () => {
    return (
        <div className="flex flex-col items-center justify-center px-4 py-8 sm:py-16 md:py-24 w-full">
            <h1 className="font-roboto font-bold text-2xl sm:text-3xl text-center mb-8">
                What Are The <span className="text-blue-500">Referral Benefits?</span>
            </h1>
            <div className="w-full justify-center mt-12 flex flex-col lg:flex-row lg:gap-8 items-center">
                <div className="w-full shadow-lg rounded      max-w-96 lg:w-1/2 overflow-x-auto mb-8 lg:mb-0">
                    <table className="table-auto w-full border-collapse border border-gray-200">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="px-4 flex justify-between rounded py-2 text-white bg-secondary-100 border border-gray-200">ALL PROGRAMS
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                        <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                                    </svg>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {ProgramData.map((data) => (
                                <tr key={data.id}>
                                    <td className="px-4 flex justify-between py-2 border border-gray-200 font-sans text-gray-500">{data.title}

                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                            <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                                        </svg>

                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="w-full h-full lg:w-1/2 flex flex-col gap-4 items-center">
                    <SwitchButton />
                    <div className="w-full overflow-x-auto overflow-y-auto flex-grow">
                        <Table />
                    </div>
                    <Selector />
                </div>


            </div>
            <div className='m-auto mt-10'>
                <Modal padding='p-5 px-10' />
            </div>
        </div>
    );
};

export default ReferralBenefits;
