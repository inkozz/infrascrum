const SelectForm = ({ data, formik, name, id }) => {
  return (
    <div>
      <select
        defaultValue=""
        name="name"
        id={id}
        values={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}>
        <option value="" disabled selected>
          Select {name}
        </option>
        {data && data.map((element) => <option>{element.name}</option>)}
      </select>
    </div>
  );
};

export default SelectForm;
