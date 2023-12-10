import styles from '../components/FAQ.module.css';
import FAQAccordion from './FAQAccordion';

function FAQ() {
    return (
        <div className={styles.mainWrapper}>
            <div className={styles.wrapper1}>
                <h1>FAQ</h1>
                <p>Amet minim mollit non deserunt ullamco est sit </p>
                <p>aliqua dolor do amet sint</p>
            </div>
            <div className={styles.wrapper2}>
                <h2>Do I need a personal injury report?</h2>
                <FAQAccordion/>
            </div>
        </div>
    )
}
export default FAQ;