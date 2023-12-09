import styles from '../components/AboutUs.module.css';
import ourteam from '../assets/Our Team.png';
import mem1 from '../assets/Ellipse 1.png';
import mem2 from '../assets/Ellipse 2.png';
import mem3 from '../assets/Ellipse 3.png';
import mem4 from '../assets/Ellipse 4.png';
import mem5 from '../assets/Ellipse 5.png';
import mem6 from '../assets/Ellipse 6.png';

function AboutUs() {
    return (
        <>
            <header className={styles.headerWrapper}>
                <img src={ourteam} alt='ourteam'/>
            </header>
            <section className={styles.teamWrapper1}>
                <div className={styles.mem}>
                    <img src={mem1} alt='mem1'/>
                    <div className={styles.textWrapper}>
                        <p>Daniel Def</p>
                        <p>301 Cases</p>
                    </div>
                </div>
                <div className={styles.mem1}>
                    <div className={styles.mem} >
                        <img src={mem2} alt='mem1'/>
                        <div className={styles.textWrapper1}>
                        <p>Sanfole</p>
                        <p>850 Cases</p>
                    </div>
                    </div>
                </div>
                <div className={styles.mem}>
                    <img src={mem3} alt='mem1'/>
                    <div className={styles.textWrapper}>
                        <p>Cesforila</p>
                        <p>470 Cases</p>
                    </div>
                </div>
                </section>
                <section className={styles.teamWrapper2}>
                <div className={styles.mem}>
                    <img src={mem4} alt='mem1'/>
                    <div className={styles.textWrapper}>
                        <p>Colleen</p>
                        <p>180 Cases</p>
                    </div>
                </div>
                <div className={styles.mem}>
                    <img src={mem5} alt='mem1'/>
                    <div className={styles.textWrapper}>
                        <p>Haldone</p>
                        <p>212 Cases</p>
                    </div>
                </div>
                <div className={styles.mem}>
                    <img src={mem6} alt='mem1'/>
                    <div className={styles.textWrapper}>
                        <p>Nik Jeo</p>
                        <p>350 Cases</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutUs;