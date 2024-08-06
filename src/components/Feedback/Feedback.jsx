import clsx from 'clsx';
import s from './Feedback.module.css';

const Feedback = ({ feedback, positive }) => {
  return (
    <ul className={clsx(s.list)}>
      {feedback.map(([key, value]) => (
        <li className={clsx(s.item)} key={key}>
          {key}:{value}
        </li>
      ))}
      <li className={clsx(s.item)}>Positive: {positive}%</li>
    </ul>
  );
};

export default Feedback;
