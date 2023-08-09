const Input = ({ id, text, value, onChangeHandler }) => {
  return (
    <>
      <p>{value}</p>
      <label htmlFor={id}>{text}</label>
      <input type="text" id={id} value={value} onChange={onChangeHandler} />
    </>
  );
};

export default Input;
