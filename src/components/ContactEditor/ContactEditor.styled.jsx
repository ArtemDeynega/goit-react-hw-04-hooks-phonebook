import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  border: 1px solid black;
  border-radius: 8px;
  padding: 10px;
  width: 400px;
  margin-left: 22px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 150px;
`;
export const Input = styled.input`
  margin-top: 5px;
  margin-bottom: 10px;
  :active,
  :hover,
  :focus {
    outline: 0;
    outline-offset: 0;
  }
`;
export const Button = styled.button`
  width: 100px;
  border-radius: 5px;
  background-color: white;
  border: 0.5px solid gray;
  :hover {
    background-color: ${({ theme }) => theme.colors.bGcolorBlue};
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
  }
`;
