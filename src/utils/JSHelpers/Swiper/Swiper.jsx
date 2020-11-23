import React, { useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

import './Swiper.scss';

export default (props) => {

    const [swiper, setSwiper] = useState(null);

    return (
        <Swiper
            spaceBetween={0}
            slidesPerView={1}
            onSwiper={(swiper) => setSwiper(swiper)}
        >
            {props.slides.map((i, index) => {
                return (
                    <SwiperSlide key={index}>
                        <img src={`${props.route}/slides/${i}.png`} className="ProjectView-slide" alt="Slides img" />
                    </SwiperSlide>
                )
            })}

            <div onClick={(e) => {
                e.preventDefault();

                swiper.slidePrev(500, false);

            }} className="Swiper-left">
                <svg viewBox="0 0 9 16" fill="none" >
                    <path d="M8 15L1 8L8 1" />
                </svg>
            </div>

            <div onClick={(e) => {
                e.preventDefault();

                swiper.slideNext(500, false);

            }} className="Swiper-right">
                <svg viewBox="0 0 9 16" fill="none">
                    <path d="M1 1L8 8L1 15" />
                </svg>
            </div>

        </Swiper>
    );
};