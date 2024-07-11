import React, { useState } from 'react';
import axios from '../../utils/axios'
import toast from 'react-hot-toast'

const Modal = ({ padding }) => {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        referrerName: '',
        referrerEmail: '',
        refereeName: '',
        refereeEmail: '',
        courseName: '',
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { referrerName, referrerEmail, refereeName, refereeEmail, courseName } = formData;

        if (!referrerName || !referrerEmail || !refereeName || !refereeEmail || !courseName) {
            setError('All fields are required.');
            return;
        }

        try {
            await axios.post('/referral', formData);
            toast.success("Referral successfully sent.")
            setOpen(false);
            setError('');
        } catch (err) {
            console.error('Error creating referral:', err);
            setError('Failed to create referral.');
        }
    };

    return (
        <div>
            <button
                className={`bg-blue-600 text-white rounded-lg ${padding} shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-transform transform hover:scale-105`}
                onClick={() => setOpen(true)}
            >
                Refer Now
            </button>

            {open && (
                <div className='fixed inset-0 flex items-center justify-center z-50'>
                    <div className='fixed inset-0 bg-black opacity-50' onClick={() => setOpen(false)}></div>
                    <div className='bg-white p-8 rounded-lg shadow-lg max-w-md w-full opacity-100 transform transition-transform duration-300 scale-100'>
                        <h2 className='text-2xl font-bold mb-6 text-gray-800'>Refer a Friend</h2>
                        <form onSubmit={handleSubmit}>
                            <div className='mb-5'>
                                <label className='block text-gray-700 mb-2'>Referrer Name</label>
                                <input
                                    type='text'
                                    name='referrerName'
                                    value={formData.referrerName}
                                    onChange={handleChange}
                                    className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition-shadow shadow-sm hover:shadow-md'
                                />
                            </div>
                            <div className='mb-5'>
                                <label className='block text-gray-700 mb-2'>Referrer Email</label>
                                <input
                                    type='email'
                                    name='referrerEmail'
                                    value={formData.referrerEmail}
                                    onChange={handleChange}
                                    className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition-shadow shadow-sm hover:shadow-md'
                                />
                            </div>
                            <div className='mb-5'>
                                <label className='block text-gray-700 mb-2'>Referee Name</label>
                                <input
                                    type='text'
                                    name='refereeName'
                                    value={formData.refereeName}
                                    onChange={handleChange}
                                    className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition-shadow shadow-sm hover:shadow-md'
                                />
                            </div>
                            <div className='mb-5'>
                                <label className='block text-gray-700 mb-2'>Referee Email</label>
                                <input
                                    type='email'
                                    name='refereeEmail'
                                    value={formData.refereeEmail}
                                    onChange={handleChange}
                                    className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition-shadow shadow-sm hover:shadow-md'
                                />
                            </div>
                            <div className='mb-5'>
                                <label className='block text-gray-700 mb-2'>Course Name</label>
                                <input
                                    type='text'
                                    name='courseName'
                                    value={formData.courseName}
                                    onChange={handleChange}
                                    className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition-shadow shadow-sm hover:shadow-md'
                                />
                            </div>
                            {error && <p className='text-red-500 mb-5'>{error}</p>}
                            <div className='flex justify-end'>
                                <button
                                    type='button'
                                    className='bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 focus:outline-none mr-3 transition-transform transform hover:scale-105'
                                    onClick={() => setOpen(false)}
                                >
                                    Cancel
                                </button>
                                <button
                                    type='submit'
                                    className='bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none transition-transform transform hover:scale-105'
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Modal;
