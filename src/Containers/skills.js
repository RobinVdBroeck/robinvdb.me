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
          Omdat ik bezig ben met mijn toegepaste informatica opleiding bezit of
          ben ik bezig met het trainen van onderstaande skills:
        </p>
        <ul>
          <li>
            De professionele bachelor TI analyseert een probleem, vertaalt dit
            naar een IT context en geeft de informatiebehoeften van een
            organisatie gestructureerd weer door gebruik te maken van analyse-
            en modelleringstechnieken.
          </li>
          <li>
            De professionele bachelor TI verzamelt en verwerkt proces- en
            datagegevens, slaat ze op en stelt ze ter beschikking, zodanig dat
            deze op een correcte en efficiënte manier kunnen worden opgevraagd.
          </li>
          <li>
            De professionele bachelor TI ontwerpt, bouwt, documenteert en test
            kwalitatieve IT oplo ssingen.
          </li>
          <li>
            De professionele bachelor TI installeert, configureert, beveiligt,
            onderhoudt en ondersteunt IT oplossingen en past ze indien nodig aan
            zodat ze blijven beantwoorden aan de veranderende behoeften van een
            organisatie.
          </li>
          <li>
            De professionele bachelor TI handelt deontologisch en
            maatschappelijk verantwoord, conform bedrijfs- en
            organisatiecontext, regelgeving, best practices en strategieën
            vanuit eigen inzicht en kennis.
          </li>
          <li>
            De professionele bachelor TI onderzoekt en evalueert kritisch
            bestaande en innovatieve IT oplossingen.
          </li>
          <li>
            De professionele bachelor TI geeft advies over IT oplossingen, -
            producten, -diensten en –technologieën voor verschillende domeinen
            en/of sectoren.
          </li>
          <li>
            De professionele bachelor TI kan zelfstandig en in een
            multidisciplinair en/of multicultureel team een opdracht op
            projectmatige wijze aanpakken. De professionele bachelor TI kan
            eenvoudig leidinggevende taken uitvoeren en een projectplan
            ontwerpen, interpreteren, uitvoeren, aanpassen en toelichten.
          </li>
          <li>
            De professionele bachelor TI communiceert minstens in het Nederlands
            en het Engels, mondeling en schriftelijk aangepast aan het
            doelpubliek.
          </li>
          <li>
            De professionele bachelor TI houdt rekening met en handelt naar de
            internationale context van het vakgebied.
          </li>
          <li>
            De professionele ba chelor TI is ondernemend, neemt initiatief en
            reageert op nieuwe ontwikkelingen en toepassingsdomeinen.
          </li>
          <li>
            De professionele bachelor TI ondersteunt veranderingsprocessen bij
            ingebruikname van IT oplossingen.
          </li>
        </ul>
        <p>
          Source: <a href="/DLR.pdf">DLR.pdf</a>
        </p>
      </div>
    );
  }
}
