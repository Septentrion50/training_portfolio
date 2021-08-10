import { useContext, useEffect, useState } from "react";
import NightMode from '../NightMode';

const Header = () => {

  const nightmode = useContext(NightMode);
  const [isDay, setIsDay] = useState(false)

  useEffect(() => {
    nightmode.giveNight('header')
    nightmode.giveNight('App')
  }, [nightmode]);

  const switchNight = () => {
    setIsDay(!isDay);
    nightmode.switch();
  }

  return (
    <header className="header">
      {isDay ? (
        <button className="right" onClick={switchNight}>Night mode</button>
      ) : (
        <button className="right" onClick={switchNight}>Day mode</button>
      )}
      <h1>Erwan's Portfolio</h1>
      <a href="https://github.com/Septentrion50">My gitHub</a>
    </header>
  );
};

export default Header;
