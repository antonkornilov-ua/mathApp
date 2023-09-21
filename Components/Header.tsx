'use client';

import Link from 'next/link';
import { useState } from 'react';
import ThemeSwitch from './theme/ThemeSwitch';

export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const showNavMenu =
        'bg-white dark:bg-gray-900 block w-full h-screen z-10 flex flex-col top-0 left-0 absolute justify-evenly items-center';

    return (
        <header className='border-b pb-2 border-gray-400  bg-gray-200/10 flex flex-wrap items-center justify-between mb-10 dark:bg-gray-800 '>
            <Link
                href='/'
                className='hover:text-orange-500 text-gray-900 dark:text-gray-100 transition-colors text-xl lg:text-3xl font-semibold lg:tracking-wide'>
                Математичні приклади
            </Link>

            <div>
                {/* mobile view */}
                <section className='flex lg:hidden'>
                    <div className='space-y-2' onClick={() => setIsNavOpen((prev) => !prev)}>
                        <span className='block h-0.5 w-8 animate-pulse bg-gray-800 dark:bg-slate-100'></span>
                        <span className='block h-0.5 w-8 animate-pulse bg-gray-800 dark:bg-slate-100'></span>
                        <span className='block h-0.5 w-8 animate-pulse bg-gray-800 dark:bg-slate-100'></span>
                    </div>

                    <div className={isNavOpen ? showNavMenu : 'hideNavMenu'}>
                        <div className='absolute top-0 right-0 p-8 transition-all ' onClick={() => setIsNavOpen(false)}>
                            <svg
                                className='h-8 w-8 text-gray-600 dark:text-slate-100'
                                viewBox='0 0 24 24'
                                fill='none'
                                stroke='currentColor'
                                strokeWidth='2'
                                strokeLinecap='round'
                                strokeLinejoin='round'>
                                <line x1='18' y1='6' x2='6' y2='18' />
                                <line x1='6' y1='6' x2='18' y2='18' />
                            </svg>
                        </div>

                        <ul className='flex flex-col gap-4 items-center justify-between min-h-[250px]'>
                            <li className='border-b border-gray-400 my-8 uppercase'>
                                <Link href='/About' onClick={() => setIsNavOpen(false)}>
                                    Про додаток
                                </Link>
                            </li>

                            <li className='border-b border-gray-400 my-8 uppercase'>
                                <Link
                                    href='https://antonkornilovcv.vercel.app/'
                                    target='_blank'
                                    onClick={() => setIsNavOpen(false)}>
                                    Розробник
                                </Link>
                            </li>
                            <li>
                                <ThemeSwitch />
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Desktop menu */}
                <section>
                    <ul className='hidden space-x-8 lg:flex justify-center items-center'>
                        <li>
                            <Link href='/About' className='hover:underline hover:text-orange-500'>
                                Про додаток
                            </Link>
                        </li>

                        <li>
                            <Link
                                href='https://antonkornilovcv.vercel.app/'
                                target='_blank'
                                className='hover:underline hover:text-orange-500'>
                                Розробник
                            </Link>
                        </li>
                        <li>
                            <ThemeSwitch />
                        </li>
                    </ul>
                </section>
            </div>
        </header>
    );
}
