import { useRef } from "react";
import { mobilemenu } from '../../data/navigation'
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import headerlogo3 from '../../images/icon/iconheader.png'
import { Link, useLocation } from "react-router-dom";
import { isActiveNavigation } from "../../utils/isActiveNavigation";

export default function NavSidebar() {

  const path = useLocation();
  const pathname = path.pathname

  const crossRef = useRef(null);

  return (
    <>
      <div
        className="offcanvas offcanvas-start"
        tabIndex={-1}
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header border-bottom">
          <Link to="/">
            <img
              alt="Header Logo"
              height={40}
              src={headerlogo3}
            />
          </Link>
          <button
            ref={crossRef}
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body">
          <div className="ui-navigation-sidebar">
            <Sidebar>
              <Menu>
                {mobilemenu.map((item,i) =>
                  item?.children ? (
                    <SubMenu
                      key={ i }
                      label={item.name}
                      className={
                        isActiveNavigation(pathname, item) ? "ui-mobile-active" : ""
                      }
                    >
                      {item.children.map((item2,i2) =>
                        item2?.children ? (
                          <SubMenu
                            key={i2}
                            label={item2.name}
                            className={
                              isActiveNavigation(pathname, item2)
                                ? "ui-mobile-active"
                                : ""
                            }
                          >
                            {item2.children.map((item3,i3) => (
                              <MenuItem
                                key={i3}
                                component={<Link to={item3.path} />}
                                className={
                                  item3.path === pathname ||
                                  item3.path === pathname.replace(/\/\d+$/, "")
                                    ? "ui-mobile-active"
                                    : ""
                                }
                              >
                                <span data-bs-dismiss="offcanvas">
                                  {item3.name}
                                </span>
                              </MenuItem>
                            ))}
                          </SubMenu>
                        ) : (
                          <MenuItem
                            key={i2}
                            component={<Link to={item2.path} />}
                            className={
                              item2.path === pathname ? "ui-mobile-active" : ""
                            }
                          >
                            <span data-bs-dismiss="offcanvas">
                              {item2.name}
                            </span>
                          </MenuItem>
                        ),
                      )}
                    </SubMenu>
                  ) : (
                    <MenuItem
                      key={ i }
                      component={<Link to={item.path} />}
                      className={item.path === pathname ? "ui-mobile-active" : ""}
                    >
                      <span data-bs-dismiss="offcanvas">{item.name}</span>
                    </MenuItem>
                  ),
                )}
              </Menu>
            </Sidebar>
          </div>
        </div>
      </div>
    </>
  );
}
