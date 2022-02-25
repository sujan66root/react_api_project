import { React } from "react";

function DataTable({ observation }) {
  return (
    <div>
      <div className="container">
        <h1 className="text-center">Data Table</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Parameter Name</th>
              <th scope="col">Value</th>
            </tr>
            {observation.map((obs) => {
              // console.log(obs.data[0]);
              // console.log(obs.data.length - 1);
              return (
                <tr key={obs.parameter_name}>
                  <td>{obs.parameter_name}</td>
                  <td>{obs.data[obs.data.length - 1].value}</td>
                </tr>
              );
            })}
          </thead>
        </table>
      </div>
    </div>
  );
}

export default DataTable;
