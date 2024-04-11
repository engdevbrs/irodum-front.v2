import partner1 from "../images/partners/1.png"
import partner2 from "../images/partners/2.png"
import partner3 from "../images/partners/3.png"
import partner4 from "../images/partners/4.png"
import partner5 from "../images/partners/5.png"
import partner6 from "../images/partners/6.png"
import partner7 from "../images/partners/7.png"
import partner8 from "../images/partners/8.png"



export default function OurPartner() {

  return (
    <>
      <section className={`our-partners`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 wow fadeInUp">
              <div className="main-title text-center">
                <h6>Con la confianza de los mejores del mundo</h6>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6 col-md-4 col-xl-2">
              <div className="partner_item text-center mb30-lg">
                <img
                  height={26}
                  width={84}
                  className="wa m-auto w-100 h-100 object-fit-contain"
                  src={partner1}
                  alt={"partner1"}
                />
              </div>
            </div>
            <div className="col-6 col-md-4 col-xl-2">
              <div className="partner_item text-center mb30-lg">
                <img
                  height={26}
                  width={84}
                  className="wa m-auto w-100 h-100 object-fit-contain"
                  src={partner2}
                  alt={"partner2"}
                />
              </div>
            </div>
            <div className="col-6 col-md-4 col-xl-2">
              <div className="partner_item text-center mb30-lg">
                <img
                  height={26}
                  width={84}
                  className="wa m-auto w-100 h-100 object-fit-contain"
                  src={partner3}
                  alt={"partner3"}
                />
              </div>
            </div>
            <div className="col-6 col-md-4 col-xl-2">
              <div className="partner_item text-center mb30-lg">
                <img
                  height={26}
                  width={84}
                  className="wa m-auto w-100 h-100 object-fit-contain"
                  src={partner4}
                  alt={"partner4"}
                />
              </div>
            </div>
            <div className="col-6 col-md-4 col-xl-2">
              <div className="partner_item text-center mb30-lg">
                <img
                  height={26}
                  width={84}
                  className="wa m-auto w-100 h-100 object-fit-contain"
                  src={partner5}
                  alt={"partner5"}
                />
              </div>
            </div>
            <div className="col-6 col-md-4 col-xl-2">
              <div className="partner_item text-center mb30-lg">
                <img
                  height={26}
                  width={84}
                  className="wa m-auto w-100 h-100 object-fit-contain"
                  src={partner6}
                  alt={"partner6"}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
