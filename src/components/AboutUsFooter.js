import styles from '../components/AboutUsFooter.module.css';
import aboutusfooter from '../assets/AboutusFooter.png'

function AboutUsFooter() {
    return (
        <div className={styles.mainWrapper}>
            <div className={styles.wrapper}>
               <h1>Subscribe Our Newsletter</h1>
               <img src={aboutusfooter} alt='aboutusfooter' loading='lazy'/>
            </div>
        </div>
    )
}

export default AboutUsFooter;