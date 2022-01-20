import React, { Component } from 'react';
import images from './Data';
import '../../styles.css';
import * as S from './GalleryStyles';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import SwiperCore, {
  Pagination,Navigation
} from 'swiper';

SwiperCore.use([Pagination,Navigation]);


export default class Gallery extends Component {
  render() {
    return (
      <S.SwipeDiv>
        <Swiper slidesPerView={1} loop={true} pagination={{
          "clickable": true
        }} navigation={true} className="mySwiper">
          <SwiperSlide><img className="image" src={images[0]} /></SwiperSlide>
          <SwiperSlide><img className="image" src={images[1]} /></SwiperSlide>
          <SwiperSlide><img className="image" src={images[2]} /></SwiperSlide>
          <SwiperSlide><img className="image" src={images[3]} /></SwiperSlide>
          <SwiperSlide><img className="image" src={images[4]} /></SwiperSlide>
          <SwiperSlide><img className="image" src={images[5]} /></SwiperSlide>
          <SwiperSlide><img className="image" src={images[6]} /></SwiperSlide>
          <SwiperSlide><img className="image" src={images[7]} /></SwiperSlide>
        </Swiper>
      </S.SwipeDiv>
    );
  }
}