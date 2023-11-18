import { Button } from './buttons/buttons';
import { Statistics } from './statistics/statistics';
import { useState } from 'react';
import { Section } from './section';
import { Notification } from './notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const leaveFeedback = option => {
    if (option === 'good') {
      setGood(prevState => prevState + 1);
    } else if (option === 'bad') {
      setNeutral(prevState => prevState + 1);
    } else {
      setBad(prevState => prevState + 1);
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    if (!total) {
      return 0;
    }
    return ((good / total) * 100).toFixed(0);
    // return ((this.state.good / total) * 100).toFixed(0);
  };

  return (
    <div>
      <Section title={'Please leave your feedback'}>
        <Button
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={leaveFeedback}
        />
      </Section>
      <Section title={'Statistic'}>
        {countTotalFeedback() ? (
          <Statistics
            percentage={countPositiveFeedbackPercentage()}
            total={countTotalFeedback()}
            good={good}
            neutral={neutral}
            bad={bad}
          />
        ) : (
          <Notification />
        )}
      </Section>
    </div>
  );
};
