import React from 'react';
import PropTypes from 'prop-types';
import { StatItem } from './Statistics.styled';

const Statistics = ({ data }) => {
  return (
    <ul>
      {Object.keys(data).map(item => (
        <StatItem key={item}>
          {item}: {data[item]}
        </StatItem>
      ))}
    </ul>
  );
};

Statistics.propTypes = {
  data: PropTypes.object,
};

export default Statistics;
