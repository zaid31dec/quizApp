import quizLogo from '../assets/quiz-logo.png'
export default function Header(){
    return (
        <header>
            <img src={quizLogo} alt="Quiz logo goes here..." />
            <h1>ReactQuiz</h1>
        </header>
    );
}