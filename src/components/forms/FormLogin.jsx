/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
import { useContext, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import loginCtx from '../../loginCtx';
import { postLogin } from '../../data/getData';

const LoginForm = () => {
  const navigate = useNavigate();
  const { isLogged, setIsLogged } = useContext(loginCtx);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: 'test',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Email invalide').required('Entrez un Email'),
      password: Yup.string().required('Entrez un mot de passe'),
    }),
    onSubmit: async (values) => {
      const tokenRes = await postLogin(values);
      console.log('token res :::', tokenRes);
      if (tokenRes) {
        localStorage.setItem('isLogged', true);
        console.log('verif tokenres.data :::', tokenRes);
        setIsLogged(true);
        toast('Connecté', { className: 'successToast' });
        navigate('/home');
      } else {
        console.log('coucou le else :::', tokenRes);
        localStorage.clear('isLogged');
        navigate('/');
      }
    },
  });
  useEffect(() => {}, [isLogged, setIsLogged]);
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
          <h2 className="text-2xl font-light italic text-primary ">Login</h2>
        </div>
        <form onSubmit={formik.handleSubmit}>
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

          <div className="flex flex-col items-center justify-center ">
            <button
              disabled={!(formik.isValid && formik.dirty)}
              // onClick={login}
              className=" btn disabled w-64 rounded bg-cyan-500 hover:bg-primary text-white text-lg p-2"
              type="submit">
              Se connecter
            </button>
          </div>

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
