/* eslint-disable jsx-a11y/label-has-associated-control */
import { useFormik } from 'formik';
import * as Yup from 'yup';

const FormProjet = ({
  mode,
  name,
  description,
  // logo,
  // users,
  startDate,
  endDate,
  status,
  saveFunction,
  cancelFunction,
}) => {
  const formik = useFormik({
    initialValues: {
      name: name || '',
      description: description || '',
      // logo: '',
      startDate: startDate || '',
      endDate: endDate || '',
      update: new Date(),
      status: status || '',
      // users: users || '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required('Ce champ est obligatoire')
        .min(2, 'le Nom doit contenir au minimum 2 lettres'),
      // logo: Yup.string(),
      description: Yup.string(),

      startDate: Yup.date().required('Ce champ est obligatoire'),
      endDate: Yup.date().required('Ce champ est obligatoire'),
      status: Yup.string().required('Ce champ est obligatoire'),
      users: Yup.string(),
    }),
    onSubmit: (projectValues) => {
      saveFunction(projectValues);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      {/* {mode !== 'edit' && (
        <div className="grid grid-cols-8 gap-x-8 border-b-2 border-primary pb-2 text-center">
          <div className="font-semibold text-lg">Projet</div>
          <div className="font-semibold text-lg">Responsable</div>
          <div className="font-semibold text-lg">Date du début</div>
          <div className="font-semibold text-lg">Date de fin</div>
          <div className="font-semibold text-lg">Mise à jour</div>
          <div className="font-semibold text-lg">Status</div>
          <div className="font-semibold text-lg">Collaborateurs</div>
          <div className="font-semibold text-lg">Options</div>
        </div>
      )} */}
      <div className="grid grid-cols-8 p-8 gap-8 text-center items-center mt-4 border hover:border-primary ">
        <div className="flex flex-col justify-around">
          <input
            type="text"
            name="name"
            id="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="border text-center focus:ring-gray-500 focus:border-gray-900 sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600 block"
            placeholder="Nom du projet"
          />
          {formik.touched.name && formik.errors.name && (
            <div className="absolute text-sm -bottom-5 text-red">
              {formik.errors.name}
            </div>
          )}
        </div>

        {/* {mode !== 'edit' && <label htmlFor="name">Responsable</label>} */}
        <div className="flex flex-col justify-around">
          <input
            disabled
            type="text"
            name="responsable"
            id="responsable"
            value={formik.values.responsable}
            className="btn disabled border text-center focus:ring-gray-500 focus:border-gray-900 sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600 block"
            placeholder="Nom du responsable"
          />
        </div>

        {/* {mode !== 'edit' && <label htmlFor="name">Date de début</label>} */}
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

        {/* {mode !== 'edit' && <label htmlFor="name">Date de fin</label>} */}
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

        {/* {mode !== 'edit' && <label htmlFor="name">Mise à jour</label>} */}
        <div className="flex flex-col justify-around">
          <input
            disabled
            type="text"
            name="update"
            id="update"
            value={formik.values.update}
            className="btn disabled border text-center focus:ring-gray-500 focus:border-gray-900 sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600 block"
            placeholder="Nom du projet"
          />
          {formik.touched.update && formik.errors.update && (
            <div className="absolute text-sm -bottom-5 text-red">
              {formik.errors.status}
            </div>
          )}
        </div>

        {/* {mode !== 'edit' && <label htmlFor="name">Status</label>} */}
        <div className="flex flex-col justify-around">
          <select
            id="status"
            name="status"
            autoComplete="status"
            value={formik.values.status}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm block">
            <option value="" disabled selected>
              Select priorité
            </option>
            <option value="En attente">En attente</option>
            <option value="En cours">En cours</option>
            <option value="Urgent">Urgent</option>
          </select>
          {formik.touched.status && formik.errors.status && (
            <div className="absolute text-sm -bottom-5 text-red">
              {formik.errors.status}
            </div>
          )}
        </div>

        <div className="flex flex-col justify-around">
          <select
            disabled
            id="users"
            name="users"
            autoComplete="users"
            value={formik.values.users}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="btn border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm block">
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

export default FormProjet;
