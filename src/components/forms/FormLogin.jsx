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
    localStorage.setItem('isLogged', true);

    setIsLogged(true);
    toast('Connecté !', { className: 'successToast' });
  };
  return (
    <div
      className="h-full w-full flex justify-center items-center"
      style={{
        backgroundImage: `url("https://cdn.wallpapersafari.com/53/86/SkIfuB.jpg")`,
        backgroundSize: 'cover',
      }}>
      <div className="p-6 rounded-xl bg-white w-1/4 ">
        <div className="flex flex-col items-center justify-center mb-1">
          <img src="../public/img/LogoLogin.png" alt="logo" />
          {/* <svg
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
          </svg> */}
          <h2 className="text-2xl font-light italic text-primary ">Login</h2>
        </div>
        <form onSubmit={formik.onSubmit} method="POST">
          <div className="flex flex-col p-4">
            <label htmlFor="email" className="text-sm text-gray-700 flex flex-col ">
              Nom d'utilisateur
              <input
                id="email"
                name="email"
                type="text"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Nom d'utilisateur"
                className="border border-primary rounded-xl px-3 py-1 mt-4 focus:outline-2 outline-primary"
              />
            </label>
            {formik.touched.email && formik.errors.email && (
              <div className="text-sm text-red">{formik.errors.email}</div>
            )}
            <div className="flex flex-col my-4">
              <label htmlFor="password" className="text-sm text-gray-700 flex flex-col">
                Mot de passe
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Mot de passe"
                  className="border border-primary rounded-xl px-3 py-1 mt-4 focus:outline-2 outline-primary"
                />
              </label>
              {formik.touched.password && formik.errors.password && (
                <div className="text-sm text-red">{formik.errors.password}</div>
              )}
            </div>
          </div>

          <Link to="/home">
            <div className="flex flex-col items-center justify-center ">
              <button
                onClick={login}
                className=" w-64 rounded bg-cyan-500 hover:bg-primary text-white text-lg p-2"
                type="submit">
                Se connecter
              </button>
            </div>
          </Link>
          <div className="pt-8">
            <Link to="/adduser">
              <p className="text-primary text-center text-sm underline decoration-double">
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
