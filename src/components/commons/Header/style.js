import styled from "styled-components";

export const HeaderBox = styled.div`
  max-width: 420px;
  width: 100%;
  height: 10%;
  font-size: ${({ theme }) => theme.fontSize.TITLE};
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;