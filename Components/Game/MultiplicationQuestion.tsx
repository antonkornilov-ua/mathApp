'use client';

import React, { useState } from 'react';
import { isAnswerCorrect, renderAnswerMessage } from './checkAnswer';
import NumberProps from '@/Interface/NumberProps';

const MultiplicationQuestion: React.FC<NumberProps> = ({ x, y }) => {
    const [userAnswer, setUserAnswer] = useState('');
    const correctAnswer = x * y;

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
            <p>
                Множення {x} * {y}
            </p>
            <p>
                Скільки буде {x} помножити на {y}?
            </p>
            <input
                type='text'
                value={userAnswer}
                autoComplete='off'
                onChange={handleAnswerChange}
                className='my-2 text-center dark:text-black text-lg '
            />
            <div className='mt-3'>{renderAnswerMessage(userAnswer, correctAnswer)}</div>
        </section>
    );
};

export default MultiplicationQuestion;
