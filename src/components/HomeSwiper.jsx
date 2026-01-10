import {Swiper, SwiperSlide} from "swiper/react"
import {Autoplay,Pagination} from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import img1 from '../assets/grains.jpg';
import img2 from '../assets/fruits.jpg'
import img3 from '../assets/vegetables.jpg'
import img4 from '../assets/grain.jpg'
import img5 from '../assets/fruit.jpg'
import img6 from '../assets/vegetable.jpg'


function HomeSwiper(){
    return(
        <Swiper 
        modules={[Autoplay,Pagination]} 
        autoplay={{delay:2000, disableOnInteraction:false}} 
        loop = {true}
        pagination={{clickable:true}}
        breakpoints={{
            0:{slidesPerView:1},
            768:{slidesPerView:3}
        }}
        spaceBetween={20}
        className="mb-5">
            <SwiperSlide>
                <img  src = {img2} className="w-full"/>
                <h3 className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold bg-black/20">Get Fresh Fruits Every Day</h3>
            </SwiperSlide>
            <SwiperSlide>
                <img  src = {img1} className="w-full"/>
                <h3 className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold bg-black/20">Affordable Grains & Cereals</h3>
            </SwiperSlide>
            <SwiperSlide>
                <img  src = {img3} className="w-full"/>
                <h3 className="absolute inset-0 text-white font-bold flex items-center justify-center text-2xl bg-black/20">Organic Vegetables From Local Farmers</h3>
            </SwiperSlide>
            <SwiperSlide>
                <img  src = {img4} className="w-full"/>
                <h3 className="absolute inset-0 text-white font-bold flex items-center justify-center text-2xl">Eat Healthy, Live Happy</h3>
            </SwiperSlide><SwiperSlide>
                <img  src = {img5} className="w-full"/>
                <h3 className="absolute inset-0 text-white font-bold flex items-center justify-center text-2xl bg-black/20">A Rainbow of Freshness</h3>
            </SwiperSlide><SwiperSlide>
                <img  src = {img6} className="w-full"/>
                <h3 className="absolute inset-0 text-white font-bold flex items-center justify-center text-2xl bg-black/20">Explore Fresh Agricultural Products</h3>
            </SwiperSlide>
        </Swiper>
    )
}
export default HomeSwiper;