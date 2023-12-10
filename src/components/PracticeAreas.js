import styles from '../components/PracticeAreas.module.css';
import bl from '../assets/BL.png';
import pl from '../assets/PL.png';
import rel from '../assets/REL.png';
import bl2 from '../assets/BL2.png';
import ld from '../assets/LD.png';
import ea from '../assets/EA.png';
import aop from '../assets/AOP.png';
import Carousel from '../components/Carousel.js';
import Card from './Card.js';
import getClientsData from '../components/utils/getClientsData.js';
import CarouselRightNavigation from './CarouselRightNavigation.js';
import CarouselLeftNavigation from './CarouselLeftNavigation.js';

function PracticeAreas() {
    const clients = getClientsData();
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
           <footer className={styles.mainWrapper}>
                <div className={styles.textWrapper}>
                <h1>What says our</h1>
                <h1>happy Clients</h1>
                </div>
                <div>
                    <Carousel data={clients} component={(clients)=><Card data={clients}/>} component2={()=><CarouselLeftNavigation/>} component3={()=><CarouselRightNavigation/>}/>
                </div>
           </footer>
        </>
    )
}
export default PracticeAreas;