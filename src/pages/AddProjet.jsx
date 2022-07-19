import { useFormik } from 'formik';
import * as Yup from 'yup';
import FormProjet from '../components/forms/FormProjet';

const AddProjet = () => {
  const formik = useFormik({
    initialValues: {
      logo: '',
      nameProjet: '',
      describe: '',
      dateB: '',
      dateE: '',
      priority: '',
    },
    validationSchema: Yup.object({
      nameProjet: Yup.string(),
      describe: Yup.string()
        .required()
        .max(50, 'Le titre doit faire maximum 50 caractères'),
      dateB: Yup.date(),
      dateE: Yup.date(),
      priority: Yup.array().min(1),
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
