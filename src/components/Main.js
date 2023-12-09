// import styles from '../components/Main.module.css';
import Header from './Header';
import MainBody from '../components/MainBody.js'

function Main() {
    return (
        <>
        <header>
            <Header/>
        </header>
        <section>
            <MainBody/>
        </section>
        </>
    )
}

export default Main;