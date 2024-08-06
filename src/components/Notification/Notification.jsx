import clsx from 'clsx';
import s from './Notification.module.css';

const Notification = () => {
  return <h3 className={clsx(s.title)}>No feedback yet</h3>;
};

export default Notification;
