// import styles from '../components/Main.module.css';
import Header from './Header';
import MainBody from '../components/MainBody.js';
import Home from './Home.js';
import PracticeAreas from './PracticeAreas.js';
import AboutUs from './AboutUs.js';

function Main() {
    return (
        <>
        <header>
            <Header/>/
        </header>
        <section>
            <MainBody/>
            <Home/>
            <PracticeAreas/>
            <AboutUs/>
        </section>
        </>
    )
}

export default Main;