const Square = ({ id,activate, onSquareClick }) => {
  return (
    <button class='Square' id={'Square'+id.toString()} activate={activate} onClick={onSquareClick}>
      {id}
    </button>
  );
}

export default Square