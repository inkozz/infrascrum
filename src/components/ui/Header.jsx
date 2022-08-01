/* eslint-disable no-undef */
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import loginCtx from '../../loginCtx';

const Header = () => {
  const { isLogged, setIsLogged } = useContext(loginCtx);
  const navigate = useNavigate();
  const logout = () => {
    setIsLogged(false);
    localStorage.clear('isLogged');
    localStorage.clear('authorization');
    navigate('/');
    toast('Déconnecté !', { className: 'errorToast' });
  };
  return (
    <>
      {isLogged ? (
        <div className="header bg-white relative">
          <div className="container mx-auto px-2 py-4 flex items-center justify-between">
            <div className="flex justify-between items-center w-1/2">
              {/* <!-- logo --> */}
              <div className=" md:w-48 pb-3 flex-shrink-0">
                <img className="h-10 md:h-12" src="/img/logo.png" alt="Infrascrum" />
              </div>

              {/* <!-- search --> */}
              <div className="w-full xl:max-w-md  rounded-md hidden xl:flex items-center justify-end">
                <input
                  className="border-l border-primary ml-20 bg-transparent font-semibold rounded-3xl text-sm pl-4"
                  type="text"
                  placeholder="Recherche ..."
                />
                <svg
                  className=" h-5 px-4 text-primary"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="far"
                  data-icon="search"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512">
                  <path
                    fill="currentColor"
                    d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"
                  />
                </svg>
              </div>
            </div>
            {/* buttons */}
            <div className="flex justify-end w-1/2">
              <nav className="contents">
                <ul className="ml-4 xl:w-48 flex items-center justify-end">
                  <Link to="/home/notifications">
                    <li className="ml-2 lg:ml-4 relative inline-block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </li>
                  </Link>
                  <Link to="/taches">
                    <li className="ml-2 lg:ml-4 relative inline-block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                        />
                      </svg>
                    </li>
                  </Link>
                  <Link to="/projets">
                    <li className="ml-2 lg:ml-4 relative inline-block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                        />
                      </svg>
                    </li>
                  </Link>
                </ul>
              </nav>
              {/* 
             <!-- log-out --> */}

              <div className="ml-4 hidden sm:flex flex-col font-bold">
                <Link to="/">
                  <button
                    type="submit"
                    onClick={logout}
                    className="w-full sm:w-auto px-5 py-2 text-base font-semibold focus:ring-2 focus:ring-offset-2px focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200ms rounded-full block bg-transparent hover:bg-primary border border-primary text-primary hover:text-white">
                    Log Out
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <hr />
        </div>
      ) : (
        ''
      )}
      <div />
    </>
  );
};
export default Header;
