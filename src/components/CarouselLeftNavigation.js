import {useSwiper} from 'swiper/react';
import styles from  '../components/CarouselLeftNavigation.module.css';
import { ReactComponent as LeftArrow } from '../assets/LeftArrow.svg';
import {useState,useEffect} from 'react';

function CarouselLeftNavigation() {
    const swiper = useSwiper()
    const [isBegining,setIsBegining] = useState(swiper.isBeginning)
    useEffect(()=>{
        swiper.on("slideChange",function(){
            setIsBegining(swiper.isBeginning)
        })
    },[swiper])
    return (
        <div className={styles.leftNavigation}>
            {!isBegining && <LeftArrow width={91} height={91} onClick={()=>swiper.slidePrev()}/>}
        </div>
    )
}

export default CarouselLeftNavigation