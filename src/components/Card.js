import styles from '../components/Card.module.css';

function Card({data}) {
    const {name,about,image} = data;
    return (
        <div className={styles.wrapper}>
                <img src={image.cl1} alt='cl1' width={105} height={102}/>
                <h3>{name}</h3>
                <h3>{about}</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </p>
        </div>
       
    )
}

export default Card