import React from "react";
import skills from "./skills.json";

const Table = ({ tableData }) => {
  return (
    <div>
      <h2>{tableData.title}</h2>
      <table>
        <thead>
          <tr>
            <th />
            <th>Elementair niveau</th>
            <th>Doorgroeiniveau</th>
            <th>Integatieniveau</th>
            <th>Expertniveau</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th />
            <th>Elementair niveau</th>
            <th>Doorgroeiniveau</th>
            <th>Integatieniveau</th>
            <th>Expertniveau</th>
          </tr>
        </tfoot>
        <tbody>{tableData.data.map(value => <Row rowData={value} />)}</tbody>
      </table>
    </div>
  );
};

const Row = ({ rowData }) => {
  return (
    <tr>
      <th>{rowData.title}</th>
      {rowData.data.map(columnData => <Column columnData={columnData} />)}
    </tr>
  );
};

const Column = ({ columnData }) => {
  if (typeof columnData === "string") {
    return <td>{columnData}</td>;
  } else {
    return <td>{columnData.map(value => <p>{value}</p>)}</td>;
  }
};

export default class extends React.Component {
  render() {
    return (
      <div className="content">
        <h1>Skills</h1>
        <p>
          Hieronder ziet u een competentiematrix. Dit geeft uitleg over mijn
          soft-skills. Voor meer informatie kunt u{" "}
          <a href="/Competentiematrix-uitleg.pdf">deze pdf</a> bekijken.
        </p>
        {skills.map(skill => <Table tableData={skill} />)}
      </div>
    );
  }
}
