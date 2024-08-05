import './App.css';
import Description from './components/Description/Description';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';
import Options from './components/Options/Options';
import { useState } from 'react';

const App = () => {
  const [reviews, setReviews] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const totalFeedback = Object.values(reviews).reduce(
    (acc, value) => acc + value,
    0
  );
  console.log(Object.values(reviews));

  const reset = () => setReviews();
  const handleClick = item => {
    setReviews(prev => ({ ...prev, [item]: prev[item] + 1 }));
  };

  return (
    <div>
      <Description />
      <Options
        reviews={Object.keys(reviews)}
        handleClick={handleClick}
        totalFeedback={totalFeedback}
        reset={reset}
      />
      {totalFeedback > 0 ? (
        <Feedback feedback={Object.entries(reviews)} />
      ) : (
        <Notification />
      )}
    </div>
  );
};

export default App;
