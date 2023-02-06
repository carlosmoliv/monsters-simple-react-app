import "./card.styles.css";

const Card = ({ monster: { id, name, email } }) => {
  return (
    <>
      <div className="card-container">
        <img
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
          alt={`Monster ${name}`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </>
  );
};

export default Card;
