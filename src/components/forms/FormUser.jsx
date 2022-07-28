const FormUser = ({ formik }) => (
  <div className="w-full bg-slate-200 flex flex-col justify-center sm:py-12">
    <div className="relative sm:max-w-xl sm:mx-auto">
      <div className="relative bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
        <div className="max-w-md mx-auto">
          <div className="flex items-center space-x-5">
            <div className="h-14 w-14 rounded-full flex flex-shrink-0 justify-center items-center">
              <img src="/public/img/logoInfra.png" alt="logo" />
            </div>
            <div className="block font-semibold text-2xl self-start text-gray-700">
              <h2 className="leading-relaxed">Formulaire de création de compte</h2>
            </div>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div className="divide-y divide-gray-200">
              <div className=" text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="flex">
                  <div className="flex items-center space-x-4">
                    <div className="flex flex-col mr-3">
                      <label htmlFor="name">
                        Nom
                        <input
                          type="text"
                          name="name"
                          id="name"
                          value={formik.values.name}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className="px-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                          placeholder="Ajoutez un nom"
                        />
                      </label>
                      {formik.touched.name && formik.errors.name && (
                        <div className="absolute -bottom-3 text-sm text-red-600">
                          {formik.errors.name}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex flex-col ml-3">
                      <label htmlFor="lastName">
                        Nom de famille
                        <input
                          type="text"
                          name="lastName"
                          id="lastName"
                          value={formik.values.lastName}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className="px-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                          placeholder="Ajoutez un nom de famille"
                        />
                      </label>
                      {formik.touched.lastName && formik.errors.lastName && (
                        <div className="absolute -bottom-3 text-sm text-red-600">
                          {formik.errors.lastName}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex items-center space-x-4">
                    <div className="flex flex-col">
                      <label htmlFor="password">
                        Mot de passe
                        <div className="relative focus-within:text-gray-600 text-gray-400 mr-4">
                          <input
                            type="password"
                            name="password"
                            id="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="pr-4 pl-8 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                            placeholder="*******"
                          />
                          {formik.touched.password && formik.errors.password && (
                            <div className="absolute -bottom-3 text-sm text-red-600">
                              {formik.errors.password}
                            </div>
                          )}
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex flex-col">
                      <label htmlFor="verifPassword">
                        Vérif du mot de passe!
                        <div className="relative focus-within:text-gray-600 text-gray-400">
                          <input
                            type="password"
                            name="verifPassword"
                            id="verifPassword"
                            value={formik.values.verifPassword}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="pr-4 pl-8 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                            placeholder="********"
                          />
                          {formik.touched.verifPassword &&
                            formik.errors.verifPassword && (
                              <div className="absolute -bottom-3 text-sm text-red-600">
                                {formik.errors.verifPassword}
                              </div>
                            )}
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="ville">
                    Ville
                    <input
                      type="text"
                      name="city"
                      id="city"
                      value={formik.values.city}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="px-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      placeholder="Optional"
                    />
                  </label>
                  {formik.touched.city && formik.errors.city && (
                    <div className="absolute -bottom-3 text-sm text-red-600">
                      {formik.errors.city}
                    </div>
                  )}
                </div>

                <div className="flex flex-col">
                  <label htmlFor="email">
                    Adresse mail
                    <input
                      type="text"
                      name="email"
                      id="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      placeholder="Optional"
                    />
                  </label>
                  {formik.touched.email && formik.errors.email && (
                    <div className="absolute -bottom-3 text-sm text-red-600">
                      {formik.errors.email}
                    </div>
                  )}
                </div>
                <div className="flex flex-col">
                  <label htmlFor="tel">
                    Téléphone
                    <input
                      type="number"
                      name="tel"
                      id="tel"
                      value={formik.values.tel}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      placeholder="Optional"
                    />
                  </label>
                  {formik.touched.tel && formik.errors.tel && (
                    <div className="absolute -bottom-3 text-sm text-red-600">
                      {formik.errors.tel}
                    </div>
                  )}
                </div>
                <div className="flex flex-col">
                  <div className="col-span-3 sm:col-span-2 relative">
                    <label
                      htmlFor="type"
                      className="block text-sm font-medium text-gray-700">
                      Roles
                      <select
                        id="role"
                        name="role"
                        autoComplete="role"
                        value={formik.values.role}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm">
                        <option value="front">Front-End</option>
                        <option value="back">Back-End</option>
                        <option value="full">FullStack</option>
                        <option value="design">Designer</option>
                        <option value="manager">Manager</option>
                      </select>
                    </label>
                    {formik.touched.role && formik.errors.role && (
                      <div className="absolute -bottom-5 text-sm text-red-600">
                        {formik.errors.role}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-4 flex items-center justify-center space-x-4">
              {/* <div className=" flex flex-col items-center justify-center mx-auto w-2/3"> */}
              <button
                type="submit"
                className="bg-primary hover:bg-gray-800 p-2 mt-4 w-48 rounded text-white"
                // onClick={submitUser}
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

export default FormUser;
