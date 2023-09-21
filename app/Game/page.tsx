'use client';
import MultiplicationQuestion from '@/Components/MultiplicationQuestion';
import React from 'react';
import { randomOneToTen } from '@/utils/randomNumbers';
import DivisionQuestion from '@/Components/DivisionQuestion';
import NavButton from '@/Components/NavButton';

export default function Game() {
    return (
        <section className='w-full flex justify-center items-center flex-col'>
            <div className='my-10 lg:ml-10 text-center'>
                <NavButton path='/' text='На головну' />
            </div>
            <div className='grid lg:grid-cols-3 grid-cols-1 mx-auto gap-y-4 gap-x-20 justify-center'>
                <MultiplicationQuestion x={randomOneToTen()} y={randomOneToTen()} />
                <MultiplicationQuestion x={randomOneToTen()} y={randomOneToTen()} />
                <MultiplicationQuestion x={randomOneToTen()} y={randomOneToTen()} />
                <MultiplicationQuestion x={randomOneToTen()} y={randomOneToTen()} />
                <MultiplicationQuestion x={randomOneToTen()} y={randomOneToTen()} />
                <DivisionQuestion />
                <DivisionQuestion />
                <DivisionQuestion />
                <DivisionQuestion />
                <DivisionQuestion />
                <MultiplicationQuestion x={randomOneToTen()} y={randomOneToTen()} />
                <MultiplicationQuestion x={randomOneToTen()} y={randomOneToTen()} />
                <MultiplicationQuestion x={randomOneToTen()} y={randomOneToTen()} />
                <MultiplicationQuestion x={randomOneToTen()} y={randomOneToTen()} />
                <MultiplicationQuestion x={randomOneToTen()} y={randomOneToTen()} />
                <DivisionQuestion />
                <DivisionQuestion />
                <DivisionQuestion />
                <DivisionQuestion />
                <DivisionQuestion />
                <MultiplicationQuestion x={randomOneToTen()} y={randomOneToTen()} />
                <MultiplicationQuestion x={randomOneToTen()} y={randomOneToTen()} />
                <MultiplicationQuestion x={randomOneToTen()} y={randomOneToTen()} />
                <MultiplicationQuestion x={randomOneToTen()} y={randomOneToTen()} />
                <MultiplicationQuestion x={randomOneToTen()} y={randomOneToTen()} />
                <DivisionQuestion />
                <DivisionQuestion />
                <DivisionQuestion />
                <DivisionQuestion />
                <DivisionQuestion />
                <MultiplicationQuestion x={randomOneToTen()} y={randomOneToTen()} />
                <MultiplicationQuestion x={randomOneToTen()} y={randomOneToTen()} />
                <MultiplicationQuestion x={randomOneToTen()} y={randomOneToTen()} />
                <MultiplicationQuestion x={randomOneToTen()} y={randomOneToTen()} />
                <MultiplicationQuestion x={randomOneToTen()} y={randomOneToTen()} />
                <DivisionQuestion />
                <DivisionQuestion />
                <DivisionQuestion />
                <DivisionQuestion />
                <DivisionQuestion />
                <MultiplicationQuestion x={randomOneToTen()} y={randomOneToTen()} />
                <MultiplicationQuestion x={randomOneToTen()} y={randomOneToTen()} />
            </div>
        </section>
    );
}
