import { useState, useCallback } from "react";
import QUESTIONS from '../questions.js';

import Questions from "./Questions.jsx";
import Summary from "./Summary.jsx";

export default function Quiz() {
    
    const [userAnswers, setUserAnswers] = useState([]);

    const currentActiveQuestionIndex = userAnswers.length;
    
    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
    
        setUserAnswers((prevAnswer) => {
            return [...prevAnswer, selectedAnswer];
        });
    }, []);

    const handleSkipOption = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

    // check if the question is last or not then END the quiz
    if (currentActiveQuestionIndex === QUESTIONS.length) {
        return <Summary userAnswer={userAnswers} />
    }

    return (
        <div id="quiz">
            <Questions
                key = {currentActiveQuestionIndex}
                index={currentActiveQuestionIndex}
                handleSkipOption={handleSkipOption}
                onSelectAnswer={handleSelectAnswer}
            />
        </div>
    );
}