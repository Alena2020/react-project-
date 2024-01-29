function CardToInspire({title, description}) {
  return (
    <li className="Card">
        <p>
          <strong>{title}</strong> 
          <br/>
          {description}
        </p>
    </li>
  );
}

export default CardToInspire;