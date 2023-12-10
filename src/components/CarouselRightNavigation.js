import {useSwiper} from 'swiper/react';
import styles from  '../components/CarouselRightNavigation.module.css';
import { ReactComponent as RightArrow } from '../assets/RightArrow.svg';
import {useState,useEffect} from 'react';

function CarouselRightNavigation() {
    const swiper = useSwiper()
    const [isEnd,setIsEnd] = useState(swiper.isEnd)
    useEffect(()=>{
        swiper.on("slideChange",function(){
            setIsEnd(swiper.isEnd)
        })
    },[swiper])
    return (
        <div className={styles.rightNavigation}>
            {!isEnd && <RightArrow width={91} height={91} onClick={()=>swiper.slideNext()}/>}
        </div>
    )
}

export default CarouselRightNavigation