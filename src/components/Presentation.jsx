import { useContext, useEffect } from 'react';
import NightMode from '../NightMode';

const Presentation = () => {
    const nightmode = useContext(NightMode);

    useEffect(() => {
        nightmode.giveNight('pres');
    }, [nightmode]);

    return (
        <section className="pres">
            <h2>My name is Erwan, welcome to my portfolio!</h2>
            <p>For several months now, I've been learning web development with The Hacking Project. I have learned how to use Ruby, Rails, JavaScript and React.</p>
        </section>
    )

};

export default Presentation;