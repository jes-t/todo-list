import { useState } from "react";
import axios from "axios";
import styled from "styled-components";

function App() {
  const [title, setTitle] = useState("");

  const handleClick = async () => {
    await axios.get("http://localhost:5050/").then((response) => {
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
