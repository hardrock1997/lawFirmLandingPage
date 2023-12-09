import styles from '../components/MainBody.module.css';
import textImage from '../assets/TextImage.png';
import loremText from '../assets/LoremText.png';
import email from '../assets/email.png';
import bodyLogo from '../assets/Image.png';

function MainBody() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.leftWrapper}>
                <img src={textImage} alt='textimage' className={styles.textImage}/>
                <img src={loremText} alt='loremText' className={styles.loremText}/>
                <img src={email} alt='email' className={styles.email}/>
            </div>
            <img src={bodyLogo} alt='img' width={458} height={510} className={styles.bodyLogo}/>
            <div className={styles.bodyLogoBackground}></div>
        </div>
    )
}

export default MainBody;