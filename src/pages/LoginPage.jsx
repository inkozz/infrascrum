import * as Yup from 'yup';
import { useFormik } from 'formik';
import FormLogin from '../components/forms/FormLogin';

const LoginPage = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: 'test',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Email invalide').required('Entrez un Email'),
      password: Yup.string().required('Entrez un mot de passe'),
    }),
  });
  return <FormLogin formik={formik} />;
};
export default LoginPage;
