const FormTask = ({ formik }) => {
  console.log('oui');
  // const submitTask = () => {
  //   addTask(formik.values);
  //   console.log(formik.values);
  // };
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col items-center justify-center w-1/2 bg-white shadow rounded-3xl p-4">
        <div className="flex items-center justify-center space-x-5">
          <div className="h-14 w-14 rounded-full flex flex-shrink-0 justify-center items-center">
            <img src="/public/img/logoInfra.png" alt="logo" />
          </div>
          <div className="block font-semibold text-2xl self-start text-gray-700">
            <h2 className="leading-relaxed">Ajouter une tâche</h2>
          </div>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="">
            <div className="flex flex-col">
              <div className="flex items-center">
                <div className="flex flex-col">
                  <label htmlFor="name">
                    Nom de la tache :
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="px-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      placeholder="Event title"
                    />
                  </label>
                  {formik.touched.name && formik.errors.name && (
                    <div className=" text-sm text-red-600">{formik.errors.name}</div>
                  )}
                  <label htmlFor="taskDescription">
                    Description :
                    <input
                      type="text"
                      name="taskDescription"
                      id="taskDescription"
                      value={formik.values.taskDescription}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="px-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      placeholder="Event title"
                    />
                  </label>
                  {formik.touched.taskDescription && formik.errors.taskDescription && (
                    <div className=" text-sm text-red-600">
                      {formik.errors.taskDescription}
                    </div>
                  )}
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex flex-col w-64 relative mt-2">
                  <label htmlFor="dateB">
                    Date de début :
                    <input
                      type="date"
                      id="startDate"
                      name="startDate"
                      value={formik.values.startDate}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="px-2 py-1 my-2 rounded focus:outline-none focus:ring-2 focus:ring-[#755342] block"
                    />
                  </label>
                  {formik.touched.startDate && formik.errors.startDate && (
                    <div className="">{formik.errors.startDate}</div>
                  )}
                </div>
                <div className="flex flex-col w-64 relative mt-2">
                  <label htmlFor="endDate">
                    Date de fin :
                    <input
                      type="date"
                      id="endDate"
                      name="endDate"
                      value={formik.values.endDate}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="px-2 py-1 my-2 rounded focus:outline-none focus:ring-2 focus:ring-[#755342] block"
                    />
                  </label>
                  {formik.touched.endDate && formik.errors.endDate && (
                    <div className="">{formik.errors.endDate}</div>
                  )}
                </div>
              </div>
              <div className="col-span-3 sm:col-span-2 relative">
                <label htmlFor="type" className="block text-sm font-medium text-gray-700">
                  Priority
                  <select
                    id="priority"
                    name="priority"
                    autoComplete="priority"
                    value={formik.values.priority}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm">
                    <option value="high">Elevée</option>
                    <option value="mid">Normale</option>
                    <option value="low">Basse</option>
                  </select>
                </label>
                {formik.touched.priority && formik.errors.priority && (
                  <div className="absolute -bottom-5 text-sm text-red-600">
                    {formik.errors.priority}
                  </div>
                )}
              </div>
              <div className="col-span-3 sm:col-span-2 relative">
                <label htmlFor="type" className="block text-sm font-medium text-gray-700">
                  Assign
                  <select
                    id="assign"
                    name="assign"
                    autoComplete="assign"
                    value={formik.values.assign}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm">
                    <option value="collab1">collab1</option>
                    <option value="collab2">collab2</option>
                    <option value="collab3">collab3</option>
                  </select>
                </label>
                {formik.touched.assign && formik.errors.assign && (
                  <div className="absolute -bottom-5 text-sm text-red-600">
                    {formik.errors.assign}
                  </div>
                )}
              </div>
              <div className="col-span-3 sm:col-span-2 relative">
                <label htmlFor="type" className="block text-sm font-medium text-gray-700">
                  Roles
                  <select
                    id="roles"
                    name="roles"
                    autoComplete="roles"
                    value={formik.values.roles}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm">
                    <option value="Designer">Designer</option>
                    <option value="Front-End">Front-End</option>
                    <option value="Back-End">Back-End</option>
                  </select>
                </label>
                {formik.touched.roles && formik.errors.roles && (
                  <div className="absolute -bottom-5 text-sm text-red-600">
                    {formik.errors.roles}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="pt-4 flex items-center justify-center space-x-4">
              <button
                type="button"
                className="bg-green-500 hover:bg-yellow-300 p-2 mt-4 mr-4 w-48 rounded text-white">
                Annuler
              </button>
            </div>
            <div className="pt-4 flex items-center justify-center space-x-4">
              <div className=" flex flex-col items-center justify-center mx-auto w-2/3">
                <button
                  // onClick={submitTask}
                  type="submit"
                  className="bg-primary hover:bg-gray-800 p-2 mt-4 w-48 rounded text-white">
                  Enregistrer
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormTask;
