import './App.css';
import Header from './components/Header';
import { cards } from './data';
import CardToInspire from './components/CardsToInspire'; 


function App() {
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
      </main>      
    </div>
  );
}

export default App;
