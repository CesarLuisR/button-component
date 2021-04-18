import React from "react";
import {
  Button,
  ButtonContainer,
  ButtonSpace,
  ButtonSpaceTitle,
  ButtonsColumn,
  Container,
  Title,
  Footer,
} from "./Styles";

const Content = () => {
  return (
    <Container>
      <Title>Buttons</Title>
      <ButtonContainer>
        <ButtonsColumn>
          <ButtonSpace>
            <ButtonSpaceTitle>&lt;Button/&gt;</ButtonSpaceTitle>
            <Button />
          </ButtonSpace>
          <ButtonSpace>
            <ButtonSpaceTitle>&lt;Button content="Start"/&gt;</ButtonSpaceTitle>
            <Button content="Start" />
          </ButtonSpace>
        </ButtonsColumn>
        <ButtonsColumn>
          <ButtonSpace>
            <ButtonSpaceTitle>
              &lt;Button variant="outline" color="#0000ff"/&gt;
            </ButtonSpaceTitle>
            <Button variant="outline" color="#0000ff" />
          </ButtonSpace>
          <ButtonSpace>
            <ButtonSpaceTitle>
              &lt;Button variant="text" color="#ff0000"/&gt;
            </ButtonSpaceTitle>
            <Button variant="text" color="#ff0000" />
          </ButtonSpace>
        </ButtonsColumn>
        <ButtonsColumn>
          <ButtonSpace>
            <ButtonSpaceTitle>&lt;Button disabled/&gt;</ButtonSpaceTitle>
            <Button disabled />
          </ButtonSpace>
          <ButtonSpace>
            <ButtonSpaceTitle>
              &lt;Button content="Start" color="#00ff00" disabled/&gt;
            </ButtonSpaceTitle>
            <Button content="Start" color="#00ff00" disabled />
          </ButtonSpace>
        </ButtonsColumn>
        <ButtonsColumn>
          <ButtonSpace>
            <ButtonSpaceTitle>
              &lt;Button content="Add" startIcon="shopping-cart"/&gt;
            </ButtonSpaceTitle>
            <Button content="Add" startIcon="shopping-cart" />
          </ButtonSpace>
          <ButtonSpace>
            <ButtonSpaceTitle>
              &lt;Button content="Add" endIcon="shopping-cart"/&gt;
            </ButtonSpaceTitle>
            <Button content="Add" endIcon="shopping-cart" />
          </ButtonSpace>
          <ButtonSpace>
            <ButtonSpaceTitle>
              &lt;Button content="info" startIcon="information"/&gt;
            </ButtonSpaceTitle>
            <Button content="info" startIcon="information" />
          </ButtonSpace>
          <ButtonSpace>
            <ButtonSpaceTitle>
              &lt;Button content="info" endIcon="information" color="#0000ff"
              variant="outline"/&gt;
            </ButtonSpaceTitle>
            <Button
              content="info"
              endIcon="information"
              color="#0000ff"
              variant="outline"
            />
          </ButtonSpace>
        </ButtonsColumn>
        <ButtonsColumn>
          <ButtonSpace>
            <ButtonSpaceTitle>
              &lt;Button content="Start" color="#00ff00" size="sm"/&gt;
            </ButtonSpaceTitle>
            <Button content="Small" color="#00ff00" size="sm" />
          </ButtonSpace>
          <ButtonSpace>
            <ButtonSpaceTitle>
              &lt;Button content="Start" color="#00ff00"/&gt;
            </ButtonSpaceTitle>
            <Button content="Normal" color="#00ff00" />
          </ButtonSpace>
          <ButtonSpace>
            <ButtonSpaceTitle>
              &lt;Button content="Start" color="#00ff00" size="md"/&gt;
            </ButtonSpaceTitle>
            <Button content="Medium" color="#00ff00" size="md" />
          </ButtonSpace>
          <ButtonSpace>
            <ButtonSpaceTitle>
              &lt;Button content="Start" color="#00ff00" size="bg"/&gt;
            </ButtonSpaceTitle>
            <Button content="Big" color="#00ff00" size="bg" />
          </ButtonSpace>
        </ButtonsColumn>
        <ButtonsColumn>
          <ButtonSpace>
            <ButtonSpaceTitle>
              &lt;Button content="Start" color="#00ff00"
              fontColor="#ffffff"/&gt;
            </ButtonSpaceTitle>
            <Button content="Start" color="#0000ff" fontColor="#ffffff" />
          </ButtonSpace>
          <ButtonSpace>
            <ButtonSpaceTitle>
              &lt;Button content="Start" color="#000000"
              fontColor="#ff0000"/&gt;
            </ButtonSpaceTitle>
            <Button content="Start" color="#000000" fontColor="#ff0000" />
          </ButtonSpace>
          <ButtonSpace>
            <ButtonSpaceTitle>
              &lt;Button content="Start" color="#d029c4"
              fontColor="#ff0000"/&gt;
            </ButtonSpaceTitle>
            <Button content="Start" color="#d029c4" fontColor="#000000" />
          </ButtonSpace>
          <ButtonSpace>
            <ButtonSpaceTitle>
              &lt;Button content="Start" color="#eee55d"
              fontColor="#ff0000"/&gt;
            </ButtonSpaceTitle>
            <Button content="Start" color="#eee55d" fontColor="#ff0000" />
          </ButtonSpace>
        </ButtonsColumn>
      </ButtonContainer>
      <Footer>Created by Cesar Luis Rijo - devChallenges.io</Footer>
    </Container>
  );
};

export default Content;
