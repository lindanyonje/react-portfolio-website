import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

import {  Pagination } from 'swiper/modules';

// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name:'Travis G',
    review:' Lorem Ipsum is simply dummy text of the printing and typesetting industry'
       
  },

  {
    avatar: AVTR2,
    name:'Shaka Zulu',
    review:' Lorem Ipsum is simply dummy text of the printing and typesetting industry'
       
  },

  {
    avatar: AVTR3,
    name:'kwame nkurumah',
    review:' Lorem Ipsum is simply dummy text of the printing and typesetting industry'
       
  },

  {
    avatar: AVTR4,
    name:'Mekatilili WA menza',
    review:' Lorem Ipsum is simply dummy text of the printing and typesetting industry'
       
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination, ]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
      
        {
          data.map(({avatar, name, review}, index) => {
            return(
              <SwiperSlide key={index} className='testimonial'>
                <div className="client__avatar">
                  <img src={avatar} alt=""/>
                </div>

                <h5> {name}</h5>
                <small className='client__review'> {review} </small>
                
              </SwiperSlide>
       
            )
          })
        }
        
      </Swiper>

    </section>
  )
}

export default Testimonials