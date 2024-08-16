"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "./banner2.css"

import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import banner1 from "../../../../public/banner1.png"; 
import banner2 from "../../../../public/banner2.png"; 
import banner5 from "../../../../public/Header_PC_1500x300._SX1500_QL85_.jpg";
import banner6 from "../../../../public/mango_1500x300_v1._SX1500_QL85_.jpg";
import banner7 from "../../../../public/Meat_PC_1_2._SX1500_QL85_.jpg";
import banner8 from "../../../../public/SF_PC_3._SX1500_QL85_.jpg";

const Banner2 = () => {
  return (
    <>
      <section className="w-full flex justify-center items-center">
        <div className="w-[90%] banner-container">
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Image src={banner1} alt="Banner 1" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={banner2} alt="Banner 2" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={banner1} alt="Banner 3" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={banner2} alt="Banner 4" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={banner1} alt="Banner 5" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={banner2} alt="Banner 6" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={banner1} alt="Banner 7" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={banner2} alt="Banner 8" />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Banner2;

 