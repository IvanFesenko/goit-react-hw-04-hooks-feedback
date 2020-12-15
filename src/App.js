import React, { useState } from 'react';

import Controls from './components/Controls';
import Statistics from './components/Statistics';

import styles from './App.module.scss';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  const addFeedback = event => {
    const { name } = event.target;
    switch (name) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        setTotal(prevTotal => prevTotal + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        setTotal(prevTotal => prevTotal + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        setTotal(prevTotal => prevTotal + 1);
        break;
      default:
        break;
    }
  };

  const positiveFeedbackPercentage = () => {
    return ((good / total) * 100).toFixed(2);
  };

  return (
    <div className="App">
      <h2 className={styles.title}>Please leave feedback</h2>
      <Controls handler={addFeedback} />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        positive={positiveFeedbackPercentage()}
      />
    </div>
  );
}

export default App;
