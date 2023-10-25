const MyButton = ({ name, onClick , num }) => {
  if (num===undefined){num=name}
  function handleClick() {
    onClick(num);
  }
  return (
    <button onClick={handleClick}>
      {/* https://youtu.be/t6L2ZArc8Cs?si=4zbs4brUqDoop2Qo */}
      {name}
    </button>
  );
}
// https://react.dev/learn#sharing-data-between-components
export default MyButton