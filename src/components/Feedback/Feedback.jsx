const Feedback = ({ feedback }) => {
  return (
    <ul>
      {feedback.map(([key, value]) => (
        <li key={key}>
          {key}:{value}
        </li>
      ))}
    </ul>
  );
};

export default Feedback;
