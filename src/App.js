// import Style from "./style.module.css";

// import "./index.css";
import styled from "styled-components";

const Title = styled.h1`
  color: red;
  background-color: darkcyan;
`;

const Button = styled.button`
  color: ${(prop) => (prop.primary ? "blue" : "gray")};
  background: ${(prop) => (prop.primary ? "gold" : "black")};
`;

const FancyButton = styled(Button)`
  border: 10px solid red;
`;

const users = [
  { name: "Megan Fox" },
  { name: "Megan Fox" },
  { name: "Megan Fox" },
  { name: "Megan Fox" },
  { name: "Megan Fox" },
  {},
];

function App() {
  return (
    <div>
      <h1>Hello React 2</h1>
      <Title>Hello styled</Title>
      <Button href="www." as={"a"} primary>
        Click me
      </Button>
      <FancyButton primary>fancy</FancyButton>

      {users.map((user, index) => (
        <p key={index}>{user.name}</p>
      ))}
    </div>
  );
}

export default App;
