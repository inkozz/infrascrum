import { useFormik } from 'formik';
import * as Yup from 'yup';
import FormUser from '../components/forms/FormUser';
import { addUser } from '../data/getData';

const AddUser = () => {
  const formik = useFormik({
    initialValues: {
      Name: '',
      LastName: '',
      Birthday: '',
      Adress: '',
      Number: '',
      Postal: '',
      Email: '',
      Tel: '',
      Role: '',
    },
    validationSchema: Yup.object({
      Name: Yup.string(),
      LastName: Yup.string().required('Il faut plus de 2 lettres'),
      Birthday: Yup.date(),
      Adress: Yup.string().required('Remplir obligatoirement le champ'),
      Number: Yup.number(),
      Postal: Yup.number(),
      Email: Yup.string().email('Email invalide').required('Entrez un Email'),
      Tel: Yup.number(),
      Role: Yup.array().min(1),
    }),
    onSubmit: (values) => {
      addUser(values);
      console.log(values);
    },
  });

  return <FormUser formik={formik} />;
};

export default AddUser;
