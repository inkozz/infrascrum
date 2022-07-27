const Select = ({ data, value, setValue, name, id }) => (
  <div>
    <select
      className="rounded-md text-gray-700 "
      defaultValue=""
      name={name}
      id={id}
      value={value}
      onChange={(e) => setValue(e.target.value)}>
      {data && data.map((element) => <option value={element.id} label={element.name} />)}
    </select>
    <p>
      Selected {name} : {value}
    </p>
  </div>
);
export default Select;
