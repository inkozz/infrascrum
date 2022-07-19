import Select from 'react-select';
import { addTask } from '../../data/getData';

const FormTask = ({ formik }) => {
  // const submitTask = () => {
  //   addTask(formik.values);
  //   console.log(formik.values);
  // };
  const optionsPriority = [
    { value: 'low', label: 'Basse priorité' },
    { value: 'high', label: 'Haute priorité' },
    { value: 'normal', label: 'Priorité normale' },
  ];
  const optionsAssign = [{ value: 'lesgens', label: 'Les gens' }];
  const optionsRole = [
    { value: 'designer', label: 'Designer' },
    { value: 'backend', label: 'Backend' },
    { value: 'frontend', label: 'Front-End' },
  ];

  const MySelectPriority = () => <Select options={optionsPriority} />;
  const MySelectAssign = () => <Select options={optionsAssign} />;
  const MySelectRole = () => <Select options={optionsRole} />;

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
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex flex-col ml-3">
                  <label htmlFor="dateDebut" />
                  Date de début :
                  <div className=" focus-within:text-gray-600 text-gray-400">
                    <input
                      type="text"
                      name="dateDebut"
                      id="dateDebut"
                      value={formik.values.dateDebut}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      placeholder="25/02/2020"
                    />
                    {formik.touched.dateDebut && formik.errors.dateDebut && (
                      <div className=" text-sm text-red-600">
                        {formik.errors.dateDebut}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="datefin" />
                  Date de fin
                  <div className=" focus-within:text-gray-600 text-gray-400">
                    <input
                      type="text"
                      name="dateFin"
                      id="dateFin"
                      value={formik.values.dateFin}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      placeholder="25/02/2020"
                    />
                    {formik.touched.dateFin && formik.errors.dateFin && (
                      <div className=" text-sm text-red-600">{formik.errors.dateFin}</div>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <label htmlFor="status" />
                Status
                <MySelectPriority
                  value={formik.values.status}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.status && formik.errors.status && (
                  <div className=" text-sm text-red-600">{formik.errors.status}</div>
                )}
              </div>
              <div className="flex flex-col">
                <label htmlFor="assign" />
                Assign
                <MySelectAssign />
                {formik.touched.assign && formik.errors.assign && (
                  <div className="absolute text-sm text-red-600">
                    {formik.errors.assign}
                  </div>
                )}
              </div>
              <div className="flex flex-col">
                <label htmlFor="roles" />
                Roles
                <MySelectRole />
                {formik.touched.roles && formik.errors.roles && (
                  <div className="absolute text-sm text-red-600">
                    {formik.errors.roles}
                  </div>
                )}
              </div>
            </div>
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
        </form>
      </div>
    </div>
  );
};

export default FormTask;
