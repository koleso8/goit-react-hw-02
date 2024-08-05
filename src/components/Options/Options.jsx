const Options = ({ reviews, handleClick, totalFeedback, reset }) => {
  return (
    <ul>
      {reviews.map(item => (
        <li key={item}>
          <button onClick={() => handleClick(item)}>{item}</button>
        </li>
      ))}
      {!totalFeedback || <button onClick={reset}>Reset</button>}
    </ul>
  );
};

export default Options;
