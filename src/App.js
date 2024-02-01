import './App.css';
import Header from './components/Header/Header';
import CardsSection from './components/CardsSection/CardsSection';
import TabsSection from './components/TabsSection/TabsSection';
import FocusSection from './components/FocusSection/FocusSection';


function App() {

  return (
    <>
      <Header/>
      <main>
        <FocusSection/>
        <CardsSection/>
        <TabsSection/>
      </main>      
    </>
  );
}

export default App;
