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
      tel: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Email invalide').required('Entrez un Email'),
      password: Yup.string().required('Ce champ est obligatoire'),
      name: Yup.string()
        .required('Ce champ est obligatoire')
        .min(2, 'le Nom doit contenir au minimum 2 lettres'),
      lastName: Yup.string()
        .required('Ce champs est obligatoire')
        .min(2, 'le Nom de famille doit contenir au minimum 2 lettres'),
      verifPassword: Yup.string().required('Ce champ est obligatoire'),
      city: Yup.string().required('Ce champ est obligatoire'),
      role: Yup.string(),
      tel: Yup.number().required('Ce champ est obligatoire'),
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
