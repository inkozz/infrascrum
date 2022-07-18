import * as Yup from 'yup';
import { useFormik } from 'formik';
import LoginForm from '../components/forms/LoginForm';
import { postLogin } from '../data/getData';

const LoginPage = () => {
  const formik = useFormik({
    initialValues: {
      Email: '',
      Password: '',
    },
    validationSchema: Yup.object({
      Email: Yup.string().email('Email invalide').required('Entrez un Email'),
      Password: Yup.string().required('Entrez un mot de passe'),
    }),
    onSubmit: (values) => {
      postLogin(values);
      console.log(values);
    },
  });
  return <LoginForm formik={formik} />;
};
export default LoginPage;
