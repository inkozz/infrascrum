import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import FormUser from '../components/forms/FormUser';
import { addUser } from '../data/getData';

const AddUser = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      name: '',
      lastName: '',
      verifPassword: '',
      ville: '',
      role: '',
      tel: '',
      img: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Email invalide').required('Entrez un Email'),
      password: Yup.string(),
      name: Yup.string(),
      lastName: Yup.string().required('Il faut plus de 2 lettres'),
      verifPassword: Yup.string(),
      ville: Yup.string().required('Remplir obligatoirement le champ'),
      role: Yup.array().min(1),
      tel: Yup.number(),
      img: Yup.array(),
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
