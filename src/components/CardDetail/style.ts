import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding-bottom: 30px;

  .topWrap {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 10px;
    > img {
      width: 50px;
      height: 50px;
      border: 1px solid gray;
    }

    .border {
      width: 100%;
      padding: 10px 0;
      border-bottom: 1px solid gray;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-left: 10px;
    }
  }

  .content {
    width: 100%;
    padding-top: 10px;
    word-break: break-all;
    white-space: pre-line;
  }
`;
