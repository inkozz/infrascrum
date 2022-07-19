/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';
import { postLogin } from '../../data/getData';

const LoginForm = ({ formik }) => {
  const submitLogin = () => {
    postLogin(formik.values);
    console.log(formik.values);
  };
  return (
    <div className="bg-white h-screen w-screen flex justify-center items-center">
      <div className="p-12 rounded-xl border-2 border-primary shadow-xl">
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
        <form onSubmit={formik.handleSubmit} method="POST">
          <div className="flex flex-col p-4">
            <label htmlFor="Email" className="text-xs text-black flex flex-col ">
              Nom d'utilisateur
              <input
                id="Email"
                name="Email"
                type="text"
                value={formik.values.Email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Nom d'utilisateur"
                className="border border-primary rounded px-3 py-1 mt-4 focus:outline-2 outline-primary"
              />
            </label>
            {formik.touched.Email && formik.errors.Email && (
              <div className="text-sm text-red">{formik.errors.Email}</div>
            )}
            <div className="flex flex-col my-4">
              <label htmlFor="Password" className="text-xs text-black flex flex-col">
                Mot de passe
                <input
                  id="Password"
                  name="Password"
                  type="password"
                  value={formik.values.Password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Mot de passe"
                  className="border border-primary rounded px-3 py-1 mt-4 focus:outline-2 outline-primary"
                />
              </label>
              {formik.touched.Password && formik.errors.Password && (
                <div className="text-sm text-red">{formik.errors.Password}</div>
              )}
            </div>
          </div>

          <Link to="/home">
            <div className="flex flex-col items-center justify-center my-3">
              <button
                onClick={submitLogin}
                className=" py-1 w-full rounded bg-primary text-white"
                type="submit">
                Soumettre
              </button>
              <Link to="/adduser">
                <p className="text-primary pt-8">Pas de compte? Créez en un ici !</p>
              </Link>
            </div>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
