import React from 'react';
import { StatItem } from './Statistics.styled';

const Statistics = props => {
  return (
    <ul>
      {Object.keys(props).map(item => (
        <StatItem key={item}>
          {item}: {props[item]}
        </StatItem>
      ))}
    </ul>
  );
};

export default Statistics;
