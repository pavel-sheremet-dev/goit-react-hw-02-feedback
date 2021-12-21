import React from 'react';
import PropTypes from 'prop-types';
import {
  FeedbackBtn,
  ButtonsListItem,
  ButtonsList,
} from './FeedbackOptions.styled';

const FeedbackOptions = ({ data, onBtnClick }) => {
  return (
    <ButtonsList>
      {Object.keys(data).map(item => (
        <ButtonsListItem key={item}>
          <FeedbackBtn
            type="button"
            name={item}
            onClick={e => {
              onBtnClick(e.currentTarget.name);
            }}
          >
            {item}
          </FeedbackBtn>
        </ButtonsListItem>
      ))}
    </ButtonsList>
  );
};

FeedbackOptions.propTypes = {
  data: PropTypes.object,
  onBtnClick: PropTypes.func.isRequired,
};

export default FeedbackOptions;
