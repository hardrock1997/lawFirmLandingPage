import styles from '../components/Footer.module.css';
import logo from '../assets/HeaderLogo.png';
import socialmediaimages from '../assets/SocialMediaLogos.png';
import footerlastimage from '../assets/FooterLastimage.png';
import Navbar from './Navbar';

function Footer() {
    return (
        <div className={styles.mainWrapper}>
            <div className={styles.wrapper}>
                <img src={logo} alt='logo' width={143} height={30} className={styles.logo}/>
                <Navbar/>
                <img src={socialmediaimages} alt='socialmediaimages' height={30} width={187} className={styles.socialmediaimages}/>
            </div>
            <img src={footerlastimage} alt='footerlastimage' width={425} height={20} className={styles.footerlastimage}/>
        </div>
    )
}

export default  Footer