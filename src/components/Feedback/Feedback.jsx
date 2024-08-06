import clsx from 'clsx';
import s from './Feedback.module.css';

const Feedback = ({ feedback, positive }) => {
  return (
    <ul className={clsx(s.list)}>
      {feedback.map(([key, value]) => (
        <li key={key}>
          {key}:{value}
        </li>
      ))}
      <li>Positive: {positive}%</li>
    </ul>
  );
};

export default Feedback;
