function Random() {
  let Number = Math.random() * 100;
  return <p>Random Number is {Math.round(Number)}</p>;
}

export default Random;
