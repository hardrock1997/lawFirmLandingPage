import styles from '../components/PracticeAreas.module.css';
import bl from '../assets/BL.png';
import pl from '../assets/PL.png';
import rel from '../assets/REL.png';
import bl2 from '../assets/BL2.png';
import ld from '../assets/LD.png';
import ea from '../assets/EA.png';
import aop from '../assets/AOP.png';

function PracticeAreas() {
    return (
        <>
           <header className={styles.header}>
                <img src={aop} alt='aop'/>
           </header>
           <section className={styles.wrapper}>
                <div className={styles.imageWrapper}>
                    <img src={bl} alt='aop' loading="lazy"/>
                    <h2 className={styles.bl}>BUSINESS LAW</h2>
                </div>
                <div className={styles.imageWrapper}>
                    <img src={pl} alt='aop' loading="lazy"/>
                    <h2 className={styles.pl}>Partnership LAW</h2>
                </div>
                <div className={styles.imageWrapper}>
                    <img src={rel} alt='aop'loading="lazy"/>
                    <h2 className={styles.rel}>REAL ESTATE LAW</h2>
                </div>
                <div className={styles.imageWrapper}>
                    <img src={bl2} alt='aop'loading="lazy"/>
                    <h2 className={styles.bl2}>BUSINESS LAW</h2>
                </div>
                <div className={styles.imageWrapper}>
                    <img src={ld} alt='aop'loading="lazy"/>
                    <h2 className={styles.ld}>LANLORD DISPUTES</h2>
                </div>
                <div className={styles.imageWrapper}>
                    <img src={ea} alt='aop'loading="lazy"/>
                    <h2 className={styles.ea}>ELDER ABUSE</h2>
                </div>
           </section>
        </>
    )
}
export default PracticeAreas;