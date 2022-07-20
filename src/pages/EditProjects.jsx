import { Formik } from 'formik';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useMutation, useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import * as Yup from 'yup';
import FormProjet from '../components/forms/FormProjet';
import apiClient from '../http-common';

const EditProjects = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState({});
  const { isLoading } = useQuery(
    'projects',
    async () => apiClient.get(`/projects/${id}`),
    {
      onSuccess: (res) => {
        setProject(res.data);
        // console.log(res.data);
      },
    },
  );

  const { isLoading: isUpdate, mutate: updateProject } = useMutation(
    'projects',
    async (projectValues) => apiClient.put(`/projects/${id}`, projectValues),
    {
      onSuccess: () => {
        navigate('/home/projets');
        toast.success('Le projet a été mis à jour');
      },
    },
  );
  const validationSchema = Yup.object({
    name: Yup.string(),
    description: Yup.string(),
    logo: Yup.string(),
    startDate: Yup.date(),
    endDate: Yup.date(),
    priority: Yup.string(),
  });

  return (
    <>
      {isLoading || isUpdate}
      {Object.keys(project).length && (
        <Formik
          initialValues={project}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            updateProject(values);
          }}>
          {(props) => <FormProjet formik={props} />}
        </Formik>
      )}
    </>
  );
};
export default EditProjects;
