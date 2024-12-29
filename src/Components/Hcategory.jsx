import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import slider1 from '../assets/images/home/slide1.jpg'
import slider2 from '../assets/images/home/slide2.jpg'
import slider3 from '../assets/images/home/slide3.jpg'
import slider4 from '../assets/images/home/slide4.jpg'



const Hcategory = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={false}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={slider1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slider2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slider3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slider4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slider1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slider2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slider3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slider1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slider4} alt="" /></SwiperSlide>

        
      </Swiper>
        </div>
        
    )
};

export default Hcategory;