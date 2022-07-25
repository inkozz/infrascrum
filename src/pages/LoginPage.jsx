import * as Yup from 'yup';
import { useFormik } from 'formik';
import LoginForm from '../components/forms/LoginForm';

const LoginPage = () => {
  const formik = useFormik({
    initialValues: {
      email: 'leila@mail.be',
      password: 'test',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Email invalide').required('Entrez un Email'),
      password: Yup.string().required('Entrez un mot de passe'),
    }),

  });
  return <LoginForm formik={formik} />;
};
export default LoginPage;
