import { useState } from 'react';
import DropDown from './../components/Dropdown';

function DropDownPage() {

  const [selection, setSelection] = useState(null);

  const handleSelect = (option) => {
    setSelection(option);
  }

  const items = [
    {
      id: 0,
      label: 'Option 1',
      value: 'option_1'
    },
    {
      id: 1,
      label: 'Option 2',
      value: 'option_2'
    },
    {
      id: 2,
      label: 'Option 3',
      value: 'option_3'
    }
  ]

  return (
    <div className="flex">
      <DropDown items={items} value={selection} onChange={handleSelect} />
    </div>
  );
}

export default DropDownPage;