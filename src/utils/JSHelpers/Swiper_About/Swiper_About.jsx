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
                        <img src={`${props.route}/${i}.png`} className="About-slide" alt="Slides img" />
                    </SwiperSlide>
                )
            })}

        </Swiper>
    );
};