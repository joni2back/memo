import '../Styles/Card.css';

function Card(props) {

  const { id, url, visible } = props;

  return (
    <div className={['card', (visible ? '' : 'flipped')].join(' ')}>
      <div className="card-front">
        <img
          src={url}
          alt={id}
        />
      </div>
      <div className="card-back">
      </div>
    </div>
  );
}

export default Card;





