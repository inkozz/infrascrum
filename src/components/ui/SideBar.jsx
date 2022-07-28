import { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { NavLink } from 'react-router-dom';
import loginCtx from '../../loginCtx';

const Sidebar = () => {
  const { isLogged, setIsLogged } = useContext(loginCtx);
  const [isExpand, setIsExpand] = useState(true);
  // const login = () => {
  //   localStorage.setItem('isLogged', true);
  //   setIsLogged(true);
  //   toast('Connecté !', { className: 'successToast' });
  // };

  // const logout = () => {
  //   setIsLogged(false);
  //   navigate('/');
  //   isExpand(false);
  //   toast('Déconnecté !', { className: 'errorToast' });
  // };
  return (
    <div
      className={`relative p-4 rounded-md shadow-md bg-primary hover:bg-white h-[100vh] flex flex-col duration-200 ${
        isExpand ? 'expand' : ''
      }`}>
      <button
        type="button"
        className="absolute top-2 right-2"
        onClick={() => setIsExpand(!isExpand)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6 text-gray-400 duration-200 ${isExpand ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
      <img
        src="/img/logo.png"
        alt="logo app"
        className={`mt-8 mx-auto ${isExpand ? 'w-24' : 'w-12'}`}
      />
      <nav className="flex flex-col items-center flex-grow mt-8">
        <ul className="flex flex-col w-full flex-grow space-y-6">
          <li className="nav-item">
            <NavLink to="home" className={({ isActive }) => (isActive ? 'active' : '')}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className={`${!isExpand ? 'expand' : ''}`}
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              {isExpand && 'Accueil'}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="projets"
              className={({ isActive }) => (isActive ? 'active' : '')}>
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
              {isExpand && 'Projets'}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="taches" className={({ isActive }) => (isActive ? 'active' : '')}>
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
              {isExpand && 'Taches'}
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

// {isLogged && (
//   )}
