import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BrowserCategoryCard from "./BrowserCategoryCard";
import { browserCategory } from "../data/project"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function BrowserCategory() {



  const [showSwiper, setShowSwiper] = useState(false);
  useEffect(() => {
    setShowSwiper(true);
  }, []);

  return (
    <>
      <section className={`pb40-md pb90`}>
        <div className="container">
          <div
            className="row align-items-center wow fadeInUp"
            data-wow-delay="300ms"
          >
            <div className="col-lg-9">
              <div className="main-title2">
                <h2 className="title">Buscar talento por categoría</h2>
                <p className="paragraph">
                Obtenga algunas inspiraciones de más de 1800+ habilidades
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="text-start text-lg-end mb-4 mb-lg-2">
                <Link className="ud-btn2" to="/servicios">
                  Todas las categorías
                  <i className="fal fa-arrow-right-long" />
                </Link>
              </div>
            </div>
          </div>
          <div className="row d-none d-lg-flex wow fadeInUp">
            {browserCategory.slice(0, 8).map((item,i) => (
              <div key={ i } className="col-sm-6 col-lg-4 col-xl-3">
                <BrowserCategoryCard data={item} />
              </div>
            ))}
          </div>
          <div className="row d-block d-lg-none">
            <div className="col-lg-12">
              <div className="ui-browser wow fadeInUp">
                {showSwiper && (
                  <Swiper
                    slidesPerView={1}
                    navigation={{
                      prevEl: ".btn__prev__001",
                      nextEl: ".btn__next__001",
                    }}
                    modules={[Navigation, Pagination]}
                    className="mySwiper"
                    loop={true}
                    pagination={{
                      el: ".swiper__pagination__001",
                      clickable: true,
                    }}
                    breakpoints={{
                      0: {
                        slidesPerView: 1,
                      },
                      540: {
                        slidesPerView: 2,
                      },
                    }}
                  >
                    {browserCategory.map((item, index) => (
                      <SwiperSlide key={index}>
                        <BrowserCategoryCard data={item} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                )}
              </div>
              <div className="row">
                <div className="col-auto">
                  <button className="swiper__btn btn__prev__001">
                    <i className="far fa-arrow-left-long" />
                  </button>
                </div>
                <div className="col-auto">
                  <div className="swiper__pagination swiper__pagination__001"></div>
                </div>
                <div className="col-auto">
                  <button className="swiper__btn btn__next__001">
                    <i className="far fa-arrow-right-long" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
