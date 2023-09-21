'use client';

import React, { useState } from 'react';
import { isAnswerCorrect, renderAnswerMessage } from  './checkAnswer'
import { randomOneToHundred, randomTwoToTen } from './Randoms/randomNumbers';

const DivisionQuestion = () => {
    const [userAnswer, setUserAnswer] = useState('');

    // Перевірка чисел на ділення без остачі

    const [numberX, setNumberX] = useState<number | null>(null);
    const [numberY, setNumberY] = useState<number | null>(null);
    // Функція для перевірки

    const checkDivision = (a: number, b: number): boolean => {
        return a % b === 0;
    };

    function checkNumbers() {
        const randomNum1 = randomOneToHundred();
        const randomNum2 = randomTwoToTen();

        if (checkDivision(randomNum1, randomNum2)) {
            setNumberX(randomNum1);
            setNumberY(randomNum2);
        } else {
            checkNumbers();
        }
    }
    if (numberX === null || numberY === null) {
        checkNumbers();
    }

    const correctAnswer: number = numberX !== null && numberY !== null ? numberX / numberY : 0;

    const handleAnswerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserAnswer(event.target.value);
    };

    

    const borderClassName =
        userAnswer === ''
            ? 'dark:border-gray-200 border-gray-600'
            : isAnswerCorrect(userAnswer, correctAnswer)
            ? 'border-green-500 border-2'
            : 'border-red-500 border-2';

    return (
        <section className={`border p-5 m-3 text-center max-w-sm ${borderClassName} `}>
            <p className='dark:text-white'>
                Ділення {numberX} / {numberY}
            </p>
            <p>
                Скільки буде {numberX} поділити на {numberY}?
            </p>
            <input
                type='text'
                value={userAnswer}
                autoComplete='off'
                onChange={handleAnswerChange}
                className='my-2 text-center dark:text-black text-lg bg-zinc-100'
            />
            <div className='mt-3'>{renderAnswerMessage(userAnswer, correctAnswer)}</div>
        </section>
    );
};

export default DivisionQuestion;
