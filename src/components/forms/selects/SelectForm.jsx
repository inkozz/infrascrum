const SelectForm = ({ data, formik, name }) => (
  <div>
    <select
      name={name}
      value={formik.values[name]}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}>
      <option defaultValue="">Select {name}</option>
      {data &&
        data.map((element) => (
          <option key={element.id} id={element.id} value={element.name}>
            {element.name}
          </option>
        ))}
    </select>
  </div>
);

export default SelectForm;
