import SectionTitle from "./SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useState } from "react";

const Testimonial = () => {
  const [reviews, setreviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allreview")
      .then((res) => res.json())
      .then((data) => setreviews(data));
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-100 to-white py-20">
      <SectionTitle
        subHeading={"What Our Clients Say"}
        heading={"TESTIMONIALS"}
      ></SectionTitle>

      <div className="w-11/12 md:w-10/12 lg:w-8/12 mx-auto mt-8">
        <Swiper
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {reviews.map((revi, index) => (
            <SwiperSlide key={index} className="p-8">
              <div className="bg-white rounded-xl shadow-2xl p-8 hover:scale-105 transform transition-all duration-500 ease-in-out">
                <p className="text-gray-600 text-lg italic mb-6">
                  "{revi.details}"
                </p>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  - {revi.name}
                </h4>
                <div className="flex items-center justify-center">
                 
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
