import styles from '../components/Header.module.css';
import logo from '../assets/HeaderLogo.png';
import Navbar from './Navbar';
import {Link} from 'react-router-dom';


function Header() {
   
    return (
        <div className={styles.wrapper}>
            <Link to='/'><img src={logo} alt='header logo' width={143} height={30} className={styles.logo}/></Link>
                <Navbar/>
            <div className={styles.buttonWrapper}>Contact Now</div>
        </div>
    )
}

export default Header;