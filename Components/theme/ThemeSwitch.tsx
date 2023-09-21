'use client';

import { BsMoon, BsSun } from 'react-icons/bs';
import { useTheme } from '@/context/ThemeContext';

export default function ThemeSwitch() {
    const { theme, toggleTheme } = useTheme();
    return (
        <button
            className=' w-[2rem] h-[2rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-transparent'
            onClick={toggleTheme}>
            {theme === 'light' ? <BsSun className='border-black text-black' /> : <BsMoon className='text-white  border-white' />}
        </button>
    );
}
