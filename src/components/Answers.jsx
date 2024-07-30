import { useRef } from "react";

export default function Answers({
    answers,
    SelectedAnswer,
    answerState,
    onSelectAnswer
}) {

    // shuffling the answers in random order
    let shuffledAnswers = useRef();
    if(!shuffledAnswers.current){
        shuffledAnswers.current = [...answers];
        shuffledAnswers.current.sort(() => Math.random() - 0.5);
    }

    return (
        <ul id="answers">
            {
                shuffledAnswers.current.map(
                    (answer) => {
                        let cssClass = '';
                        let isSelected = (answer === SelectedAnswer);
                        if (answerState === 'answered' && isSelected) {
                            cssClass = 'selected'
                        }
                        if ((answerState === 'correct' || answerState === 'wrong') && isSelected) {
                            cssClass = answerState
                        }

                        return (
                            <li key={answer} className="answer">
                                <button
                                    onClick={() => onSelectAnswer(answer)}
                                    className={cssClass}
                                    disabled={answerState!==''}
                                >
                                    {answer}
                                </button>
                            </li>
                        );
                    })
            }
        </ul>
    );
}