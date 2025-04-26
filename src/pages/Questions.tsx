import React, { useState } from 'react';
import '../assets/modules.css';

const Questions = () => {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState<string[]>([]);
    const [answer, setAnswer] = useState<string[]>([]);
    const [option, setOption] = useState<number | string>();
    const [score, setScore] = useState(0);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const quizData = [
        {
            id: 1,
            category: "Python",
            question: "What is the output of print(2 ** 3)?",
            options: ["5", "6", "8", "9"],
            answer: "8"
        },
        {
            id: 2,
            category: "Python",
            question: "Which of these is used to define a function in Python?",
            options: ["function", "def", "func", "define"],
            answer: "def"
        },
        {
            id: 3,
            category: "Java",
            question: "Which keyword is used to inherit a class in Java?",
            options: ["extends", "implements", "inherits", "instanceof"],
            answer: "extends"
        },
        {
            id: 4,
            category: "Java",
            question: "Which method is the entry point of a Java program?",
            options: ["start()", "main()", "run()", "execute()"],
            answer: "main()"
        },
        {
            id: 5,
            category: "JavaScript",
            question: "Which of the following is NOT a JavaScript data type?",
            options: ["String", "Boolean", "Float", "Undefined"],
            answer: "Float"
        },
        {
            id: 6,
            category: "JavaScript",
            question: "What does '===' mean in JavaScript?",
            options: [
                "Equal value",
                "Equal type",
                "Strict equality (value and type)",
                "Assignment"
            ],
            answer: "Strict equality (value and type)"
        },
        {
            id: 7,
            category: "React",
            question: "What is a React component?",
            options: [
                "A function or class that returns JSX",
                "A JavaScript module",
                "A style sheet",
                "A database"
            ],
            answer: "A function or class that returns JSX"
        },
        {
            id: 8,
            category: "React",
            question: "Which hook is used to handle side effects in React?",
            options: ["useState", "useEffect", "useRef", "useContext"],
            answer: "useEffect"
        },
        {
            id: 9,
            category: "Angular",
            question: "What is Angular primarily used for?",
            options: [
                "Server-side scripting",
                "Mobile development",
                "Single-page web applications",
                "Game development"
            ],
            answer: "Single-page web applications"
        },
        {
            id: 10,
            category: "Angular",
            question: "What is a component in Angular?",
            options: [
                "A class with metadata",
                "A service",
                "A controller",
                "An event handler"
            ],
            answer: "A class with metadata"
        }
    ];

    const prevBtnHandler = () => {
        if (currentQuestion !== 0) {
            setCurrentQuestion((prevQuestion) => prevQuestion - 1)

        }
    }
    const nextBtnHandler = () => {
        if (currentQuestion < quizData.length - 1) {
            setCurrentQuestion((prevQuestion) => prevQuestion + 1)
            // setAnswer([...answer, e]);
        }
    }

    const optionHandler = (e: any) => {
        // console.log(e)
        setSelectedOption([...selectedOption, e])
        // setOption(e)
        answer[currentQuestion] = e;
    }

    const submitHandler = () => {
        quizData.map((item) => {
            answer.map((ans) => {
                if (item.answer === ans) {
                    setScore((prevScore) => prevScore + 1)
                }
            })
        })

        setIsSubmitted((prevStatus) => !prevStatus)

    }

    console.log("answer", answer)
    console.log("score", score)

    return (
        <>
            <div style={{ display: isSubmitted ? 'none' : 'block' }}>Questions</div>
            <div className='container' style={{ display: isSubmitted ? 'none' : 'block' }}>
                <div>
                    <div className='question'>{quizData[currentQuestion].question}</div>
                    {quizData[currentQuestion].options.map((item) => (
                        <div className='option' style={{
                            backgroundColor: answer.includes(item) ? "#007bff" : '',
                            color: answer.includes(item) ? "#fff" : "",
                        }} key={item} onClick={() => optionHandler(item)}>{item}</div>
                    ))}
                </div>
                <div className='button-container'>
                    <button className="prevbtn" disabled={currentQuestion === 0} onClick={prevBtnHandler}>Previous</button>
                    <button className="submit" disabled={answer.length !== quizData.length} style={{ display: currentQuestion === quizData.length - 1 ? 'block' : "none" }} onClick={submitHandler}>submit</button>
                    <button className="Nextbtn" disabled={currentQuestion === quizData.length - 1} onClick={nextBtnHandler}>Next</button>
                </div>
            </div>
                <div style={{ display: isSubmitted ? 'block' : 'none' }}>submitted</div>
                <div style={{ display: isSubmitted ? 'block' : 'none' }}>score: {score} / {quizData.length}</div>
        </>
    );
};

export default React.memo(Questions);