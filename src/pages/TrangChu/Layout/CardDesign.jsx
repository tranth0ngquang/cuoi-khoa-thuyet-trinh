"use client";

import React from 'react'

import { Navigation, Pagination, Mousewheel, Keyboard, Ally, Scrollbar, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './stypeCardDesign.css';

export default function CardDesign() {
    const imgCardHome = [
        {
            stt: 1,
            name: "Musée d’Orsay, Paris",
            Room: "2 khách - 1 phòng ngủ",
            Price: "$30",
            Star: "5.0",
            Evaluate: "Top 1% of homes",
            src1: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE2MjI1MjI0NDQ0MzYzMjM4Mg%3D%3D/original/ae3426d1-fba4-44d4-bed2-690426f25f7a.jpeg?im_w=1440&im_q=highq",
            src2: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE2MjI1MjI0NDQ0MzYzMjM4Mg%3D%3D/original/5f886d5e-516a-4606-9dcc-6482c795f843.jpeg?im_w=1200",
            src3: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE2MjI1MjI0NDQ0MzYzMjM4Mg%3D%3D/original/c8016c6d-4d2a-4f59-9399-133319e0b423.jpeg?im_w=1200",
            src4: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE2MjI1MjI0NDQ0MzYzMjM4Mg%3D%3D/original/697ab154-2135-46c8-8b2e-09e2d7097e06.jpeg?im_w=1200",
            src5: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE2MjI1MjI0NDQ0MzYzMjM4Mg%3D%3D/original/04966b4d-fe31-4bc0-b1ca-2df033d1527a.jpeg?im_w=1200",
        },

        {
            stt: 2,
            name: "The Musée d’Orsay",
            Room: "2 khách - 1 phòng ngủ",
            Price: "$20",
            Star: "4.5",
            Evaluate: "Guest favorite",
            src1: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNTQ0NTEyMzEwMTI3NDg1MQ%3D%3D/original/bd73f0f8-9057-4bbc-ad70-1db13eb5c03f.png?im_w=1440&im_q=highq",
            src2: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNTQ0NTEyMzEwMTI3NDg1MQ%3D%3D/original/9fea4ea4-7c9c-428a-9479-eb24d1ee90c0.jpeg?im_w=1200",
            src3: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNTQ0NTEyMzEwMTI3NDg1MQ%3D%3D/original/44b9a499-bb02-4048-8748-23104627d664.jpeg?im_w=720",
            src4: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNTQ0NTEyMzEwMTI3NDg1MQ%3D%3D/original/1b343cc6-8919-48e2-8c4f-1e1bb551773f.jpeg?im_w=1200",
            src5: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNTQ0NTEyMzEwMTI3NDg1MQ%3D%3D/original/51b7963e-f4bb-4119-b084-cbda005ad601.jpeg?im_w=1200",
        },

        {
            stt: 3,
            name: "Medieval Castle",
            Room: "10 khách - 5 phòng ngủ",
            Price: "Sold out",
            Star: "4.7",
            Evaluate: "Top 5% of homes",
            src1: "https://a0.muscache.com/im/pictures/miso/Hosting-2328455/original/629a3bf9-18bd-4469-af3f-f30e51183e67.jpeg?im_w=1200",
            src2: "https://a0.muscache.com/im/pictures/miso/Hosting-2328455/original/d9f84fca-cdd4-49cc-b25c-0cda22f20a59.jpeg?im_w=1200",
            src3: "https://a0.muscache.com/im/pictures/miso/Hosting-2328455/original/2021b758-25b4-4d55-9f99-c75690293f0c.jpeg?im_w=720",
            src4: "https://a0.muscache.com/im/pictures/miso/Hosting-2328455/original/188263e3-b056-474d-a818-bdf6a16220e6.jpeg?im_w=1200",
            src5: "https://a0.muscache.com/im/pictures/5d0b8055-a9ae-40e1-b89f-32718aeb3cc4.jpg?im_w=1200",
        },

        {
            stt: 4,
            name: "Entire condo in Valt, Italy",
            Room: "4 khách - 2 phòng ngủ",
            Price: "$60",
            Star: "4.0",
            Evaluate: "Guest favorite",
            src1: "https://a0.muscache.com/im/pictures/5661c8fa-d0fe-463a-9ffe-6b104060fab0.jpg?im_w=1200",
            src2: "https://a0.muscache.com/im/pictures/miso/Hosting-53935351/original/58733f36-7426-4780-b2d8-d437de3bff4f.jpeg?im_w=1200",
            src3: "https://a0.muscache.com/im/pictures/miso/Hosting-53935351/original/8d0d6f8a-a368-4c68-a278-ab4d4fb62c0b.jpeg?im_w=720",
            src4: "https://a0.muscache.com/im/pictures/miso/Hosting-53935351/original/3ace6347-89f1-43b7-b989-d83d08ac56e3.jpeg?im_w=1200",
            src5: "https://a0.muscache.com/im/pictures/bc552500-f0d6-4979-9e62-0130f7143c7f.jpg?im_w=1200",
        },

        {
            stt: 5,
            name: "Cave House by Cycladica",
            Room: "6 khách - 3 phòng ngủ",
            Price: "Sold out",
            Star: "4.9",
            Evaluate: "Top 2% of homes",
            src1: "https://a0.muscache.com/im/pictures/51f4d564-3273-4f25-843d-54e17f6a8783.jpg?im_w=1200",
            src2: "https://a0.muscache.com/im/pictures/3797366/1a3da3b9_original.jpg?im_w=1200",
            src3: "https://a0.muscache.com/im/pictures/89bfd8d4-b0e5-4110-b935-70c1e551991b.jpg?im_w=1200",
            src4: "https://a0.muscache.com/im/pictures/2918331/88638148_original.jpg?im_w=1200",
            src5: "https://a0.muscache.com/im/pictures/d405649d-b385-43cf-9af1-360d5902c45d.jpg?im_w=720",
        },
    ];

    let renderCardHome = () => {
        let objMang = imgCardHome.map((item) => {
            return (
                <div className="rounded-3xl bg-white hover:bg-cyan-50 border border-transparent hover:border-cyan-200 shadow-md hover:shadow-xl duration-500" key={item.stt}>
                    <a href='' className="">
                        <div className='relative'>
                            <div className='absolute top-4 px-4 z-10 flex justify-between w-full'>
                                <p className='bg-white rounded-3xl px-4 py-2 mr-2 hover:text-cyan-500 hover:px-6 duration-700 text-sm'>{item.Evaluate}</p>
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
                                <SwiperSlide><img src={item.src1} alt="" /></SwiperSlide>
                                <SwiperSlide><img src={item.src2} alt="" /></SwiperSlide>
                                <SwiperSlide><img src={item.src3} alt="" /></SwiperSlide>
                                <SwiperSlide><img src={item.src4} alt="" /></SwiperSlide>
                                <SwiperSlide><img src={item.src5} alt="" /></SwiperSlide>
                            </Swiper>
                        </div>

                        <div className='p-4 text-cyan-700 hover:text-cyan-500 duration-500'>
                            <div className='flex justify-between'>
                                <p className='font-bold'>{item.name}</p>
                                <p><i className="fa-solid fa-star pr-1 "></i>{item.Star}</p>
                            </div>
                            <div className='text-black'>
                                <p>{item.Room}</p>
                                <p className='font-bold'>{item.Price}</p>
                            </div>
                        </div>
                    </a>
                </div>
            );
        });
        return objMang;
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mb-8">
            {renderCardHome()}
        </div>
    )
}
