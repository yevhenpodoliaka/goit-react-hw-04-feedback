import { useState, useEffect } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notafication/Notafication';

function App() {
  const [good, setGood] = useState(() => {
    return JSON.parse(window.localStorage.getItem('good')) ?? 0;
  });
  
  const [neutral, setNetural] = useState(() => {
    return JSON.parse(window.localStorage.getItem('neutral')) ?? 0;
  });

  const [bad, setBad] = useState(() => {
    return JSON.parse(window.localStorage.getItem('bad')) ?? 0;
  });

  useEffect(() => {
    window.localStorage.setItem('good', good);
  }, [good]);

  useEffect(() => {
    window.localStorage.setItem('bad', bad);
  }, [bad]);

  useEffect(() => {
    window.localStorage.setItem('neutral', neutral);
  }, [neutral]);

  const onButtonClick = e => {
    switch (e.currentTarget.name) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNetural(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;

      default:
        break;
    }
  };
  const countTotalFeedback = () => {
    return good + bad + neutral;
  };
  const countPositiveFeedbackPercentage = () => {
    return Math.ceil((good / (good + bad + neutral)) * 100);
  };
  const options = ['good', 'bad', 'neutral'];
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onButtonClick} />
      </Section>

      <Section title="Statistic">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </>
  );
}

export default App;
