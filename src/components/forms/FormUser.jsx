import Select from 'react-select';

const FormUser = ({ formik }) => {
  const options = [
    { value: 'front', label: 'Développer front-end' },
    { value: 'full', label: 'Développer full-stack' },
    { value: 'back', label: 'Développer back-end' },
    { value: 'design', label: 'Designer' },
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
                  <div className="flex">
                    <div className="flex items-center space-x-4">
                      <div className="flex flex-col mr-3">
                        <label htmlFor="Name" />
                        Nom
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
                          <div className="absolute -bottom-3 text-sm text-red-600">
                            {formik.errors.Name}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex flex-col ml-3">
                        <label htmlFor="LastName" />
                        Nom de famille
                        <input
                          type="text"
                          name="LastName"
                          id="LastName"
                          value={formik.values.LastName}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className="px-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                          placeholder="Event title"
                        />
                        {formik.touched.LastName && formik.errors.LastName && (
                          <div className="absolute -bottom-3 text-sm text-red-600">
                            {formik.errors.LastName}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex flex-col">
                      <label htmlFor="Birthday" />
                      Date de naissance
                      <div className="relative focus-within:text-gray-600 text-gray-400">
                        <input
                          type="text"
                          name="Birthday"
                          id="Birthday"
                          value={formik.values.Birthday}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                          placeholder="25/02/2020"
                        />
                        {formik.touched.Birthday && formik.errors.Birthday && (
                          <div className="absolute -bottom-3 text-sm text-red-600">
                            {formik.errors.Birthday}
                          </div>
                        )}
                        <div className="absolute left-3 top-2">
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="Adress" />
                    Adresse
                    <input
                      type="text"
                      name="Adress"
                      id="Adress"
                      value={formik.values.Adress}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="px-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      placeholder="Optional"
                    />
                    {formik.touched.Adress && formik.errors.Adress && (
                      <div className="absolute -bottom-3 text-sm text-red-600">
                        {formik.errors.Adress}
                      </div>
                    )}
                  </div>
                  <div className="flex">
                    <div className="flex flex-col mr-3">
                      <label htmlFor="Number" />
                      Numéro
                      <input
                        type="text"
                        name="Number"
                        id="Number"
                        value={formik.values.Number}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="px-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                        placeholder="Optional"
                      />
                      {formik.touched.Postal && formik.errors.Postal && (
                        <div className="absolute -bottom-3 text-sm text-red-600">
                          {formik.errors.Postal}
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col ml-3">
                      <label htmlFor="Postal" />
                      Code postal
                      <input
                        type="text"
                        name="Postal"
                        id="Postal"
                        value={formik.values.Postal}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="px-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                        placeholder="Optional"
                      />
                      {formik.touched.Postal && formik.errors.Postal && (
                        <div className="absolute -bottom-3 text-sm text-red-600">
                          {formik.errors.Postal}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="Email" />
                    Adresse mail
                    <input
                      type="text"
                      name="Email"
                      id="Email"
                      value={formik.values.Email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      placeholder="Optional"
                    />
                    {formik.touched.Email && formik.errors.Email && (
                      <div className="absolute -bottom-3 text-sm text-red-600">
                        {formik.errors.Email}
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="Tel" />
                    Téléphone
                    <input
                      type="number"
                      name="Tel"
                      id="Tel"
                      value={formik.values.Tel}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      placeholder="Optional"
                    />
                    {formik.touched.Tel && formik.errors.Tel && (
                      <div className="absolute -bottom-3 text-sm text-red-600">
                        {formik.errors.Tel}
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="Role" />
                    Rôle
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

export default FormUser;
