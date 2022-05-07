import styled from '@emotion/styled';

export const ListItem = styled.li`
  display: flex;
  margin: 10px;
  margin-left: 20px;
  list-style: none;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.button`
  margin-left: 20px;
  border-radius: 5px;
  background-color: #fff;
  border: 1px solid gray;

  :hover,
  :focus {
    background-color: ${({ theme }) => theme.colors.bGcolorBlue};
    color: ${({ theme }) => theme.colors.white};
  }
`;
