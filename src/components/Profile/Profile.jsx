import React from 'react';

const Signup = () => {
    return (
        <div className='mt-7 lg:container lg:mx-auto'>
            <div className="parent md:h-screen md:grid md:grid-cols-6">
                <div className='main bg-blue-400 md:col-span-4'>

                </div>

                <div className="sidebar md:col-span-2 p-4">
                    <div className="rounded-full flex mx-auto h-28 w-28 p-8 bg-slate-400 mb-4">
                        <h3 className='text-3xl font-extrabold m-auto text-slate-50'>WA</h3>
                    </div>

                    <div className="profile-data">
                        <h1 className='text-center text-2xl font-bold leading-none text-gray-900 md:text-2xl lg:text-3xl'>Wildan Aqso</h1>
                        <h3 className='text-center mt-3 mb-6 text-xl leading-none text-gray-900 md:text-1xl lg:text-1xl'>Front End Engineer</h3>

                        <div className="flex flex-row justify-center">
                            <div className="basis-1/4">
                                <div className="inform-section mb-5">
                                    <h6 className='text-sm font-extrabold uppercase text-slate-400'>phone</h6>
                                    <p>85123123843</p>
                                </div>
                                <div className="inform-section mb-4">
                                    <h6 className='text-sm font-extrabold uppercase text-slate-400'>lokasi</h6>
                                    <p>Jakarta, Indonesia</p>
                                </div>
                            </div>
                            <div className="basis-1/6"></div>
                            <div className="basis-1/4">
                                <div className="inform-section mb-5">
                                    <h6 className='text-sm font-extrabold uppercase text-slate-400'>email</h6>
                                    <p>wildanaqso@gmail.com</p>
                                </div>
                                <div className="inform-section mb-5">
                                    <h6 className='text-sm font-extrabold uppercase text-slate-400'>usia, jenis kelamin</h6>
                                    <p>25 years old, Laki-laki</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
