import styled from "@emotion/styled";

export const CalcContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 12rem;
  margin-bottom: 12rem;
`;
export const CalcWrapper = styled.div`
  width: 22rem;
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 350px;
`;

export const InputSpace = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  width: 280px;
  font-size: 35px;
  background-color: #000000;
  border-radius: 15px;
  color: #ffffff;
`;

export const BtnClick = styled.div`
  font-size: larger;
  font-weight: 700;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background: transparent;
  background-color: #eaeaea;
  height: 70px;
  width: 70px;
  cursor: pointer;
  border: 2px solid black;
  border-radius: 15px;
`;
