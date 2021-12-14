import React, { Component } from 'react';

import Container from './components/container/Container';
import Section from './components/section/Section';
import FeedbackOptions from './components/feedbackOptions/FeedbackOptions';
import Statistics from './components/statistics/Statistics';
import data from './data/stats.json';

export default class App extends Component {
  state = { data };

  onLeaveFeedback = name => {
    this.setState(({ data }) => ({
      [name]: (data[name] += 1),
    }));
  };

  render() {
    const {
      data: { good, neutral, bad },
    } = this.state;
    const total = good + neutral + bad;
    const positive = `${Math.round((data.good / total) * 100)}%`;
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
