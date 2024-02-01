import './CardsSection.css';
import { cards } from "../../data";
import CardToInspire from "./CardsToInspire";

function CardsSection() {
  return (
        <section>
          <h3>Cards to Inspire :</h3>
          
          <ul>
            {cards.map(card => <CardToInspire key={card.title} {...card}/>)}
            {/* <CardToInspire 
              title={cards[0].title}
              description={cards[0].description}
            />
            <CardToInspire {...cards[1]}/>
            <CardToInspire {...cards[2]}/>
            <CardToInspire {...cards[3]}/>
            <CardToInspire {...cards[4]}/> */}
          </ul>
        </section> 
  );
}

export default CardsSection;