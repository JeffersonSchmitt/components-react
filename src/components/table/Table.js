import { Fragment } from "react";

function Table({ data, config, keyFn }) {

  const renderedHeaders = config.map((header) => {
    if (header.header) {
      return <Fragment key={header.label}>{header.header()}</Fragment>
    }
    return (
      <th key={header.label} >
        {header.label}
      </th>
    );
  });

  const renderedRows = data.map((rowData) => {
    const renderedCells = config.map((column) => {
      return (<td className="p-2" key={column.label}>{column.render(rowData)}</td>);
    });
    return (
      <tr className="border-b" key={keyFn(rowData)}>
        {renderedCells}
      </tr>
    );

  });

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">
          {renderedHeaders}
        </tr>
      </thead>
      <tbody>
        {renderedRows}
      </tbody>
    </table>
  );
}

export default Table




//exemplo estático
// function Table({ data }) {

//   const renderedItems = data.map((fruit) => {
//     return (
//       <tr className="border-b" key={fruit.name}>
//         <td className="p-3">{fruit.name}</td>
//         <td className="p-3">
//           <div className={`p-3 m-2 ${fruit.color}`}>
//           </div>
//         </td>
//         <td className="p-3">{fruit.score}</td>
//       </tr>
//     );
//   });

//   return (
//     <table className="table-auto border-spacing-2">
//       <thead>
//         <tr className="border-b-2">
//           <th>Fruit</th>
//           <th>Color</th>
//           <th>Score</th>
//         </tr>
//       </thead>
//       <tbody>
//         {renderedItems}
//       </tbody>
//     </table>
//   );
// }

// export default Table