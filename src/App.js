import React, { useState } from "react";
import TodoList from "./TodoList";
import styled, { createGlobalStyle } from "styled-components";
import GlobalFonts from "./style/fonts/font";

export default function App() {
  const [todos, setTodos] = useState([
    { id: 0, title: "청소" },
    { id: 1, title: "산책" },
    { id: 2, title: "운동" },
  ]);

  return (
    <>
      <GlobalStyle />
      <GlobalFonts />
      <AppTitle>Todo List</AppTitle>
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  html {
    font-size : 36px
  }
  * {
      margin:0;
      padding:0;
      box-sizing:border-box;
  }
  body,button,input {
    font-family: 'NanumPenScriptRegular';
  }
`;
const AppTitle = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin: 10px;
`;
