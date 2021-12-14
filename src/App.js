import React, { Component } from 'react';

import Container from './components/container/Container';
import Section from './components/section/Section';
import FeedbackOptions from './components/feedbackOptions/FeedbackOptions';
import Statistics from './components/statistics/Statistics';

const data = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export default class App extends Component {
  state = { data, total: 0, positive: '' };

  onLeaveFeedback = name => {
    this.setState(({ data, total }) => ({
      [name]: (data[name] += 1),
      total: total + 1,
    }));
    this.setState(({ data, total }) => ({
      positive: `${Math.round((data.good / total) * 100)}%`,
    }));
  };

  render() {
    const {
      data: { good, neutral, bad },
      total,
      positive,
    } = this.state;
    return (
      <>
        <Container>
          <Section title="Please rate the product">
            <FeedbackOptions
              data={this.state.data}
              onBtnClick={this.onLeaveFeedback}
            />
          </Section>
          <Section title="Rating statistics">
            {total ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positive={positive}
              />
            ) : (
              <p>No stats yet</p>
            )}
          </Section>
        </Container>
      </>
    );
  }
}
