import { NavLink } from "react-router-dom";

const Header = () => {
  const link = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-lg mr-2 text-yellow-400"
            : "text-lg mr-2 text-white"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive
            ? "text-lg mr-2 text-yellow-400"
            : "text-lg mr-2 text-white"
        }
      >
        Contact
      </NavLink>
      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          isActive
            ? "text-lg mr-2 text-yellow-400"
            : "text-lg mr-2 text-white"
        }
      >
        Dashboard
      </NavLink>
      <NavLink
        to="/menu"
        className={({ isActive }) =>
          isActive
            ? "text-lg mr-2 text-yellow-400"
            : "text-lg mr-2 text-white"
        }
      >
        Our Menu
      </NavLink>
      <NavLink
        to="/order/salad"
        className={({ isActive }) =>
          isActive
            ? "text-lg mr-2 text-yellow-400"
            : "text-lg mr-2 text-white"
        }
      >
        Our Order
      </NavLink>

      <NavLink
        to="/login"
        className={({ isActive }) =>
          isActive
            ? "text-lg mr-2 text-yellow-400"
            : "text-lg mr-2 text-white"
        }
      >
        Login
      </NavLink>
    </>
  );

  return (
    <div className="sticky top-0 z-10">
      <div className="navbar bg-black opacity-50 text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {link}
            </ul>
          </div>
          <NavLink to="/">
            <h2 className="text-3xl font-semibold uppercase">BISTRO BOSS</h2>
            <p className="uppercase tracking-[0.3em]">Restaurant</p>
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{link}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">loading work...</a>
        </div>
      </div>
    </div>
  );
}; 

export default Header;
