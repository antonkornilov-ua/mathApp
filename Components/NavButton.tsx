import ButtonProps from '@/Interface/ButtonProps';
import Link from 'next/link';
import React from 'react';



const StartButton: React.FC<ButtonProps> = ({path, text}) => {
    return (
        <Link
            className='bg-orange-500 tracking-wider hover:bg-orange-700 text-white font-extrabold py-4 px-8 rounded'
            href={path}>
            {text}
        </Link>
    );
};

export default StartButton;
