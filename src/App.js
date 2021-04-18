import React from "react";
import styled from "styled-components";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  const Container = styled.div`
    display: grid;
    grid-template-columns: 237px 1fr;
  `;

  return (
    <Container>
      <NavBar />
    </Container>
  );
};

export default App;
