const Select = ({ data, value, setValue, name, id }) => (
  <div>
    <select
      className="rounded-md text-gray-700 "
      name={name}
      id={id}
      value={value}
      onChange={(e) => setValue(e.target.value)}>
      <option defaultValue="">Select {name}</option>
      {data &&
        data.map((element) => (
          <option key={element.id} value={element.id} label={element.name}>
            {element.name}
          </option>
        ))}
    </select>
    <p>
      Selected {name} : {value}
    </p>
  </div>
);
export default Select;
