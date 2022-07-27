import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import FormUser from '../components/forms/FormUser';
import { addUser } from '../data/getData';

const AddUserPage = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      name: '',
      lastName: '',
      verifPassword: '',
      city: '',
      role: '',
      tel: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Email invalide').required('Entrez un Email'),
      password: Yup.string(),
      name: Yup.string(),
      lastName: Yup.string().required('Il faut plus de 2 lettres'),
      verifPassword: Yup.string(),
      city: Yup.string().required('Remplir obligatoirement le champ'),
      role: Yup.string(),
      tel: Yup.number()
    }),
    onSubmit: (values) => {
      addUser(values);
      navigate('/');
      console.log(values);
    },
  });

  return <FormUser formik={formik} />;
};

export default AddUserPage;