import React from 'react';
import {
  FeedbackBtnStyled,
  ButtonsListItemStyled,
  ButtonsListStyled,
} from './FeedbackOptions.styled';

const FeedbackOptions = ({ data, onBtnClick }) => {
  return (
    <ButtonsListStyled>
      {Object.keys(data).map(item => (
        <ButtonsListItemStyled key={item}>
          <FeedbackBtnStyled
            type="button"
            onClick={() => {
              onBtnClick(item);
            }}
          >
            {item}
          </FeedbackBtnStyled>
        </ButtonsListItemStyled>
      ))}
    </ButtonsListStyled>
  );
};

export default FeedbackOptions;
