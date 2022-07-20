import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import FormTask from '../components/forms/FormTask';
import { addTask } from '../data/getData';

const AddTask = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: '',
      taskDescription: '',
      startDate: '',
      endDate: '',
      priority: '',
      assign: '',
      roles: '',
    },
    validationSchema: Yup.object({
      name: Yup.string(),
      taskDescription: Yup.string(),
      startDate: Yup.date(),
      endDate: Yup.date(),
      priority: Yup.string(),
      assign: Yup.string(),
      roles: Yup.string(),
    }),
    onSubmit: (values) => {
      addTask(values);
      navigate('/home/taches/');
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
