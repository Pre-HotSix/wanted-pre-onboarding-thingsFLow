import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";

export default function Layout() {
  return (
    <LayoutContainer>
      <LineBox>
        <Header />
        <Outlet />
      </LineBox>
    </LayoutContainer>
  )
};

const LayoutContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const LineBox = styled.div`
  max-width: 420px;
  width: 100%;
  height: 100%;
  border: 5px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
`;