import { Formik } from 'formik';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useMutation, useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import FormProjet from '../components/forms/FormProjet';
import { getProjects } from '../data/getData';

const EditProjects = () => {
  const navigate = useNavigate();
  const [project, setProject] = useState({});
  const { isLoading } = useQuery('projects', async () => getProjects(), {
    onSuccess: (res) => {
      setProject(res.data);
    },
  });

  const { isLoading: isUpdate, mutate: updateProject } = useMutation(
    'projects',
    async (projectValues) => updateProject(projectValues),
    {
      onSuccess: () => {
        navigate('/home/projets');
        setProject(false);
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
      <Formik
        initialValues={project}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          updateProject(values);
        }}>
        {(props) => <FormProjet formik={props} />}
      </Formik>
      )
    </>
  );
};
export default EditProjects;
