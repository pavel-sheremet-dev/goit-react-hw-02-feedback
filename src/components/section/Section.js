import React from 'react';
import { BoxStyled } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <BoxStyled>
      <p className="title">{title}</p>
      {children}
    </BoxStyled>
  );
};

export default Section;
