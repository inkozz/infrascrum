/* eslint-disable jsx-a11y/label-has-associated-control */
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useQuery } from 'react-query';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import SelectForm from './selects/SelectForm';
import { getProjects } from '../../data/getData';

const FormTask = ({
  mode,
  name,
  description,
  startDate,
  endDate,
  priority,
  users,
  status,
  roles,
  project,
  saveFunction,
  cancelFunction,
  isError,
}) => {
  const formik = useFormik({
    initialValues: {
      name,
      description,
      startDate,
      status: status || '',
      endDate,
      priority,
      users: users || '', // doit être un []
      roles,
      project,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required('Ce champ est obligatoire')
        .min(2, 'le Nom doit contenir au minimum 2 lettres'),
      description: Yup.string()
        .required('Ce champ est obligatoire')
        .max(500, 'La description ne peut contenir que maximum 500 caractéres'),
      startDate: Yup.date().required('Ce champ est obligatoire'),
      endDate: Yup.date().required('Ce champ est obligatoire'),
      priority: Yup.string().required('Ce champ est obligatoire'),
      assign: Yup.string().required('Ce champ est obligatoire'),
      roles: Yup.string().required('Ce champ est obligatoire'),
    }),
    onSubmit: (taskValues) => {
      saveFunction(taskValues);
      taskValues(taskValues);
    },
  });
  const { data: projects } = useQuery('projects', getProjects);
  useEffect(() => {
    if (isError) {
      toast('Il y a une erreur', { className: 'errorToast' });
    }
  }, [isError]);
  return (
    <form onSubmit={formik.handleSubmit}>
      {/* {mode !== 'edit' && (
        <div className="grid grid-cols-8 gap-x-8 border-b-2 border-primary pb-2 text-center">
          <div className="font-semibold text-lg">Projet</div>
          <div className="font-semibold text-lg">Description</div>
          <div className="font-semibold text-lg">Responsable</div>
          <div className="font-semibold text-lg">Collaborateurs</div>
          <div className="font-semibold text-lg">Rôle</div>
          <div className="font-semibold text-lg">Priorité</div>
          <div className="font-semibold text-lg">Date de début</div>
          <div className="font-semibold text-lg">Date de fin</div>
        </div>
      )} */}
      <div className="grid grid-cols-9 p-8 gap-8 text-center items-center mt-4 border hover:border-primary hover:shadow-xl">
        <div className="flex flex-col justify-around">
          <div className="flex justify-center items-center">
            <SelectForm data={projects} name="project" id={projects.id} formik={formik} />
          </div>
          {formik.touched.name && formik.errors.name && (
            <div className="absolute text-sm -bottom-5 text-red">
              {formik.errors.name}
            </div>
          )}
        </div>
        <div className="flex flex-col justify-around">
          <input
            type="text"
            name="description"
            id="description"
            value={formik.values.description}
            className="btn disabled border text-center focus:ring-gray-500 focus:border-gray-900 sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600 block"
            placeholder="Description"
          />
        </div>
        <div className="flex flex-col justify-around">
          <input
            disabled
            type="text"
            name="users"
            id="users"
            value={formik.values.users}
            className="btn disabled border text-center focus:ring-gray-500 focus:border-gray-900 sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600 block"
            placeholder="Responsable"
          />
        </div>
        <div className="flex flex-col justify-around">
          <select
            id="users"
            name="users"
            autoComplete="users"
            value={formik.values.users}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm block">
            <option value="" disabled selected>
              Select collaborateur
            </option>
            <option value="Collaborateur">Collaborateur</option>
          </select>
          {formik.touched.users && formik.errors.users && (
            <div className="absolute text-sm -bottom-5 text-red">
              {formik.errors.users}
            </div>
          )}
        </div>
        <div className="flex flex-col justify-around">
          <select
            id="roles"
            name="roles"
            autoComplete="roles"
            value={formik.values.roles}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm">
            <option value="front">Front-End</option>
            <option value="back">Back-End</option>
            <option value="full">FullStack</option>
            <option value="design">Designer</option>
            <option value="manager">Manager</option>
          </select>
          {formik.touched.roles && formik.errors.roles && (
            <div className="absolute text-sm -bottom-5 text-red">
              {formik.errors.roles}
            </div>
          )}
        </div>
        <div className="flex flex-col justify-around">
          <select
            id="priority"
            name="priority"
            autoComplete="priority"
            value={formik.values.priority}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm block">
            <option value="" disabled selected>
              Select priorité
            </option>
            <option value="En attente">En attente</option>
            <option value="En cours">En cours</option>
            <option value="Urgent">En priorité</option>
          </select>
          {formik.touched.priority && formik.errors.priority && (
            <div className="absolute text-sm -bottom-5 text-red">
              {formik.errors.priority}
            </div>
          )}
        </div>
        <div className="flex flex-col justify-around">
          <input
            type="date"
            name="startDate"
            id="startDate"
            value={formik.values.startDate}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="border text-center focus:ring-gray-500 focus:border-gray-900 sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600 block"
            placeholder="Nom du projet"
          />
          {formik.touched.startDate && formik.errors.startDate && (
            <div className="absolute text-sm -bottom-5 text-red">
              {formik.errors.startDate}
            </div>
          )}
        </div>

        <div className="flex flex-col justify-around">
          <input
            type="date"
            name="endDate"
            id="endDate"
            value={formik.values.endDate}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="border text-center focus:ring-gray-500 focus:border-gray-900 sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600 block"
            placeholder="Nom du projet"
          />
          {formik.touched.endDate && formik.errors.endDate && (
            <div className="absolute text-sm -bottom-5 text-red">
              {formik.errors.endDate}
            </div>
          )}
        </div>

        <div className="flex justify-around items-center">
          <button type="submit" disabled={!formik.isValid} className="btn primary">
            {mode !== 'edit' ? 'Créer' : 'Editer'}
          </button>
          <button
            type="button"
            className="btn cancel"
            onClick={cancelFunction}
            name="cancel">
            Annuler
          </button>
        </div>
      </div>

      {/* <td className="p-3 font-medium capitalize">
              <div className="flex justify-center items-center">

                <select
                  id="users"
                  name="users"
                  autoComplete="users"
                  value={formik.values.users || undefined}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm block">
                  <option value="" disabled selected>
                    Select collaborateurs
                  </option>
                  <option value="collab">Collab1</option>
                  <option value="collab2">Collab2</option>
                </select>
                {formik.touched.users && formik.errors.users && (
                  <div className="absolute text-sm -bottom-5 text-red">
                    {formik.errors.users}
                  </div>
                )}
              </div>
            </td> */}
    </form>
  );
};

export default FormTask;
