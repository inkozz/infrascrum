import { Formik } from 'formik';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useMutation, useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import * as Yup from 'yup';
import FormTask from '../components/forms/FormTask';
import apiClient from '../http-common';

const EditTasks = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState({});
  const { isLoading } = useQuery(
    'projects',
    async () => await apiClient.get(`/tasks/${id}`),
    {
      onSuccess: (res) => {
        setTask(res.data);
        console.log(res.data);
      },
    },
  );

  const { isLoading: isUpdate, mutate: updateTask } = useMutation(
    'tasks',
    async (taskValues) => await apiClient.put(`/tasks/${id}`, taskValues),
    {
      onSuccess: () => {
        navigate('/home/taches');
        toast.success('La tache a été mise à jour');
      },
    },
  );
  const validationSchema = Yup.object({
    name: Yup.string(),
    taskDescription: Yup.string(),
    startDate: Yup.date(),
    endDate: Yup.date(),
    priority: Yup.string(),
    assign: Yup.string(),
    roles: Yup.string(),
  });

  return (
    <>
      {isLoading || isUpdate}
      {Object.keys(task).length && (
        <Formik
          initialValues={task}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            updateTask(values);
          }}>
          {(props) => <FormTask formik={props} />}
        </Formik>
      )}
    </>
  );
};
export default EditTasks;
