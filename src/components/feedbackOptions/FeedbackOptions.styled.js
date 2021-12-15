import styled from 'styled-components';

export const ButtonsList = styled.ul`
  display: flex;
  align-items: center;
`;

export const ButtonsListItem = styled.li`
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

export const FeedbackBtn = styled.button`
  padding: 10px;
  border-radius: 10px;
  background-color: #111111;
  transition: background-color 250ms linear;

  &:hover,
  &:focus {
    background-color: #332233;
  }
`;
