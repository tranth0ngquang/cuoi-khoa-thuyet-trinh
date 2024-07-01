"use client";

import React from 'react'

import { Navigation, Pagination, Mousewheel, Keyboard, Ally, Scrollbar, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './stypeCardDesign.css';


export default function CardDesignVideo() {
    return (
        <div>
            <a href='' className="">
                <div className='relative'>
                    <div className='absolute top-4 px-4 z-10 flex justify-between w-full'>
                        <p className='bg-white rounded-3xl px-4 py-2 mr-2 hover:text-cyan-500 hover:px-6 duration-700 text-sm'>Hè đến rồi, đi chơi thôi!</p>
                        <div>
                            <i className="fa-solid fa-heart bg-white/70 rounded-3xl p-2 text-cyan-500 border border-white hover:bg-cyan-500 hover:text-white duration-700"></i>
                        </div>
                    </div>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={0}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper rounded-3xl"
                    >
                        <SwiperSlide>
                            <div className='bg-center bg-cover w-full h-80 sm:h-64' style={{ backgroundImage: 'url(./img/video_img1.png)' }}>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='bg-center bg-cover w-full h-80 sm:h-64' style={{ backgroundImage: 'url(./img/video_img2.png)' }}>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='bg-center bg-cover w-full h-80 sm:h-64' style={{ backgroundImage: 'url(./img/video_img3.png)' }}>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </a>
        </div>
    )
}
