import { Link, NavLink } from "react-router-dom";




const Nav = () => {
  const isAdmin = true;

  const link = (
    <>
      <div className="lg:flex gap-5  lg:mr-[189px] items-center">
        <Link>
          <li>Home</li>
        </Link>
        <Link>
          <li>CONTACT</li>
        </Link>
        {  isAdmin && (
          <li>
            <Link to={"/sidebar/AdminHome"}>DASHBOARD</Link>
          </li>
        )}
        { !isAdmin && (
          <li>
            <Link to={"/sidebar/UserHome"}>DASHBOARD</Link>
          </li>
        )}

        <Link to={"/men"}>
          <li>Our Men</li>
        </Link>
        <Link to={"/our"}>
          {" "}
          <li>Our Shop</li>
        </Link>
        {
          <Link to={"/login"}>
            {" "}
            <li>Login</li>
          </Link>
        }
      </div>
    </>
  );

  return (
    <div className="lg:w-[1520px] fixed z-20   opacity-65 text-white ">
      <div className="navbar lg:ml-[15.25rem]">
        <div className="navbar-start items-center">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-500 text-[18px]  rounded-box "
            >
              {link}
              
            </ul>
          </div>
          <div>
            <a className=" text-3xl itali "> bisto-bos</a>
          </div>
        </div>
        <div className="navbar-end hidden gap-6 lg:flex items-center ">
          <ul className="menu px-1 flex gap-7">{link}</ul>
        </div>

        <NavLink to={"/sidebar/side"}>
          <div className="navbar-end">
            <div>
              <div className="flex-none">
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle"
                  >
                    <div className="indicator">
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
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      <span className="badge badge-sm indicator-item">
                       
                      </span>
                    </div>
                  </div>
                  <div
                    tabIndex={0}
                    className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
                  >
                    <div className="card-body">
                      <span className="font-bold text-lg">8 Items</span>
                      <span className="text-info">Subtotal: $</span>
                      <div className="card-actions">
                        <button className="btn btn-primary btn-block">
                          View cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </NavLink>

        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS Navbar component" src='' />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between text-orange-500">
                <span className="badge"></span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
