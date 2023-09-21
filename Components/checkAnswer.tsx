import React from 'react';

export const isAnswerCorrect = (userAnswer: string, correctAnswer: number): boolean => {
    const userEnteredNumber = parseFloat(userAnswer);
    return !isNaN(userEnteredNumber) && userEnteredNumber === correctAnswer;
};

export const renderAnswerMessage = (userAnswer: string, correctAnswer: number): React.ReactNode | null => {
    if (userAnswer === '') {
        return null;
    }
    return isAnswerCorrect(userAnswer, correctAnswer) ? (
        <p className='text-green-500'>Відповідь правильна!</p>
    ) : (
        <p className='text-red-500'>Спробуйте ще раз.</p>
    );
};
