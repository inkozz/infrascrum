import { useFormik } from 'formik';
import * as Yup from 'yup';
import FormTask from '../components/forms/FormTask';
import { addTask } from '../data/getData';

const AddTask = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      dateDebut: '',
      dateFin: '',
      status: '',
      assign: '',
      roles: '',
    },
    validationSchema: Yup.object({
      name: Yup.string(),
      dateDebut: Yup.date(),
      dateFin: Yup.date(),
      status: Yup.array().min(1),
      assign: Yup.array().min(1),
    }),
    onSubmit: (values) => {
      addTask(values);
      console.log(values);
    },
  });

  return (
    <div>
      <FormTask formik={formik} />
    </div>
  );
};

export default AddTask;
