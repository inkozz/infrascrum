import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import * as Yup from 'yup';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import FormTask from '../components/forms/FormTask';
import { addTask } from '../data/getData';
import apiClient from '../http-common';

const AddTask = () => {
  const navigate = useNavigate();
  const { isLoading, mutate } = useMutation(
    '/tasks',
    async (values) => await apiClient.post(`/tasks`, values),
    {
      onSuccess: () => {
        navigate('/taches');
        toast.success('Tache ajoutée');
      },
    },
  );
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
      console.log(formik.values);
      mutate(values);
    },
  });

  return (
    <div>
      {isLoading}
      <FormTask formik={formik} />
    </div>
  );
};

export default AddTask;
