import { useEffect, useRef, useState } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

function DropDown({ items, value, onChange }) {

  const [isOpen, SetIsOpen] = useState(false);
  const divEl = useRef();

  useEffect(() => {
    const handler = (event) => {

      if (!divEl.current) {
        return;
      }

      if (!divEl.current.contains(event.target)) {
        SetIsOpen(false);
      }
    }

    return () => {
      document.removeEventListener('click', handler);
    }
  }, [])

  const handleClick = () => {
    SetIsOpen(!isOpen);
  }

  const handleOptionClick = (item) => {
    SetIsOpen(false);
    onChange(item);
  }

  const rederedItems = items.map((item) => {
    return (
      <div onClick={() => handleOptionClick(item)} key={item.id}>
        {item.label}
      </div>
    );
  })

  return (
    // <div className="w-48 relative">
    //   <div className="flex justify-between item-center cursor-pointer border rounded p-3 showdow bg-white w-full" onClick={handleClick}>
    //     {value?.label || 'Select...'}
    //     <GoChevronDown className="text-lg" />
    //   </div>
    //   {isOpen && <div className="aboslute top-full border rounded p-3 bg-white w-full">
    //     {rederedItems}
    //   </div>}
    // </div>

    <div ref={divEl} className="w-48 relative">

      <Panel className="flex justify-between item-center cursor-pointer" onClick={handleClick}>
        {value?.label || 'Select...'}
        <GoChevronDown className="text-lg" />
      </Panel>

      {isOpen && <Panel className="absolute top-full cursor-pointer">
        {rederedItems}
      </Panel>}

    </div>
  );
}

export default DropDown