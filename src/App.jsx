import { useState } from 'react';
import Contact from 'components/Contact';
import Header from 'components/Header';
import NightMode from './NightMode';
import Presentation from 'components/Presentation';
import WorksList from 'components/WorksList';

function App() {

  const [isNight, setIsNight] = useState(false);

  return (
    <NightMode.Provider value= {{
        isNight,
        switch: () => setIsNight(!isNight),
        giveNight: (obj) => document.getElementsByClassName(obj)[0].classList.toggle('night')
      }}>
      <div className="App">
        <Header />      
        <Presentation />
        <WorksList />
        <Contact /> 
      </div>
    </NightMode.Provider>
  );
}

export default App;
