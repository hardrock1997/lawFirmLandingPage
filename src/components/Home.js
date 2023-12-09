import homeHeader from '../assets/HomeHeader.png';
import styles from '../components/Home.module.css';
import line from '../assets/Line.png';
import whychooseus from '../assets/WhyChooseus.png';
import homecard1 from '../assets/HomeCard1.png';
import homecard2 from '../assets/HomeCard2.png';
import homecard3 from '../assets/HomeCard3.png';

function Home() {
    return (
        <>
        <header className={styles.wrapper}>
            <img src={homeHeader} alt='homeheader'/>
            <img src={line} alt='line' className={styles.line}/>
        </header>
        <section className={styles.whychooseus}>
            <img src={whychooseus} alt='whychooseus'/>
        </section>
        <section className={styles.homecardsWrapper}>
            <img src={homecard1} alt='homecard1' width={359} height={377} loading="lazy"/>
            <img src={homecard2} alt='homecard2' width={359} height={377} loading="lazy"/>
            <img src={homecard3} alt='homecard3' width={359} height={377} loading="lazy"/>
        </section>
        </>
    )
}

export default Home;