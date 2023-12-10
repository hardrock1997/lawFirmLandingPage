import styles from '../components/Header.module.css';
import logo from '../assets/HeaderLogo.png';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <div className={styles.wrapper}>
            <img src={logo} alt='header logo' width={143} height={30} className={styles.logo}/>
            <div className={styles.routesWrapper}>
                <Link to='/home'><h3>Home</h3></Link> 
                <Link><h3>Attorneys</h3></Link>
                <Link to='/practiceareas'><h3>Practice Areas</h3></Link>
                <Link to='/aboutus'><h3>About Us</h3></Link>
            </div>
            <div className={styles.buttonWrapper}>Contact Now</div>
        </div>
    )
}

export default Header;