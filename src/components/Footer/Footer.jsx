import React from 'react';
import { icons } from '../../constants';
import { programs } from '../../data/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className='w-full bg-gray-900 mt-24 text-white'>
            <div className='max-w-7xl mx-auto py-12 px-6 lg:px-8'>
                <div className='flex flex-col lg:flex-row justify-between items-center'>
                    <img className='w-40 mb-6 lg:mb-0' src={icons.logo1} alt='accredian' />
                    <div className='text-center lg:text-left'>
                        <button className='px-6 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white'>
                            Schedule 1-on-1 Call Now
                        </button>
                        <p className='mt-2'>Speak with our Learning Advisor.</p>
                    </div>
                </div>
                <hr className='border-2 border-white my-8' />
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    <div>
                        <h1 className='text-lg font-bold mb-4'>Programs</h1>
                        <ul>
                            {programs.map((data) => (
                                <li key={data.id} className='flex items-center mb-2'>
                                    <h1 className='font-bold'>{data.name}</h1>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 ml-2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h1 className='text-lg font-bold mb-4'>Contact Us</h1>
                        <p className='mb-2'>Email us (For Data Science Queries): <a href="mailto:admissions@accredian.com" className="text-blue-400">admissions@accredian.com</a></p>
                        <p className='mb-2'>Email us (For Product Management Queries): <a href="mailto:pm@accredian.com" className="text-blue-400">pm@accredian.com</a></p>
                        <p className='mb-2'>Data Science Admission Helpline: <a href="tel:+919079653292" className="text-blue-400">+91 9079653292</a> (9 AM - 7 PM)</p>
                        <p className='mb-2'>Enrolled Student Helpline: <a href="tel:+917969322507" className="text-blue-400">+91 7969322507</a></p>
                        <p className='mb-4'>Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122015</p>
                        <p className='font-bold'>Why Accredian</p>
                        <p>Follow Us</p>
                        <div className='flex space-x-4 mt-2'>
                            <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
                                <FontAwesomeIcon icon={faFacebook} className='text-2xl hover:text-blue-500' />
                            </a>
                            <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
                                <FontAwesomeIcon icon={faTwitter} className='text-2xl hover:text-blue-500' />
                            </a>
                            <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
                                <FontAwesomeIcon icon={faInstagram} className='text-2xl hover:text-pink-500' />
                            </a>
                            <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer'>
                                <FontAwesomeIcon icon={faLinkedin} className='text-2xl hover:text-blue-700' />
                            </a>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-lg font-bold mb-4'>Accredian</h1>
                        <ul>
                            <li className='mb-2'><a href='#' className='hover:underline'>About</a></li>
                            <li className='mb-2'><a href='#' className='hover:underline'>Career</a></li>
                            <li className='mb-2'><a href='#' className='hover:underline'>Blog</a></li>
                            <li className='mb-2'><a href='#' className='hover:underline'>Admission Policy</a></li>
                            <li className='mb-2'><a href='#' className='hover:underline'>Referral Policy</a></li>
                            <li className='mb-2'><a href='#' className='hover:underline'>Privacy Policy</a></li>
                            <li className='mb-2'><a href='#' className='hover:underline'>Terms Of Service</a></li>
                            <li className='mb-2'><a href='#' className='hover:underline'>Master FAQs</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <h1 className='text-center p-2 text-white'>@2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved</h1>
        </footer>
    );
}

export default Footer;
