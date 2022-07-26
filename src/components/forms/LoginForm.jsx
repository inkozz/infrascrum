/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import loginCtx from '../../loginCtx';
import { postLogin } from '../../data/getData';

const LoginForm = ({ formik }) => {
  const { isLogged, setIsLogged } = useContext(loginCtx);
  const login = () => {
    postLogin(formik.values);
    console.log(formik.values);
     localStorage.setItem('isLogged', false);
    setIsLogged(true);
    toast('Connecté !', { className: 'successToast' });
  };
  return (
    <div className="bg-white h-full w-full flex justify-center items-center">
      <div className="p-6 rounded-xl border-2 border-primary shadow-xl">
        <div className="flex flex-col items-center justify-center mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
          <h2 className="text-2xl font-bold text-primary">Login</h2>
        </div>
        <form onSubmit={formik.onSubmit} method="POST">
          <div className="flex flex-col p-4">
            <label htmlFor="email" className="text-xs text-black flex flex-col ">
              Nom d'utilisateur
              <input
                id="email"
                name="email"
                type="text"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Nom d'utilisateur"
                className="border border-primary rounded px-3 py-1 mt-4 focus:outline-2 outline-primary"
              />
            </label>
            {formik.touched.email && formik.errors.email && (
              <div className="text-sm text-red">{formik.errors.email}</div>
            )}
            <div className="flex flex-col my-4">
              <label htmlFor="password" className="text-xs text-black flex flex-col">
                Mot de passe
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Mot de passe"
                  className="border border-primary rounded px-3 py-1 mt-4 focus:outline-2 outline-primary"
                />
              </label>
              {formik.touched.password && formik.errors.password && (
                <div className="text-sm text-red">{formik.errors.password}</div>
              )}
            </div>
          </div>

          <Link to="/home">
            <div className="flex flex-col items-center justify-center">
              <button
                onClick={login}
                className=" py-1 w-full rounded bg-primary text-white"
                type="submit">
                Se connecter
              </button>
            </div>
          </Link>
          <div className="pt-6">
            <Link to="/adduser">
              <p className="text-primary text-center text-sm">
                Pas de compte? Créez en un ici !
              </p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
