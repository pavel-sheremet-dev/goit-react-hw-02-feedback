import React from 'react';
import PropTypes from 'prop-types';

import { SectionContainer, SectionTitle } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <SectionContainer>
      {title && <SectionTitle className="title">{title}</SectionTitle>}
      {children}
    </SectionContainer>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
