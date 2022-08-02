const SelectForm = ({ data, formik, name }) => (
  <div>
    <select
      name="name"
      values={formik.values.name}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}>
      <option defaultValue="">Select {name}</option>
      {data &&
        data.map((element) => (
          <option key={element.id} id={element.id}>
            {element.name}
          </option>
        ))}
    </select>
    {console.log(data)}
  </div>
);

export default SelectForm;
