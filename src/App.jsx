import './App.css';
import Description from './components/Description/Description';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';
import Options from './components/Options/Options';
import { useEffect, useState } from 'react';

const App = () => {
  const baseReview = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [reviews, setReviews] = useState(
    () => JSON.parse(window.localStorage.getItem('reviews')) || baseReview
  );
  useEffect(() => {
    window.localStorage.setItem('reviews', JSON.stringify(reviews));
  }, [reviews]);

  const totalFeedback = Object.values(reviews).reduce(
    (acc, value) => acc + value,
    0
  );

  const positiveFeedback = Math.round(
    (Object.values(reviews)[0] / totalFeedback) * 100
  );

  const reset = () => setReviews(baseReview);
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
        <Feedback
          feedback={Object.entries(reviews)}
          positive={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
};

export default App;
