import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Buffer } from "buffer"
import { FreeMode, Navigation, Thumbs } from "swiper";

const gigImages = [
  "/images/listings/service-details-1.jpg",
  "/images/listings/service-details-1.jpg",
  "/images/listings/service-details-1.jpg",
];

export default function ServiceDetailSlider(props) {
  const { data , imgs } = props
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [showSwiper, setShowSwiper] = useState(false);
  const [images, setImages] = useState([])

  useEffect(() => {
    setShowSwiper(true);
    
    let imageServicesToString = Buffer.from(imgs)
    setImages(JSON.parse(imageServicesToString))

  }, []);

  return (
    <>
      <div className="scrollbalance-inner">
        <div className="row">
          <div className="col-sm-6 col-md-4">
            <div className="iconbox-style1 contact-style d-flex align-items-start mb30">
              <div className="icon flex-shrink-0">
                <span className="flaticon-calendar" />
              </div>
              <div className="details">
                <h5 className="title">Tiempo de Entrega</h5>
                <p className="mb-0 text">{data.delivertime}</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="iconbox-style1 contact-style d-flex align-items-start mb30">
              <div className="icon flex-shrink-0">
                <span className="flaticon-goal" />
              </div>
              <div className="details">
                <h5 className="title">Tiempo de Respuesta</h5>
                <p className="mb-0 text">{data.responsetime}</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="iconbox-style1 contact-style d-flex align-items-start mb30">
              <div className="icon flex-shrink-0">
                <span className="flaticon-tracking" />
              </div>
              <div className="details">
                <h5 className="title">Ubicación</h5>
                <p className="mb-0 text">{`${data.region},${data.city},${data.commune}`}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="service-single-sldier vam_nav_style slider-1-grid owl-carousel owl-theme mb60 owl-loaded owl-drag">
          <div className="thumb p50 p30-sm">
            {showSwiper && (
              <Swiper
                loop={true}
                spaceBetween={10}
                navigation={{
                  prevEl: ".prev-btn",
                  nextEl: ".next-btn",
                }}
                thumbs={{
                  swiper:
                    thumbsSwiper && !thumbsSwiper.destroyed
                      ? thumbsSwiper
                      : null,
                }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
              >
                {images.map((item, i) => (
                  <SwiperSlide key={i}>
                    <img
                      height={554}
                      width={929}
                      src={`https://www.services.irodum.com/`+item.originalname}
                      alt="gallery"
                      className="w-100 h-auto"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
          <button type="button" className="prev-btn">
            <i className="far fa-arrow-left-long" />
          </button>
          <button type="button" className="next-btn">
            <i className="far fa-arrow-right-long" />
          </button>
          {showSwiper && (
            <Swiper
              onSwiper={setThumbsSwiper}
              loop={true}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper ui-service-gig-slder-bottom"
            >
              {images.map((item, i) => (
                <SwiperSlide key={i}>
                  <img
                    height={112}
                    width={150}
                    src={`https://www.services.irodum.com/`+item.originalname}
                    alt="image"
                    className="w-100"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </>
  );
}
