import Select from 'react-select';

const FormProjet = ({ formik }) => {
  const options = [
    { value: 'priori', label: 'Urgent' },
    { value: 'impo', label: 'Important' },
    { value: 'noimport', label: 'Non-important' },
  ];

  const MyComponent = () => <Select options={options} />;

  return (
    <div className="w-full bg-slate-200 flex flex-col justify-center sm:py-12">
      <div className="relative sm:max-w-xl sm:mx-auto">
        <div className="relative bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
          <div className="max-w-md mx-auto">
            <div className="flex items-center space-x-5">
              <div className="h-14 w-14 rounded-full flex flex-shrink-0 justify-center items-center">
                <img src="/public/img/logoInfra.png" alt="logo" />
              </div>
              <div className="block font-semibold text-2xl self-start text-gray-700">
                <h2 className="leading-relaxed">Formulaire Collaborateurs</h2>
              </div>
            </div>
            <form onSubmit={formik.handleSubmit}>
              <div className="divide-y divide-gray-200">
                <div className=" text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="flex flex-col">
                    <label htmlFor="NameProjet">
                      Nom du projet
                      <input
                        type="text"
                        name="NameProjet"
                        id="NameProjet"
                        value={formik.values.NameProjet}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="px-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                        placeholder="Nom"
                      />
                    </label>
                    {formik.touched.NameProjet && formik.errors.NameProjet && (
                      <div className="">{formik.errors.NameProjet}</div>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="Describe">
                      Description du projet
                      <textarea
                        type="text"
                        name="Describe"
                        id="Describe"
                        value={formik.values.Describe}
                        onChange={formik.handleChange}
                        cols="10"
                        rows="2"
                        onBlur={formik.handleBlur}
                        className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                        placeholder="describe"
                      />
                    </label>
                    {formik.touched.Describe && formik.errors.Describe && (
                      <div className="">{formik.errors.Describe}</div>
                    )}
                  </div>

                  <div className="flex flex-col w-64 relative mt-2">
                    <label htmlFor="StartDate">
                      Date de début :
                      <input
                        type="date"
                        id="StartDate"
                        name="StartDate"
                        value={formik.values.StartDate}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="px-2 py-1 my-2 rounded focus:outline-none focus:ring-2 focus:ring-[#755342] block"
                      />
                    </label>
                    {formik.touched.StartDate && formik.errors.StartDate && (
                      <div className="">{formik.errors.StartDate}</div>
                    )}
                  </div>
                  <div className="flex flex-col w-64 relative mt-2">
                    <label htmlFor="EndDate">
                      Date de fin :
                      <input
                        type="date"
                        id="EndDate"
                        name="EndDate"
                        value={formik.values.EndDate}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="px-2 py-1 my-2 rounded focus:outline-none focus:ring-2 focus:ring-[#755342] block"
                      />
                    </label>
                    {formik.touched.EndDate && formik.errors.EndDate && (
                      <div className="">{formik.errors.EndDate}</div>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="Priority" />
                    Priorité
                    <div>
                      <MyComponent />
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-4 flex items-center justify-center space-x-4">
                {/* <div className=" flex flex-col items-center justify-center mx-auto w-2/3"> */}
                <button
                  type="submit"
                  className="bg-primary hover:bg-gray-800 p-2 mt-4 w-48 rounded text-white"
                  // onClick={buttonQuiAfficheLesDonnesDuFormulaire}
                >
                  Enregistrer
                </button>
                {/* </div> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormProjet;
