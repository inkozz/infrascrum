import { useFormik } from 'formik';
import * as Yup from 'yup';
import FormUser from '../components/forms/FormUser';

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
      console.log(values);
    },
  });

  // const buttonQuiAfficheLesDonnesDuFormulaire = () => {
  //   console.log(formik.values);
  // };

  return <FormUser formik={formik} />;
};

export default AddUser;
