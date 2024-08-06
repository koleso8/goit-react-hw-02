import clsx from 'clsx';
import s from './Description.module.css';

const Description = () => {
  return (
    <div className={clsx(s.description)}>
      <h1 className={clsx(s.title)}>Sip Happens Café</h1>
      <p className={clsx(s.text)}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
};

export default Description;
