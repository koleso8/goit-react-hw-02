const Options = ({ reviews, handleClick, totalFeedback }) => {
  console.log(reviews);

  return (
    <ul>
      {reviews.map(item => (
        <li key={item}>
          <button onClick={() => handleClick(item)}>{item}</button>
        </li>
      ))}
      {totalFeedback ? <button>Reset</button> : ''}
    </ul>
  );
};

export default Options;
