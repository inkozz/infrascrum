import * as Yup from 'yup';
import { useFormik } from 'formik';
import { Route, Routes, Link, BrowserRouter as Router } from 'react-router-dom';
import FormLogin from '../components/forms/LoginForm';

const AddLogin = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
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
      console.log(formik.values);
    },
  });
  const displayData = () => {
    console.log(formik.values);
  };

  return <FormLogin formik={formik} />;
};
export default AddLogin;
