import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import FormProjet from '../components/forms/FormProjet';
import { addProject } from '../data/getData';

const AddProjet = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: '',
      logo: '',
      describe: '',
      dateB: '',
      dateE: '',
      priority: '',
    },
    validationSchema: Yup.object({
      name: Yup.string(),
      describe: Yup.string().max(50, 'Le titre doit faire maximum 50 caractères'),
      dateB: Yup.date(),
      dateE: Yup.date(),
      priority: Yup.array(),
    }),
    onSubmit: (values) => {
      addProject(values);
      navigate('/home/projets');
      console.log(values);
    },
  });

  //   const buttonQuiAfficheLesDonnesDuFormulaire = () => {
  //     console.log(formik.values);
  //   };

  return (
    <div>
      <FormProjet formik={formik} />
    </div>
  );
};
export default AddProjet;
