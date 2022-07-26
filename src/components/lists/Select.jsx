const Select = ({ data, value, setValue, name, id }) => {
  return (
    <div>
      <select
        defaultValue=""
        name={name}
        id={id}
        value={value}
        onChange={(e) => setValue(e.target.value)}>
        {data &&
          data.map((element) => (
            <option value={element.id} label={element.name}></option>
          ))}
      </select>
      <p>
        Selected {name} : {value}
      </p>
    </div>
  );
};
export default Select;
