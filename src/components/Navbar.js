import styles from '../components/Navbar.module.css';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <div className={styles.routesWrapper}>
        <Link to='/home' className={styles.link}><h3>Home</h3></Link> 
        <Link to='/attorneys' className={styles.link}><h3>Attorneys</h3></Link>
        <Link to='/practiceareas' className={styles.link}><h3>Practice Areas</h3></Link>
        <Link to='/aboutus' className={styles.link}><h3>About Us</h3></Link>
    </div>
    )
}

export default Navbar;