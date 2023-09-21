'use client'
import StartButton from '@/Components/Game/NavButton';
import Link from 'next/link';



export default function Home() {

 

    return (
        <section className='container h-[75vh] mx-auto mt-8 text-center'>
            <h1 className='lg:text-8xl text-3xl font-semibold text-gray-900 text-center dark:text-gray-100'>
                Математичні приклади
            </h1>
            <p className='text-end mt-4 mr-5 xl:text-xl text-lg  text-gray-900 dark:text-gray-100'>на множення та ділення</p>

            <div className='my-20'>
                <Link
                    className='bg-orange-500 tracking-wider hover:bg-orange-700 text-white font-extrabold py-4 px-8 rounded'
                    href='/Game'>
                    Почнімо!
                </Link>
            </div>
        </section>
    );
}
