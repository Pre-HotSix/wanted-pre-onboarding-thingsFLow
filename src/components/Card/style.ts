import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  border-bottom: 1px solid gray;
  padding-bottom: 15px;
  margin-bottom: 15px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:last-of-type {
    border-bottom: 0;
    padding-bottom: 0;
  }

  .wrap {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    h3 {
      margin-bottom: 10px;
    }
  }
`;
