const SelectForm = ({ data, formik, name, id }) => (
  <div>
    <select
      name="name"
      id={id}
      key={id}
      values={formik.values.name}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}>
      <option defaultValue="">Select {name}</option>
      {data && data.map((element) => <option>{element.name}</option>)}
    </select>
  </div>
);

export default SelectForm;
