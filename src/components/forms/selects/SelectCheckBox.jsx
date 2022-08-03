import { updateProject } from '../../../data/getData';
import { useEffect, useState } from 'react';
const SelectCheckBox = ({ data, element }) => {
  console.log('element :::', element);
  const [isChecked, setIsChecked] = useState([]);
  const idArray = [];
  const toggle = (e) => {
    const isCheckedEvent = e.target.checked;
    const value = e.target.value;
    if (isCheckedEvent) {
      setIsChecked([...isChecked, value]);
    } else {
      const removeChecked = isChecked.filter((val) => val !== value);
      setIsChecked([...removeChecked]);
    }
  };
  const confirmValue = () => {
    console.log('isChecked :::', isChecked);
    updateProject({ id: element, users: isChecked });
  };
  useEffect(() => {
    console.log(isChecked);
  }, [isChecked]);
  return (
    <div className="flex flex-col items-center justify-center">
      {data.users.map((element) => (
        <div className="flex flex-row items-center" key={element.id}>
          <input
            value={element.id}
            defaultChecked={isChecked.includes(element.id)}
            onChange={toggle}
            type="checkbox"></input>
          <label>{element.name}</label>
        </div>
      ))}
      <button type="submit" className="btn primary" onClick={confirmValue}>
        Valider
      </button>
    </div>
  );
};
export default SelectCheckBox;
