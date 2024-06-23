import { Link, Outlet, useLocation } from "react-router-dom";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";
import headerlogo2 from '../../images/icon/iconheader.png'
import headerlogo from '../../images/icon/icon.png'
import useStickyMenu from "../../hook/useStickyMenu"
import BottomToTop from "../../utils/BottomToTop";
import Footer from "../footer/Footer";
import SearchModal from "../../components/modals/SearchModal";
import NavSidebar from "./NavSidebar";
import MenusFooter from "../../utils/menus";
import { sidebarEnable } from "../../data/header"
import toggleStore from "../../components/store/toggleStore";


const Header =()=> {

  const sticky = useStickyMenu(50);

  const isListingActive = toggleStore((state) => state.isListingActive);
  const route = useLocation();
  const pathname = route.pathname
  const menuNavigation = MenusFooter
  const isFromMenu = menuNavigation.includes(pathname);

  return (
    <body 
    className={`${pathname === "/login"
        ? "bgc-thm4 mm-wrapper mm-wrapper--position-left-front"
        : sidebarEnable.includes(pathname)
        ? isListingActive
          ? "menu-hidden-sidebar-content"
          : ""
        : ""
    }`}>
      <div className="wrapper ovh mm-page mm-slideout">
        {}
        <header className={pathname !== "/" ? `header-nav nav-innerpage-style main-menu` : `header-nav nav-homepage-style stricky main-menu animated  ${
          sticky ? "slideInDown stricky-fixed" : "slideIn"
        }`}>
          <nav className="posr">
            <div className="container-fluid posr menu_bdrt1 px30">
              <div className="row align-items-center justify-content-between">
                <div className="col-auto px-0">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="logos br-white-light pr30 pr5">
                      {
                        pathname !== "/" ? <Link className="header-logo logo2" to="/">
                        <img
                          height={40}
                          src={headerlogo2}
                          alt="Header Logo"
                        />
                      </Link> : <Link className="header-logo logo1" to="/">
                        <img
                          height={40}
                          src={headerlogo}
                          alt="Header Logo"
                        />
                      </Link>
                      }
                    </div>
                  </div>
                </div>
                <div className="col-auto px-0">
                  <div className="d-flex align-items-center">
                    <Navigation />
                    <a
                      className="login-info bdrl1 pl15 pr15"
                      data-bs-toggle="modal"
                      href="#exampleModalToggle"
                    >
                      <span className="flaticon-loupe" />
                    </a>
                    <Link
                      className="ud-btn btn-thm add-joining"
                      to="/login"
                    >
                      Entrar
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <SearchModal />
        <MobileNavigation />
        <div className='body_content'>
          <Outlet />
          {
            isFromMenu === false ? <Footer /> : <></> 
          }
        <BottomToTop />
        </div>
        <NavSidebar />
      </div>
    </body>
  );
}

export default Header