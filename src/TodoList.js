import React, { useRef, useState } from "react";
import styled from "styled-components";

export default function TodoList({ todos, setTodos }) {
  const list = useRef(); // useRef input 선택
  const [listId, setListId] = useState(3); // id 고유값 설정

  const onClick = () => {
    setListId(listId + 1);
    const copyTodos = [...todos, { id: listId, title: list.current.value }];
    setTodos(copyTodos);
    list.current.value = "";
  };

  const onDelete = (e) => {
    const copyList = [...todos];
    copyList.splice(e, 1);
    setTodos(copyList);
  };

  return (
    <>
      <Container>
        <TodoUl>
          {todos.map((todo, i) => {
            return (
              <TodoLi key={todo.id}>
                {todo.title}
                <Btn bgcolor="#f00" color="#fff" onClick={() => onDelete(i)}>
                  X
                </Btn>
              </TodoLi>
            );
          })}
        </TodoUl>
        <InputBox>
          <Label>
            할일 : <Input type="text" ref={list} autoFocus />
          </Label>
          <Btn onClick={onClick}>작성</Btn>
        </InputBox>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TodoUl = styled.ul`
  list-style: none;
  width: 300px;
  background: #eac7c7;
  padding: 0 20px;
  border-radius: 10px;
`;
const TodoLi = styled.li`
  width: 100%;
  margin: 30px 0;
  display: flex;
  padding-bottom: 10px;
  justify-content: space-between;
  border-bottom: 1px solid #aaa;
`;
const Btn = styled.button`
  font-size: 0.8rem;
  padding: 5px;
  color: ${(props) => props.color || "#000"};
  background: ${(props) => props.bgcolor || "#EAE0DA"};
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 10px;
  cursor: pointer;
`;
const InputBox = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: #a0c3d2;
  width: 350px;
  padding 20px;
  border-radius: 10px;
`;
const Label = styled.label`
  display: flex;
  align-items: center;
`;
const Input = styled.input`
  border: none;
  font-size: 0.5rem;
  margin: 0 5px;
`;
