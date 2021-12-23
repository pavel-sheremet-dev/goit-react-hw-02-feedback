import React, { Component } from 'react';

import Container from './components/container/Container';
import Section from './components/section/Section';
import FeedbackOptions from './components/feedbackOptions/FeedbackOptions';
import Statistics from './components/statistics/Statistics';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = name => {
    this.setState(prevState => ({
      [name]: (prevState[name] += 1),
    }));
  };

  countTotalFeedbacks = state =>
    Object.values(state).reduce((acc, option) => acc + option, 0);

  countTotalFeedbacks = state =>
    Object.values(state).reduce((acc, option) => acc + option, 0);

  countPositiveFeedbacks = total =>
    `${Math.round((this.state.good / total) * 100)}%`;

  render() {
    const total = this.countTotalFeedbacks(this.state);
    const positive = this.countPositiveFeedbacks(total);
    const statisticsData = { ...this.state, total, positive };

    return (
      <>
        <Container>
          <Section title="Please rate the product">
            <FeedbackOptions
              data={this.state}
              onBtnClick={this.onLeaveFeedback}
            />
          </Section>
          <Section title="Rating statistics">
            {total ? <Statistics data={statisticsData} /> : <p>No stats yet</p>}
          </Section>
        </Container>
      </>
    );
  }
}
