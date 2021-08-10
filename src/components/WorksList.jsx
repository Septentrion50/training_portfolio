import { useContext, useEffect} from 'react';
import NightMode from '../NightMode';

const WorksList = () => {
    const nightmode = useContext(NightMode);
    
    useEffect(() => {
        nightmode.giveNight('works');
    }, [nightmode]);

    return (
        <section className="works">
            <h3>You can read here a short list of my projects. I've made some of them during my formation, and others are more personal.</h3>
            <ul className="project">
                <li>
                    <img src="https://bashooka.com/wp-content/uploads/2018/06/surf-website.jpg" alt="project 1" />
                    <p>This project is just a ui, but it was fun to create.</p>
                </li>
                <li>
                    <img src="https://i.ytimg.com/vi/RFdtXi4Jr7o/maxresdefault.jpg" alt="project 2" />
                    <p>A designer website</p>
                </li>
                <li>
                    <img src="https://images.creativemarket.com/0.1.0/ps/216224/1500/1000/m1/fpnw/wm0/ui_flatwebkit-o-.png?1414085441&s=dc0beec4e847d37d4d576467a1c529c8" alt="project 3" />
                    <p>This is a design system</p>
                </li>
            </ul>
        </section>
    )
};

export default WorksList;