'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './testimonial.css'; // <-- Add this line to include custom styles

const testimonials = [
  {
    img: '/img/dumby_img.jpeg',
    name: 'Saul Goodman',
    role: 'CEO & Founder',
    quote: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus...'
  },
  {
    img: '/img/home2.jpeg',
    name: 'Sara Wilsson',
    role: 'Designer',
    quote: 'Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid...'
  },
  {
    img: '/img/home4.jpeg',
    name: 'Jena Karlis',
    role: 'Store Owner',
    quote: 'Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla...'
  },
  {
    img: '/img/home5.jpeg',
    name: 'Matt Brandon',
    role: 'Freelancer',
    quote: 'Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim...'
  },
  {
    img: '/img/home2.jpeg',
    name: 'John Larson',
    role: 'Entrepreneur',
    quote: 'Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor...'
  },
];

const Testimonial = () => {
  return (
    <section className="relative py-20 bg-gray-900 text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/testimonials-bg.jpg"
          alt="Testimonials Background"
          layout="fill"
          objectFit="cover"
          className="opacity-40"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <Swiper
          modules={[Autoplay, Pagination]}
          loop={true}
          speed={600}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: '.custom-pagination', // Custom container
          }}
          spaceBetween={30}
          slidesPerView={1}
          className="w-full"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="text-center max-w-xl mx-auto px-4">
                <div className="w-[96px] h-[96px] rounded-full overflow-hidden border-4 border-white mx-auto mb-4">
                  <Image
                    src={testimonial.img}
                    alt={testimonial.name}
                    width={96}
                    height={96}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold">{testimonial.name}</h3>
                <p className="text-sm text-gray-300 mb-3">{testimonial.role}</p>
                <div className="flex justify-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg mx-0.5">⭐️</span>
                  ))}
                </div>
                <p className="italic text-gray-200">
                  “{testimonial.quote}”
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Custom pagination container below the slides */}
        <div className="custom-pagination mt-6 flex justify-center" />
      </div>
    </section>
  );
};

export default Testimonial;
