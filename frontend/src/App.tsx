import { useState } from "react";
import styled from "styled-components";
import { createInstance } from "./shared/api/createInstance";

function App() {
  const [title, setTitle] = useState("");

  const handleClick = async () => {
    const instance = createInstance();

    await instance.get("/api").then((response) => {
      setTitle(response.data);
    });
  };
  return (
    <Root>
      <Title>{title}</Title>
      <Button onClick={handleClick}>Click me</Button>
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  background-color: #f5f5f5;
`;
const Title = styled.span`
  padding: 10px 20px;
  border: 1 px solid #03ff5b;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  &:hover {
    background-color: #ddd;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  border: 1 px solid red;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  &:hover {
    background-color: #ddd;
  }
`;

export default App;
