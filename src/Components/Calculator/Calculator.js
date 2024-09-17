import React, { useState, useReducer } from "react";
import "./Calculator.css";

// تعريف حالة الحاسبة الأولية
const initialState = {
  display: "0",
  operator: null,
  value: null,
};

// تعيين حالة الحاسبة
const calculatorReducer = (state, action) => {
  const { display, operator, value } = state;

  switch (action.type) {
    case "ADD_DIGIT":
      return {
        ...state,
        display: display === "0" ? action.payload : display + action.payload,
      };
    case "CLEAR":
      return initialState;
    case "SET_OPERATOR":
      return {
        ...state,
        operator: action.payload,
        value: parseFloat(display),
        display: "0",
      };
    case "CALCULATE":
      if (operator && value !== null) {
        const result = eval(`${value} ${operator} ${parseFloat(display)}`);
        return {
          ...state,
          display: result.toString(),
          operator: null,
          value: null,
        };
      }
      return state;
    default:
      return state;
  }
};

const Calculator = () => {
  const [state, dispatch] = useReducer(calculatorReducer, initialState);

  const handleDigitClick = (digit) => {
    dispatch({ type: "ADD_DIGIT", payload: digit });
  };

  const handleOperatorClick = (operator) => {
    dispatch({ type: "SET_OPERATOR", payload: operator });
  };

  const handleCalculate = () => {
    dispatch({ type: "CALCULATE" });
  };

  const handleClear = () => {
    dispatch({ type: "CLEAR" });
  };

  return (
    <div className="calculator">
      <div className="display">{state.display}</div>
      <div className="buttons">
        <button onClick={() => handleClear()}>C</button>
        <button onClick={() => handleOperatorClick("/")}>/</button>
        <button onClick={() => handleOperatorClick("*")}>*</button>
        <button onClick={() => handleOperatorClick("-")}>-</button>
        <button onClick={() => handleOperatorClick("+")}>+</button>
        <button onClick={() => handleDigitClick("7")}>7</button>
        <button onClick={() => handleDigitClick("8")}>8</button>
        <button onClick={() => handleDigitClick("9")}>9</button>
        <button onClick={() => handleDigitClick("4")}>4</button>
        <button onClick={() => handleDigitClick("5")}>5</button>
        <button onClick={() => handleDigitClick("6")}>6</button>
        <button onClick={() => handleDigitClick("1")}>1</button>
        <button onClick={() => handleDigitClick("2")}>2</button>
        <button onClick={() => handleDigitClick("3")}>3</button>
        <button onClick={() => handleDigitClick("0")}>0</button>
        <button onClick={() => handleDigitClick(".")}>.</button>
        <button onClick={() => handleCalculate()}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
