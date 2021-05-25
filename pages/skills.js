import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { times } from "../components/util";
import Layout from "../components/layout";

const SkillRows = ({ skills }) =>
  Object.entries(skills).map(([skill, value]) => (
    <tr key={skill}>
      <td>{skill}</td>
      <td>
        {times(value).map((_) => (
          <FontAwesomeIcon
            key={Math.random()}
            icon={faStar}
            style={{ color: "orange" }}
          />
        ))}
      </td>
    </tr>
  ));

export default function Skills() {
  const skills = {
    Javascript: 5,
    React: 4,
    HTML: 4,
    Java: 4,
    Linux: 3,
    Networking: 3,
    Docker: 2,
    "C++": 2,
    Python: 2,
    "C#": 1,
    CSS: 1,
  };

  return (
    <Layout>
      <div className="content">
        <h1>Skills</h1>
        <h2>IT-skills</h2>
        <p />
        <table>
          <thead>
            <tr>
              <th>Skill</th>
              <th>
                Kennis{" "}
                <span style={{ fontWeight: "normal" }}>
                  (1 = basis kennis - 5 = uitstekende kennis)
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            <SkillRows skills={skills} />
          </tbody>
        </table>
        <h2>Soft-skills</h2>
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
            kwalitatieve IT oplossingen.
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
    </Layout>
  );
}
