import './App.css';
import Header from './components/Header';
import CardToInspire from './components/CardsToInspire'; 
import Button from './components/Button/Button';
import { useState } from 'react';
import { cards, tabs } from './data';



function App() {
  const [ content, setContent] = useState('Click Button');
  function handleClick(type) {
    setContent(type);
  }

  return (
    <div className="App">
      <Header/>
      <main>
        <section>
          <h3>Cards to Inspire :</h3>
          
          <ul>
            <CardToInspire {...cards[0]}/>
            <CardToInspire {...cards[1]}/>
            <CardToInspire {...cards[2]}/>
            <CardToInspire {...cards[3]}/>
            <CardToInspire {...cards[4]}/>
          </ul>
        </section>  
        <section>
          <h3>Tabs for kalimba</h3>
          <Button onClick={() => handleClick('witcher')}>Toss a Coin to your Witcher</Button>
          <Button onClick={() => handleClick('frozen')}>Frozen - Do You Want to Build a Snowman?</Button>
          <Button onClick={() => handleClick('Priscilla')}>The Witcher 3: Wild Hunt – The Wolven Storm (Priscilla's Song)</Button>
          <Button onClick={() => handleClick('frog')}>Crazy Frog - Axel F</Button>
          <Button onClick={() => handleClick('life')}>"It's My Life" - Bon Jovi </Button>
          <p>{tabs[content]}</p>
        </section>      
      </main>      
    </div>
  );
}

export default App;
