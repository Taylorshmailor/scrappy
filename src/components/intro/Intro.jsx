import React, { useState } from 'react';
import "./intro.css";

const Intro = () => {
    const [input, setInput] = useState("");
    const [item, setItem] = useState("");
    const [weight, setWeight] = useState("");
    const [season, setSeason] = useState("");
    const [yarnType, setYarnType] = useState("");
    const [step, setStep] = useState(0);

    // function to grab user's input
    const onType = (event) => {
        setInput(event.target.value);
    };

    const handleNextStep = () => {
        if (step === 0) {
            setItem(input);
        } else if (step === 1) {
            setWeight(input);
        } else if (step === 2) {
            setSeason(input);
        } else if (step === 3) {
            setYarnType(input);
        }
        setInput(""); 
        setStep(step + 1);
    };

    const getQuestion = () => {
        switch (step) {
            case 0:
                return "Hi! What would you like to make?";
            case 1:
                return "What is the yarn weight?";
            case 2:
                return "Which season is it for?";
            case 3:
                return "What type of yarn are you using?";
            default:
                return "Thank you! Here is your selection:";
        }
    };

    const getPlaceholder = () => {
        switch (step) {
            case 0:
                return "e.g., Sweater, Scarf, Hat";
            case 1:
                return "e.g., DK, Worsted, Bulky, 5g";
            case 2:
                return "e.g., Winter, Summer, Fall";
            case 3:
                return "e.g., Wool, Cotton, Acrylic";
            default:
                return "";
        }
    };

    return (
        <div className='intro container'>
            <h1 className='prompt'>{getQuestion()}</h1>
            {step < 4 && (
                <div className="input-container">
                    <input 
                        value={input} 
                        onChange={onType} 
                        placeholder={getPlaceholder()}
                    />
                    <button className='input-btn' onClick={handleNextStep}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path class="arrow" d="M12 36V6" stroke-dasharray="15" stroke-dashoffset="15"></path>
                            <path class="arrow" d="M5 11l7-7 7 7"></path>
                        </svg>
                    </button>
                </div>
            )}
            <h2>Clothing Item: {item}</h2>
            <h2>Yarn weight: {weight}</h2>
            <h2>Season: {season}</h2>
            <h2>Yarn type: {yarnType}</h2>
        </div>
    );
};

export default Intro;
