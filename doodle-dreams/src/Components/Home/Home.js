import React, { Component } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore, { Navigation } from 'swiper';
import dog1 from '../../Img/IMG_1.JPG';
import * as S from './HomeStyles';
import '../../styles.css';

SwiperCore.use([Navigation]);

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <S.IMG></S.IMG>
        <S.NAV>
          <S.DIV>
            <a href=''>Home</a>
            <a href=''>Contact Us</a>
            <a href=''>About Us</a>
            <a href=''>Before You Visit</a>
            <a href=''>FAQ</a>
            <a href=''>Parents</a>
            <a href=''>Available Puppies</a>
          </S.DIV>
          <S.DIV>
            <a href=''>Training/Grooming</a>
            <a href=''>Health Guarantee</a>
            <a href=''>Early Neuro Stimulation</a>
            <a href=''>Deposit/Delivery</a>
            <a href=''>Supply List/Product Links</a>
          </S.DIV>
        </S.NAV>
        <S.SwipeDiv>
          <Swiper navigation={true} className="mySwiper">
            <SwiperSlide><img src={dog1} /></SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
          </Swiper>
        </S.SwipeDiv>
      </div>
    )
  }
}