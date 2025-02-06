import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./intro.css";

const Intro = ({ onFormSubmit }) => {
    const [input, setInput] = useState("");
    const [item, setItem] = useState("");
    const [weight, setWeight] = useState("");
    const [season, setSeason] = useState("");
    const [yarnType, setYarnType] = useState("");
    const [step, setStep] = useState(0);
    const [fade, setFade] = useState(false);

    const navigate = useNavigate();  // Initialize useNavigate

    // Function to grab user's input
    const onType = (event) => {
        setInput(event.target.value);
    };

    const handleNextStep = () => {
        setFade(true); // Start fade-out effect
    
        setTimeout(() => {
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
    
            if (step === 3) {
                onFormSubmit(item, weight, season, input);
                navigate('/home');
            } else {
                setStep(step + 1);
            }
    
            setFade(false); // Start fade-in effect
        }, 300); 
    };

    const getQuestion = () => {
        switch (step) {
            case 0:
                return "What would you like to make?";
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
            <h1 className='prompt'>Howdy!</h1>
            <h1 className={`prompt ${fade ? 'hidden' : ''}`}>{getQuestion()}</h1>
            {step < 4 && (
                <div className="input-container">
                    <input 
                        value={input} 
                        onChange={onType} 
                        placeholder={getPlaceholder()}
                    />
                    <button className='input-btn' onClick={handleNextStep}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path className="arrow" d="M12 40V6" strokeDasharray="15" strokeDashoffset="15"></path>
                            <path className="arrow" d="M5 14l7-7 7 7"></path>
                        </svg>
                    </button>
                </div>
            )}
        </div>
    );
};

export default Intro;
