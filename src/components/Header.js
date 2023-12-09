import styles from '../components/Header.module.css';
import logo from '../assets/HeaderLogo.png';
function Header() {
    return (
        <div className={styles.wrapper}>
            <img src={logo} alt='header logo' width={143} height={30} className={styles.logo}/>
            <div className={styles.routesWrapper}>
                <h3>Home</h3>
                <h3>Attorneys</h3>
                <h3>Practice Areas</h3>
                <h3>About Us</h3>
            </div>
            <div className={styles.buttonWrapper}>Contact Now</div>
        </div>
    )
}

export default Header;