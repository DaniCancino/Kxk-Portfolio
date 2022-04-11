import React, { useState } from 'react'
import picture from '../../Data/image.json'
import './Style.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Controller, Thumbs} from 'swiper';
import 'swiper/css/bundle';
import { FaTimes } from "react-icons/fa";

const ModalImage = () => {
  const [activeThumb, setActiveThumb] = useState()

  SwiperCore.use([Navigation, Pagination, Controller, Thumbs])

 
  return (
    <div className='ModalImage'>
      <div className='close-button'><FaTimes size={35} /></div>
      <Swiper
            loop={true}
            spaceBetween={10}
            navigation={true}
            pagination={true}
            modules={[Navigation, Thumbs, Pagination]}
            grabCursor={true}
            thumbs={{ swiper: activeThumb }}
            className='product-images-slider'
        >
            {
                picture.map((item, index) => (
                    <SwiperSlide key={index} >
                        <img src={item} alt="product images" />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    </div>
  )
}

export default ModalImage