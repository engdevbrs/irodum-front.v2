import { Link, useLocation } from "react-router-dom";
import { menus } from "../../data/navigation";
import { isActiveNavigation } from "../../utils/isActiveNavigation";

export default function Navigation() {

  const path = useLocation();
  const pathname = path.pathname

  return (
    <>
      <ul
        className={`ace-responsive-menu ui-navigation`}
      >
        {menus.map((item,i) => (
          <li
            key={ i }
            className={`visible_list menu-active ${
              item.id === 1 ? "home-menu-parent" : ""
            } `}
          >
            {item.children ? (
              <a
                className={`list-item  ${
                  isActiveNavigation(pathname, item) ? "ui-active" : ""
                }`}
              >
                <span className="title">{item.name}</span>{" "}
                {item.children && <span className="arrow "></span>}
              </a>
            ) : (
              <Link
                to={item.path}
                className={`list-item
                                ${item.path === pathname ? "ui-active" : ""}`}
              >
                <span className="title">{item.name}</span>
              </Link>
            )}

            {item.children && (
              <ul className={`sub-menu ${item.id === 1 ? "home-menu" : ""} `}>
                {item.children?.map((item2,i2) => (
                  <li
                    key={i2}
                    className={`menu-active ${
                      isActiveNavigation(pathname, item2) || item2.path === pathname
                        ? "ui-child-active"
                        : ""
                    }`}
                  >
                    {item2.children ? (
                      <a>
                        <span className="title">{item2.name}</span>
                        {item2.children && <span className="arrow "></span>}
                      </a>
                    ) : (
                      <Link to={item2.path}>
                        <span className="title">{item2.name}</span>
                      </Link>
                    )}

                    {item2.children && (
                      <ul className="sub-menu">
                        {item2.children?.map((item3,i3) => (
                          <li
                            key={i3}
                            className={
                              item3.path === pathname ||
                              item3.path === pathname.replace(/\/\d+$/, "")
                                ? "ui-child-active"
                                : ""
                            }
                          >
                            <Link to={item3.path}>{item3.name}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
