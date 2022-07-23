import { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate, NavLink } from 'react-router-dom';
import loginCtx from '../../loginCtx';

const Sidebar = () => {
  const { isLogged, setIsLogged } = useContext(loginCtx);
  const [isExpand, setIsExpand] = useState(true);
  const navigate = useNavigate();
  const login = () => {
    localStorage.setItem('isLogged', true);
    setIsLogged(true);
    toast('Connecté !', { className: 'successToast' });
  };

  const logout = () => {
    setIsLogged(false);
    navigate('/');
    isExpand(false);
    toast('Déconnecté !', { className: 'errorToast' });
  };
  return (
    <div
      className={`relative p-4 rounded-md shadow-md flex flex-col ease-in-out duration-200 bg-white text-black ${
        isExpand ? '  min-w-[120px] expand ' : '  min-w-[10px]'
      } ${isLogged ? 'show' : 'hidden'}`}
      name="sidebar">
      <button
        type="button"
        className="absolute top-2 right-2"
        onClick={() => setIsExpand(!isExpand)}
        name="expandBtn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6 text-primary duration-100 ease-in-out ${
            isExpand ? 'rotate-180' : ''
          }`}
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
      {isExpand ? (
        <img src="/img/logo.png" alt="logo app" className="mt-8 mx-auto w-24" />
      ) : (
        <img src="/icons/Fichier_1.png" alt="logo app" className="h-5 w-5 mt-6" />
      )}
      <nav className="flex flex-col items-center flex-grow mt-8">
        <ul className="flex flex-col w-full flex-grow space-y-6">
          <li className="nav-item">
            <NavLink to="/home" className={({ isActive }) => (isActive ? 'active' : '')}>
              {isExpand && 'Accueil'}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/home/projets"
              className={({ isActive }) => (isActive ? 'active' : '')}>
              {isExpand && 'Projets'}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="home/taches"
              className={({ isActive }) => (isActive ? 'active' : '')}>
              {isExpand && 'Taches'}
            </NavLink>
          </li>
        </ul>
        {isLogged ? (
          <button
            type="button"
            className="flex items-center text-blue-600 duration-200 hover:text-blue-800"
            onClick={logout}
            data-cy="logoutBtn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 ${!isExpand ? 'mr-0' : 'mr-2'}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            {isExpand && 'Se déconnecter'}
          </button>
        ) : (
          <button
            type="button"
            className="flex items-center text-blue-600 duration-200 hover:text-blue-800"
            onClick={login}
            data-cy="loginBtn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 ${!isExpand ? 'mr-0' : 'mr-2'}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
              />
            </svg>
            {isExpand && 'Se connecter'}
          </button>
        )}
      </nav>
    </div>
  );
};

export default Sidebar;
