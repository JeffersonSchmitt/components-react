import useSort from "../../hooks/use-sort";
import Table from "./Table";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";

function SortableTable(props) {

  const { config, data } = props;

  const {
    sortBy,
    sortOrder,
    sortedData,
    setSortColumn } = useSort(data, config);

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }
    return {
      ...column,
      header: () => <th className="cursor-pointer hover:bg-gray-100"
        onClick={() => setSortColumn(column.label)}
      >
        <div className="flex items-center">
          {getIcons(column.label, sortBy, sortOrder)}
          {column.label}
        </div>
      </th>
    }
  });

  return (
    <Table {...props} data={sortedData} config={updatedConfig} />
  );
}

function getIcons(label, sortby, sortOrder) {
  if (label !== sortby) {
    return <div>
      <GoTriangleDown />
      <GoTriangleUp />
    </div>
  }

  if (sortOrder === null) {
    return <div>
      <GoTriangleDown />
      <GoTriangleUp />
    </div>
  } else if (sortOrder === 'asc') {
    return <div>
      <GoTriangleUp />
    </div>
  } else if (sortOrder === 'desc') {
    return <div>
      <GoTriangleDown />
    </div>
  }
}

export default SortableTable;