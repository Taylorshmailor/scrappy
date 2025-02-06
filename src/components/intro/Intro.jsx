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

    const navigate = useNavigate();  // Initialize useNavigate

    // Function to grab user's input
    const onType = (event) => {
        setInput(event.target.value);
    };

    const handleNextStep = () => {
        // Update the values based on the current step
        if (step === 0) {
            setItem(input);
        } else if (step === 1) {
            setWeight(input);
        } else if (step === 2) {
            setSeason(input);
        } else if (step === 3) {
            setYarnType(input);
        }

        // Clear input after updating
        setInput("");

        if (step === 3) {
            // Pass the data to the parent component for storage
            onFormSubmit(item, weight, season, input);  // Use input directly for yarnType

            // Navigate to /home after data submission
            navigate('/home');
        } else {
            // If not last step, increment step
            setStep(step + 1);
        }
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
                            <path className="arrow" d="M12 36V6" stroke-dasharray="15" stroke-dashoffset="15"></path>
                            <path className="arrow" d="M5 11l7-7 7 7"></path>
                        </svg>
                    </button>
                </div>
            )}
        </div>
    );
};

export default Intro;
