import { useFormik } from 'formik';
import * as Yup from 'yup';

const FormProjet = ({
  mode,
  name,
  description,
  logo,
  startDate,
  endDate,
  priority,
  saveFunction,
  cancelFunction,
}) => {
  const formik = useFormik({
    initialValues: {
      name: name || '',
      description: description || '',
      logo: logo || '',
      startDate: startDate || '',
      endDate: endDate || '',
      priority: priority || '',
    },
    validationSchema: Yup.object({
      name: Yup.string(),
      description: Yup.string(),
      logo: Yup.string(),
      startDate: Yup.date(),
      endDate: Yup.date(),
      priority: Yup.string(),
    }),
    onSubmit: (projectValues) => {
      saveFunction(projectValues);
    },
  });

  return (
    <div>
      <form
        onSubmit={formik.handleSubmit}
        name="projetForm"
        className="border-2 border-primary">
        <table className="table w-full space-y-6 text-sm">
          <thead className="text-white">
            <tr>
              <th className="p- text-primary bg-gray-100 rounded-tl-lg">
                {mode !== 'edit' && <label htmlFor="name"> Nom du projet </label>}
                <p className=" whitespace-no-wrap cursor-pointer hover:text-primary">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="border text-center focus:ring-gray-500 focus:border-gray-900 sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    placeholder="Nom du projet"
                  />
                  {formik.touched.name && formik.errors.name && (
                    <div className="">{formik.errors.name}</div>
                  )}
                </p>
              </th>
              <th className="p-3 text-primary bg-gray-100 rounded-tl-lg">
                {mode !== 'edit' && (
                  <label htmlFor="responsable">Nom du responsable </label>
                )}
                <div className="flex justify-center items-center">
                  <img src="/img/ben.jpeg" className="w-10 h-10 rounded-full" alt="" />
                  <p className="whitespace-no-wrap pl-2">ceoName</p>
                </div>
              </th>
              <th className="p-3 text-primary bg-gray-100 rounded-tl-lg">
                {mode !== 'edit' && <label htmlFor="startDate">Date du début </label>}
                <div className="flex justify-center items-center">
                  <input
                    type="date"
                    id="startDate"
                    name="startDate"
                    value={formik.values.startDate}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="px-2 py-1 my-2 rounded focus:outline-none focus:ring-2 focus:ring-[#755342] block"
                  />
                  {formik.touched.startDate && formik.errors.startDate && (
                    <div className="">{formik.errors.startDate}</div>
                  )}
                </div>
              </th>
              <th className="p-3 text-primary bg-gray-100 rounded-tl-lg">
                {mode !== 'edit' && <label htmlFor="endDate">Date de fin</label>}
                <div className="flex justify-center items-center">
                  <input
                    type="date"
                    id="endDate"
                    name="endDate"
                    value={formik.values.endDate}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="px-2 py-1 my-2 rounded focus:outline-none focus:ring-2 focus:ring-[#755342] block"
                  />
                  {formik.touched.endDate && formik.errors.endDate && (
                    <div className="">{formik.errors.endDate}</div>
                  )}
                </div>
              </th>
              <th className="p-3 text-primary bg-gray-100 rounded-tl-lg">
                {mode !== 'edit' && <label htmlFor="priority">Status</label>}
                <select
                  id="priority"
                  name="priority"
                  autoComplete="priority"
                  value={formik.values.priority}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm">
                  <option value="Waiting">En attente</option>
                  <option value="Proccess">En cours</option>
                  <option value="Priority">En priorité</option>
                </select>
                {formik.touched.priority && formik.errors.priority && (
                  <div className="absolute -bottom-5 text-sm text-red-600">
                    {formik.errors.priority}
                  </div>
                )}
              </th>
              <th className="p-3 text-primary bg-gray-100 rounded-tl-lg">
                {mode !== 'edit' && <label htmlFor="collaborators">Collaborateurs</label>}
                <select
                  id="collaborator"
                  name="collaborator"
                  autoComplete="collaborator"
                  value={formik.values.collaborator}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm">
                  <option value="waiting">Collab1</option>
                  <option value="process">Collab2</option>
                </select>
                {formik.touched.collaborator && formik.errors.collaborator && (
                  <div className="absolute -bottom-5 text-sm text-red-600">
                    {formik.errors.collaborator}
                  </div>
                )}
              </th>
              <th className="p-3 text-primary bg-gray-100 rounded-tl-lg">
                {mode !== 'edit' && <label htmlFor="lastmaj">Dernière maj</label>}
              </th>
            </tr>
          </thead>
          <tbody />
        </table>
        <div className="flex justify-end p-4">
          <button type="submit" disabled={!formik.isValid} className="btn primary mr-4">
            {mode !== 'edit' ? 'Créer' : 'Editer'}
          </button>
          <button
            type="button"
            className="btn cancel"
            onClick={cancelFunction}
            data-cy="cancel">
            Annuler
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormProjet;
