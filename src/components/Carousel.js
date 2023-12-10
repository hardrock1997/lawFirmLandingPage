import styles from '../components/Carousel.module.css';
import {Swiper,SwiperSlide,useSwiper} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import { useEffect } from "react";
import CarouselLeftNavigation from "./CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation";
import 'swiper/css';

function Controls({data}) {
    const swiper = useSwiper()

    useEffect(()=>{
        swiper.slideTo(0);
    },[data,swiper])
}

function Carousel({data,component}) {
    return (
       <div className={styles.wrapper}>
        <Swiper 
        style={{padding:"0px 20px"}} 
        initialSlide={0} modules={[Navigation]} 
        slidesPerView={"3"} 
        spaceBetween={40} 
        allowTouchMove
        >
            <Controls data={data} component={component}/>
            <CarouselLeftNavigation/>
            <CarouselRightNavigation/>
            {
                 data.map(item=>{
                    return (
                       <SwiperSlide key={item.id}>{component(item)}</SwiperSlide> 
                    )
                })
            }
        </Swiper>

       </div>
    )
}

export default Carousel