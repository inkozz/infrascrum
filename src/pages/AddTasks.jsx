import { useFormik } from 'formik';
import * as Yup from 'yup';
import FormTask from '../components/forms/FormTask';
import { addTask } from '../data/getData';

const AddTask = () => {
  const formik = useFormik({
    initialValues: {
      Name: '',
      DateDebut: '',
      DateFin: '',
      Status: '',
      Assign: '',
      Roles: '',
    },
    validationSchema: Yup.object({
      Name: Yup.string(),
      DateDebut: Yup.date(),
      DateFin: Yup.date(),
      Status: Yup.array().min(1),
      Assign: Yup.array().min(1),
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
