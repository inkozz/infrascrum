import { useFormik } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';
import * as Yup from 'yup';
import FormUser from '../components/forms/FormUser';
import { addUser } from '../data/getData';

const AddUser = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: '',
      lastName: '',
      username: '',
      password: '',
      verifPassword: '',
      ville: '',
      email: '',
      tel: '',
      role: '',
    },
    validationSchema: Yup.object({
      name: Yup.string(),
      lastName: Yup.string().required('Il faut plus de 2 lettres'),
      password: Yup.string(),
      verifPassword: Yup.string(),
      ville: Yup.string().required('Remplir obligatoirement le champ'),
      email: Yup.string().email('Email invalide').required('Entrez un Email'),
      tel: Yup.number(),
      role: Yup.array().min(1),
    }),
    onSubmit: (values) => {
      addUser(values);
      navigate('/');
      console.log(values);
    },
  });

  return <FormUser formik={formik} />;
};

export default AddUser;
