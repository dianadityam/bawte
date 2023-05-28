import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='flex flex-wrap justify-center content-center h-screen bg-gradient-to-r from-sky-300 to-sky-200'>
            <div className='w-1/2 pl-28'>
                <h1 className='text-white text-7xl font-mukta drop-shadow-md'>
                    Cari<span className='text-black'>Kerja</span>
                </h1>
            </div>
            <div className='w-1/2 px-2'>
                <h3 className='font-mukta text-xl pr-20'>
                    Welcome to <span className='text-white drop-shadow-sm'>Cari</span>
                    Kerja! We are here to help you find the right career. Get ready to embrace new
                    opportunities and build a successful future
                </h3>
                <Link to={'/signup'}>
                    <button className='bg-fuchsia-400 py-2 px-5 mt-2 rounded-md drop-shadow-sm'>
                        Sign Up
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Home;
