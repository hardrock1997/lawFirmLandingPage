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
                <img src={bl} alt='aop' loading="lazy"/>
                <img src={pl} alt='aop' loading="lazy"/>
                <img src={rel} alt='aop'loading="lazy"/>
                <img src={bl2} alt='aop'loading="lazy"/>
                <img src={ld} alt='aop'loading="lazy"/>
                <img src={ea} alt='aop'loading="lazy"/>
           </section>
        </>
    )
}
export default PracticeAreas;