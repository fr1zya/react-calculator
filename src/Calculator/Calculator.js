import React, {useState} from "react";
import Display from "./Display";
import Button from "./Button";
import './Calculator.css'


function Calculator(){
    const [displayValues, setDisplayValues] = useState('0');
    const [firstOperand, setFirstOperand] = useState(null);
    const [operator, setOperator] = useState(null);
    const [isResultDisplayed, setIsResultDisplayed] = useState(false);
    const handleButtonClick = (label) => {
        if (label === '+' || label === '-' || label === '*' || label === '/'){
            if (firstOperand === null){
                setFirstOperand(displayValues);
                setOperator(label);
                setDisplayValues('0')
            }
            else{
                let result = null;
                if(operator === '+'){
                    result = Number(firstOperand) + Number(displayValues);
                    setDisplayValues(result);
                    setIsResultDisplayed(true);
                }
                else if(operator === '-'){
                    result = Number(firstOperand) - Number(displayValues);
                    setDisplayValues(result);
                    setIsResultDisplayed(true);
                }
                else if(operator === '*'){
                    result = Number(firstOperand) * Number(displayValues);
                    setDisplayValues(result);
                    setIsResultDisplayed(true);
                }
                else if(operator === '/'){
                    result = Number(firstOperand) / Number(displayValues);
                    setDisplayValues(result);
                    setIsResultDisplayed(true);
                }
                setFirstOperand(result);
                setOperator(label);
            }
        }
        else if(label === '='){
            let result = null;
            if(operator === '+'){
                result = Number(firstOperand) + Number(displayValues);
                setDisplayValues(result);
                setIsResultDisplayed(true);
            }
            else if(operator === '-'){
                result = Number(firstOperand) - Number(displayValues);
                setDisplayValues(result);
                setIsResultDisplayed(true);
            }
            else if(operator === '*'){
                result = Number(firstOperand) * Number(displayValues);
                setDisplayValues(result);
                setIsResultDisplayed(true);
            }
            else if(operator === '/'){
                result = Number(firstOperand) / Number(displayValues);
                setDisplayValues(result);
                setIsResultDisplayed(true);
            }
            setFirstOperand(null);
            setOperator(null);
        }
        else {
            console.log('кнопка нажата:', label)
            if (displayValues === '0' || isResultDisplayed === true){
                setDisplayValues(label);
                setIsResultDisplayed(false);
            }
            else{
                setDisplayValues(displayValues + label);
            }
        }
        if (label === 'C'){
            setDisplayValues('0');
            setFirstOperand(null);
            setOperator(null);
            setIsResultDisplayed(false);
        }
    }

    return(
        <div className="calculator">
            <div className="display"><Display value = {displayValues}/></div>
            <Button label = "1" onButtonClick = {handleButtonClick}/>
            <Button label = "2" onButtonClick = {handleButtonClick} />
            <Button label = "3" onButtonClick = {handleButtonClick} />
            <Button label = "4" onButtonClick = {handleButtonClick} />
            <Button label = "5" onButtonClick = {handleButtonClick} />
            <Button label = "6" onButtonClick = {handleButtonClick} />
            <Button label = "7" onButtonClick = {handleButtonClick} />
            <Button label = "8" onButtonClick = {handleButtonClick} />
            <Button label = "9" onButtonClick = {handleButtonClick} />
            <Button label = "0" onButtonClick = {handleButtonClick} />
            <Button label = "+" onButtonClick = {handleButtonClick} />
            <Button label = "-" onButtonClick = {handleButtonClick} />
            <Button label = "*" onButtonClick = {handleButtonClick} />
            <Button label = "/" onButtonClick = {handleButtonClick} />
            <Button label = "=" onButtonClick = {handleButtonClick} />
            <Button label = "C" onButtonClick = {handleButtonClick} />
        </div>
    );
}

export default Calculator;