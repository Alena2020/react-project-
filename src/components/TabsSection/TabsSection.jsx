import './TabsSection.css';
import { tabs } from "../../data";
import Button from "../Button/Button";
import { useState } from 'react';

function TabsSection() {
  const [ contentType, setContentType] = useState(null);
  function handleClick(type) {
    setContentType(type);
  }

  // let tabContent = null;

  // if (contentType) {
  //   tabContent = <p className='tabsContent '>{tabs[contentType]}</p>;
  // } else {
  //   tabContent =  <p>Click Button</p>;
  // }

  return (
    
        <section className='tabsSection'>
          <h3>Tabs for kalimba</h3>
          <div className='buttons'>
            <Button 
              isActive={contentType === 'witcher'}
              onClick={() => handleClick('witcher')}
            >
              Toss a Coin to your Witcher
            </Button>
            <Button 
              isActive={contentType === 'frozen'}
              onClick={() => handleClick('frozen')}
            >
              Frozen - Do You Want to Build a Snowman?
            </Button>
            <Button
              isActive={contentType === 'Priscilla'}
              onClick={() => handleClick('Priscilla')}
            >
              The Witcher 3: Wild Hunt – The Wolven Storm (Priscilla's Song)
            </Button>
            <Button 
              isActive={contentType === 'frog'}
              onClick={() => handleClick('frog')}
            >
              Crazy Frog - Axel F
            </Button>
            <Button 
              isActive={contentType === 'life'}
              onClick={() => handleClick('life')}
            >
                "It's My Life" - Bon Jovi 
            </Button>
            <Button 
              isActive={contentType === 'wings'}
              onClick={() => handleClick('wings')}
            >
              Fly Away On The Wings Of The Wind
            </Button>
          </div>
          

          {/* {contentType ? (
            <p>{tabs[contentType]}</p>
            ) : (
            <p>Click Button</p>
          )} */}

          {!contentType && <p>Click Button</p>}
          {contentType && <p className='tabsContent '>{tabs[contentType]}</p>}

          {/* {tabContent} */}
          
        </section>      

  );
}

export default TabsSection;