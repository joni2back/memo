import '../Styles/Memotest.css';

function Memotest(props) {

  const { id, name, buttonText, handleClick } = props;

  return (
    <div className="memotest">
        {name}
        <button onClick={handleClick}>{buttonText}</button>
    </div>
  );
}

/*define props*/

export default Memotest;
