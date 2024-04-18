

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, EffectCube,Pagination, Scrollbar, A11y, Keyboard, Mousewheel, Autoplay, Zoom, EffectFlip, EffectFade } from 'swiper/modules';



import 'swiper/css';
import 'swiper/css/bundle'
import 'swiper/css/effect-cube';

// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

import styles from './demo.module.css'
import 'swiper/css/effect-fade';





export default function Demo1() {


    const slideImages:string[] = [
        'https://media.istockphoto.com/id/1453486451/photo/abstract-holographic-iridescent-wallpaper-4k.webp?b=1&s=170667a&w=0&k=20&c=omnWOpPrM4kFcjgzeDHlHzG0tMoRhmdKSGK381Wsoyk=',
        'https://media.istockphoto.com/id/1351123976/photo/glitch-of-venus-head-on-light-background-3d-illustration.webp?b=1&s=170667a&w=0&k=20&c=UIcm4841Y7M0FMoa9GhhHdqFpCyiZs0m230WXGf9pkM=',
        'https://media.istockphoto.com/id/1458538265/photo/abstract-painting-in-gray-black-and-orange.webp?b=1&s=170667a&w=0&k=20&c=WplDvxvESK6_UtjOReIWvtQg6WOuDb1CMDZx4S2UM1A=',
        'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1482160549825-59d1b23cb208?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTR8fHxlbnwwfHx8fHw%3D',
        'https://images.unsplash.com/photo-1501472312651-726afe119ff1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjB8fHxlbnwwfHx8fHw%3D',
        'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fHw%3D',
        'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8fA%3D%3D',
      ];

    return (
        <div className={styles.main}>
            <Swiper

                grabCursor={true}


                modules={[Navigation, Zoom,EffectFade, EffectFlip,Keyboard, Pagination, Scrollbar, A11y, Mousewheel, Autoplay]}
                spaceBetween={50}
                slidesPerView={2}
                // pagination={{ clickable: true }}
                // pagination={{
                //     dynamicBullets: true,
                //   }}

                // effect="fade"
                keyboard={{
                    enabled: true,
                }}
                pagination={{
                    dynamicBullets: true
                }}

                autoplay={{
                    delay: 2500,

                    disableOnInteraction: false,
                }}

                zoom={true}

                mousewheel={true}
                navigation

                onSlideChange={(data) => console.log(data)}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {slideImages.map((image, index) => (
        <SwiperSlide
          key={index}
          className={styles.slide}
          style={{ backgroundImage: `url(${image})` }} // Set background image here
        />
      ))}


            </Swiper>
        </div>
    )
}