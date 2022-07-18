import { useFormik } from 'formik';
import * as Yup from 'yup';
import FormProjet from '../components/forms/FormProjet';

const AddProjet = () => {
  const formik = useFormik({
    initialValues: {
      logo: '',
      NameProjet: '',
      Describe: '',
      StartDate: '',
      EndDate: '',
      Priority: '',
    },
    validationSchema: Yup.object({
      NameProjet: Yup.string(),
      Describe: Yup.string()
        .required()
        .max(50, 'Le titre doit faire maximum 50 caractères'),
      StartDate: Yup.date(),
      EndDate: Yup.date(),
      Priority: Yup.array().min(1),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  //   const buttonQuiAfficheLesDonnesDuFormulaire = () => {
  //     console.log(formik.values);
  //   };

  return <FormProjet formik={formik} />;
};
export default AddProjet;
