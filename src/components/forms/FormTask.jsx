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
                  <label htmlFor="Name" />
                  Nom de la tache :
                  <input
                    type="text"
                    name="Name"
                    id="Name"
                    value={formik.values.Name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="px-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    placeholder="Event title"
                  />
                  {formik.touched.Name && formik.errors.Name && (
                    <div className=" text-sm text-red-600">{formik.errors.Name}</div>
                  )}
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex flex-col ml-3">
                  <label htmlFor="DateDebut" />
                  Date de début :
                  <div className=" focus-within:text-gray-600 text-gray-400">
                    <input
                      type="text"
                      name="DateDebut"
                      id="DateDebut"
                      value={formik.values.DateDebut}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      placeholder="25/02/2020"
                    />
                    {formik.touched.DateDebut && formik.errors.DateDebut && (
                      <div className=" text-sm text-red-600">
                        {formik.errors.DateDebut}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="DateDebut" />
                  Date de fin
                  <div className=" focus-within:text-gray-600 text-gray-400">
                    <input
                      type="text"
                      name="DateFin"
                      id="DateFin"
                      value={formik.values.DateFin}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      placeholder="25/02/2020"
                    />
                    {formik.touched.DateFin && formik.errors.DateFin && (
                      <div className=" text-sm text-red-600">{formik.errors.DateFin}</div>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <label htmlFor="Status" />
                Status
                <MySelectPriority
                  value={formik.values.Status}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.Status && formik.errors.Status && (
                  <div className=" text-sm text-red-600">{formik.errors.Status}</div>
                )}
              </div>
              <div className="flex flex-col">
                <label htmlFor="Assign" />
                Assign
                <MySelectAssign />
                {formik.touched.Assign && formik.errors.Assign && (
                  <div className="absolute text-sm text-red-600">
                    {formik.errors.Assign}
                  </div>
                )}
              </div>
              <div className="flex flex-col">
                <label htmlFor="Roles" />
                Roles
                <MySelectRole />
                {formik.touched.Roles && formik.errors.Roles && (
                  <div className="absolute text-sm text-red-600">
                    {formik.errors.Roles}
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
