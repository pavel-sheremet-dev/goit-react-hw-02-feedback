import React, { Component } from 'react';

import Container from './components/container/Container';
import Section from './components/section/Section';
import FeedbackOptions from './components/feedbackOptions/FeedbackOptions';
import Statistics from './components/statistics/Statistics';

export default class App extends Component {
  state = {
    initialValue: {
      good: 0,
      neutral: 0,
      bad: 0,
    },
  };

  onLeaveFeedback = name => {
    this.setState(({ initialValue }) => ({
      [name]: (initialValue[name] += 1),
    }));
  };

  render() {
    const {
      initialValue: { good, neutral, bad },
    } = this.state;
    const total = good + neutral + bad;
    const positive = `${Math.round((good / total) * 100)}%`;
    return (
      <>
        <Container>
          <Section title="Please rate the product">
            <FeedbackOptions
              data={this.state.initialValue}
              onBtnClick={this.onLeaveFeedback}
            />
          </Section>
          <Section title="Rating statistics">
            {total ? (
              <Statistics data={{ good, neutral, bad, total, positive }} />
            ) : (
              <p>No stats yet</p>
            )}
          </Section>
        </Container>
      </>
    );
  }
}
