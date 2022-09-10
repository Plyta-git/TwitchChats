import { useReducer, useState } from "react";
import styled from "styled-components";
import Button from "./Button/Button";

const GridTameplate = styled.div`
  display: grid;
  grid-row-gap: 0.5rem;
  grid-column-gap: 0.5rem;
  grid-template-columns: repeat(4, 5rem);
  grid-template-rows: minmax(8rem, auto) repeat(5, 5rem) minmax(4rem, auto);
  justify-content: center;
`;

const OutputDisplay = styled.div`
  font-size: 3rem;
  grid-column: 1/-1;
  text-align: right;
  margin: 35px 10px 0 0;
  word-wrap: break-word;
  word-break: break-all;
`;
const HistoryDisplay = styled(OutputDisplay)`
  font-size: 1rem;
  color: #ddddddc3;
  text-align: left;
`;

const PreviousOperandDisplay = styled.div`
  font-size: 1.5rem;
  color: #ddddddc3;
`;

const doMath = (previousOperand, operation, currentOperand) => {
  const result = eval(`${previousOperand}${operation}${currentOperand}`);
  if (`${previousOperand}${operation}` === "0/") {
    alert("can't divide by 0");
    return 0;
  }
  if (typeof result === "undefined") return 0;
  if (isNaN(result)) return 0;

  return result;
};

const reducer = (state, { type, payload }) => {
  if (state.previousOperand.endsWith("."))
    state.previousOperand = state.previousOperand.slice(0, -1);
  if (state.currentOperand.endsWith("."))
    state.currentOperand = state.currentOperand.slice(0, -1);
  switch (type) {
    case "addDigit":
      if (
        (state.currentOperand.includes(".") && payload.digit === ".") ||
        (state.currentOperand === "" && payload.digit === ".")
      )
        return state;
      if (state.currentOperand === "0" && payload.digit === "0") return state;
      if (
        state.currentOperand.startsWith("0") &&
        !state.currentOperand.startsWith("0.") &&
        payload.digit !== "."
      )
        return {
          ...state,
          currentOperand: `${
            state.currentOperand ? state.currentOperand.substring(1) : ""
          }${payload.digit}`,
        };
      return {
        ...state,
        currentOperand: `${state.currentOperand ? state.currentOperand : ""}${
          payload.digit
        }`,
      };
    case "AC":
      return {
        ...state,
        currentOperand: "",
        previousOperand: "",
        operation: "",
        operationHistory: [],
      };
    case "DEL":
      return {
        ...state,
        currentOperand: `${
          state.currentOperand
            ? state.currentOperand.slice(0, -1)
            : state.currentOperand
        }`,
      };
    case "equal":
      if (!(state.previousOperand && state.operation && state.currentOperand))
        return state;
      return {
        ...state,
        previousOperand: "",
        operation: "",
        currentOperand: `${doMath(
          state.previousOperand,
          state.operation,
          state.currentOperand
        )}`,
        operationHistory: [
          `${state.previousOperand} 
      ${state.operation} 
      ${state.currentOperand} = ${doMath(
            state.previousOperand,
            state.operation,
            state.currentOperand
          )}`,
          ...state.operationHistory,
        ],
      };
    case "operation":
      if (state.currentOperand === "" && state.operation === "") {
        return state;
      }
      if (state.currentOperand === "" && state.operation !== "") {
        return { ...state, operation: `${payload.digit}` };
      }
      if (state.previousOperand === "") {
        return {
          ...state,
          operation: `${payload.digit}`,
          currentOperand: "",
          previousOperand: `${state.currentOperand}`,
        };
      }
      return {
        ...state,
        operation: `${payload.digit}`,
        currentOperand: "",
        previousOperand: `${doMath(
          state.previousOperand,
          state.operation,
          state.currentOperand
        )}`,
        operationHistory: [
          `${state.previousOperand} 
        ${state.operation} 
        ${state.currentOperand} = ${doMath(
            state.previousOperand,
            state.operation,
            state.currentOperand
          )}`,
          ...state.operationHistory,
        ],
      };
    default:
      return state;
  }
};

const App = () => {
  const [
    { currentOperand, previousOperand, operation, operationHistory },
    dispatch,
  ] = useReducer(reducer, {
    currentOperand: "",
    previousOperand: "",
    operation: "",
    operationHistory: [],
  });
  return (
    <GridTameplate>
      <OutputDisplay>
        <PreviousOperandDisplay>
          {previousOperand}
          {operation}
        </PreviousOperandDisplay>
        <div>{currentOperand}</div>
      </OutputDisplay>

      <Button digit="del" wide color="func" dispatch={dispatch} type="DEL" />
      <Button digit="ac" color="func" dispatch={dispatch} type="AC" />

      <Button
        digit="/"
        color="operation"
        dispatch={dispatch}
        type="operation"
      />

      <Button digit="1" dispatch={dispatch} type="addDigit" />
      <Button digit="2" dispatch={dispatch} type="addDigit" />
      <Button digit="3" dispatch={dispatch} type="addDigit" />

      <Button
        digit="*"
        color="operation"
        dispatch={dispatch}
        type="operation"
      />

      <Button digit="4" dispatch={dispatch} type="addDigit" />
      <Button digit="5" dispatch={dispatch} type="addDigit" />
      <Button digit="6" dispatch={dispatch} type="addDigit" />

      <Button
        digit="+"
        color="operation"
        dispatch={dispatch}
        type="operation"
      />

      <Button digit="7" dispatch={dispatch} type="addDigit" />
      <Button digit="8" dispatch={dispatch} type="addDigit" />
      <Button digit="9" dispatch={dispatch} type="addDigit" />

      <Button
        digit="-"
        color="operation"
        dispatch={dispatch}
        type="operation"
      />

      <Button digit="." dispatch={dispatch} type="addDigit" />
      <Button digit="0" dispatch={dispatch} type="addDigit" />
      <Button
        digit="="
        wide
        color="operation"
        dispatch={dispatch}
        type="equal"
      />
      <HistoryDisplay>
        {operationHistory.map((oh, i) => {
          return <div key={i}>{oh}</div>;
        })}
      </HistoryDisplay>
    </GridTameplate>
  );
};

export default App;
