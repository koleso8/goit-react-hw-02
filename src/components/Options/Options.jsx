import clsx from 'clsx';
import s from './Options.module.css';

const Options = ({ reviews, handleClick, totalFeedback, reset }) => {
  return (
    <ul className={clsx(s.list)}>
      {reviews.map(item => (
        <li className={clsx(s.item)} key={item}>
          <button className={clsx(s.btnI)} onClick={() => handleClick(item)}>
            {item}
          </button>
        </li>
      ))}
      {!totalFeedback || (
        <li className={clsx(s.item)}>
          <button className={clsx(s.btnI)} onClick={reset}>
            Reset
          </button>
        </li>
      )}
    </ul>
  );
};

export default Options;
