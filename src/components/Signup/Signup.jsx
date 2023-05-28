import React from 'react';

const Signup = () => {
    return (
        <div className='flex flex-wrap justify-center content-center h-screen bg-gradient-to-r from-sky-300 to-sky-200 font-mukta'>
            <div className='bg-white rounded-md w-9/12 p-8 drop-shadow-xl'>
                <form action='submit'>
                    <label htmlFor=''>Full Name</label>
                    <input
                        type='text'
                        className=' block text-gray-700 border border-slate-500 rounded py-1 px-2 my-2 focus:outline-none focus:bg-white'
                        placeholder='Full Name'
                    />
                    <label htmlFor=''>Date of birth</label>
                    <input
                        type='date'
                        className='block text-gray-700 border border-slate-500 rounded py-1 px-2 my-2 focus:outline-none focus:bg-white'
                        placeholder='Last Name'
                    />
                    <label htmlFor=''>Email</label>
                    <input
                        type='email'
                        className='block text-gray-700 border border-slate-500 rounded py-1 px-2 my-2 focus:outline-none focus:bg-white'
                        placeholder='Email'
                    />
                    <label htmlFor=''>Phone</label>
                    <input
                        type='phone'
                        className='block text-gray-700 border border-slate-500 rounded py-1 px-2 my-2 focus:outline-none focus:bg-white'
                        placeholder='Phone'
                    />
                    <label htmlFor='' className='block'>
                        Pendidikan Terakhir
                    </label>
                    <input type='radio' id='smp' className='mr-2' />
                    <label htmlFor='smp' className='mr-2'>
                        SMP
                    </label>
                    <input type='radio' id='smp' className='mr-2' />
                    <label htmlFor='smp' className='mr-2'>
                        SMP
                    </label>
                    <input type='radio' id='sma' className='mr-2' />
                    <label htmlFor='sma' className='mr-2'>
                        SMA
                    </label>
                    <input type='radio' id='s1' className='mr-2' />
                    <label htmlFor='smp' className='mr-2'>
                        S1
                    </label>
                    <br />
                    <button className='bg-sky-800 py-2 px-5 mt-2 rounded-md drop-shadow-sm text-white'>
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Signup;
