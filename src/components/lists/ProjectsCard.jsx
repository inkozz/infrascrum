import { useFormik } from 'formik';
import * as Yup from 'yup';
const ProjectsCard = ({ project, name }) => {
  const formik = useFormik({
    initialValues: {
      name: name || '',
    },
    validationSchema: Yup.object({
      name: Yup.string(),
    }),
    onSubmit: (taskValues) => {
      saveFunction(taskValues);
    },
  });
  return (
    <option
      name="name"
      id="name"
      values={formik.values.name}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}>
      {project.name}
    </option>
  );
};
export default ProjectsCard;
