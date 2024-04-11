import { Link } from "react-router-dom";
import headerlogo3 from '../../images/icon/iconheader.png'
import mobiledarkicon from '../../images/mobile-dark-nav-icon.svg'

const MobileNavigation = () => {
  return (
    <>
      <div className="mobilie_header_nav stylehome1">
        <div className="mobile-menu">
          <div className="header bdrb1">
            <div className="menu_and_widgets">
              <div className="mobile_menu_bar d-flex justify-content-between align-items-center">
                <Link className="mobile_logo" to="/">
                  <img
                    height={40}
                    src={headerlogo3}
                    alt="Header Logo"
                  />
                </Link>
                <div className="right-side text-end">
                  <span>Menu</span>
                  <a
                    className="menubar ml30"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasExample"
                    aria-controls="offcanvasExample"
                  >
                    <img
                      height={20}
                      width={20}
                      src={mobiledarkicon}
                      alt="icon"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="posr">
              <div className="mobile_menu_close_btn">
                <span className="far fa-times" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MobileNavigation;