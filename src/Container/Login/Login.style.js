import styled from "@emotion/styled";

// LoginWork
export const Loginwork = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Welcome = styled.div`
  width: 100%;
  max-width: 480px;
  background-color: #fff;
  padding: 15px 30px;
  h2 {
    color: #888;
    font-size: 28px;
    font-weight: 500;
    margin-bottom: 30px;
  }
  span {
    color: #fe4880;
    font-weight: 700;
  }
`;

// LoginForm_css

export const Forminner = styled.div`
  position: relative;
  background-color: #fff;
  padding: 30px;
  z-index: 2;
  display: block;
  margin-bottom: 15px;
`;
export const ForminnerWord = styled.h2`
  color: #888;
  font-size: 28px;
  font-weight: 500;
  margin-bottom: 30px;
`;

export const Formgroup = styled.div`
  display: block;
  width: 300px;
  margin-bottom: 15px;
`;

export const Formword = styled.label`
  display: block;
  color: #666;
  font-size: 12px;
  margin-bottom: 5px;
  transition: 0.4s;
  :focus-within {
    color: #fe4880;
  }
`;

export const Forminput = styled.input`
  display: block;
  width: 100%;
  padding: 10px 15px;
  background-color: #f8f8f8;
  border-radius: 8px;
  transition: 0.4s;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
`;

export const LoginBtn = styled.input`
  display: inline-block;
  padding: 10px 15px;
  border-radius: 8px;
  background-image: linear-gradient(
    to right,
    #ffce00 50%,
    #ffce00 50%,
    #fe4880
  );
  background-size: 200%;
  background-position: 0%;
  transition: 0.4s;
  color: #fff;
  font-weight: 700;
  cursor: pointer;
  :hover {
    background-position: 100% 0%;
  }
`;
