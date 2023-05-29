import React, { useEffect } from 'react';

const Signup = () => {

    useEffect(() => {
        console.log('aw')
        let jsonResult = {};

        const dataMhs = [];

        for (let index = 1; index <= 10; index++) {
            dataMhs.push({
                name: `mhs_${index}`,
                aspek_penilaian_1: 2, 
                aspek_penilaian_2: 5, 
                aspek_penilaian_3: 9, 
                aspek_penilaian_4: 4, 
            })
            
        }



        let dataNilaiMhs = {};
        for (let j = 0; j < dataMhs.length; j++) {
            let i;
            for(i=1; i <= 4; i++) {
                // jsonResult[`aspek_penilaian_${i}`] = dataNilaiMhs;
                console.log(dataMhs[j][`aspek_penilaian_${i}`]);
            }
            // dataNilaiMhs[`mahasiswa_${j+1}`] = dataMhs[j][`aspek_penilaian_${i}`];
        }
        console.log(dataNilaiMhs, 'aw');
            // console.log(jsonResult, 'waw')
    }, [])
    return (
        <div className='mt-16 lg:container lg:mx-auto'>
            <div className="parent md:h-screen md:grid md:grid-cols-7">
                <div className='main md:col-span-5'>
                    <div className="work-experience">
                        <h1 className='mb-8 text-2xl font-bold leading-none text-gray-900 md:text-2xl lg:text-3xl'>Pengalaman Kerja</h1>
                        <ol className="relative border-l border-gray-200 dark:border-gray-700">                  
                            <li className="mb-10 ml-4">
                                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2022</time>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Application UI code in Tailwind CSS</h3>
                                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
                            </li>
                            <li className="mb-10 ml-4">
                                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2022</time>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Marketing UI design in Figma</h3>
                                <p className="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
                            </li>
                            <li className="ml-4">
                                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2022</time>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">E-Commerce UI code in Tailwind CSS</h3>
                                <p className="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
                            </li>
                        </ol>
                    </div>
                    <hr className='mt-8' />
                    <div className="mt-12 education-experience">
                        <h1 className='mb-8 text-2xl font-bold leading-none text-gray-900 md:text-2xl lg:text-3xl'>Pendidikan</h1>
                        <ol className="relative border-l border-gray-200 dark:border-gray-700">                  
                            <li className="mb-10 ml-4">
                                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2022</time>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Application UI code in Tailwind CSS</h3>
                                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
                            </li>
                            <li className="mb-10 ml-4">
                                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2022</time>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Marketing UI design in Figma</h3>
                                <p className="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
                            </li>
                            <li className="ml-4">
                                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2022</time>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">E-Commerce UI code in Tailwind CSS</h3>
                                <p className="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
                            </li>
                        </ol>
                    </div>
                </div>

                <div className="sidebar md:col-span-2 ml-3">
                    <div className="shadow p-4 rounded sticky top-16 ">
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
        </div>
    );
};

export default Signup;
