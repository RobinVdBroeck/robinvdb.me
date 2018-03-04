import React from "react";

export default class extends React.Component {
  render() {
    return (
      <div class="content">
        <h1>Skills</h1>
        <p>
          Hieronder ziet u een competentiematrix. Dit geeft uitleg over mijn
          soft-skills. Voor meer informatie kunt u{" "}
          <a href="/Competentiematrix-uitleg.pdf">deze pdf</a> bekijken.
        </p>
        <h2>
          Gegevens behandelen: gegevens verzamelen, opslaan en ter beschikking
          stellen, gebruik makend van wetenschappelijk verantwoorden technieken
        </h2>
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
          <tbody>
            <tr>
              <th>Gegevens verzamelen</th>
              <td>
                <p>Gegevens verzamelen</p>
                <p>
                  Verzamelde gegevens opsommen binnen een aangereikt
                  referentiekader
                </p>
                <p>Zinvolle testgegevens verzamelen</p>
              </td>
              <td>Structuur aanbrengen in de gegevens</td>
              <td>
                Verzamelde testgegevens structureren, in hoofd- en bijzaken
                onverscheiden en in een relevant referentiekader positioneren
              </td>
              <td />
            </tr>
            <tr>
              <th>Gegevens modelleren</th>
              <td>Gegevens modelleren volgens een aangereikt model</td>
              <td>
                <p>Gemodelleerde gegevens interpreteren</p>
                <p>Verschillende modellen vergelijken</p>
              </td>
              <td>Gegevens modelleren volgens een relevant model</td>
              <td />
            </tr>

            <tr>
              <th>Verbanden leggen</th>
              <td>
                <p>Casuaal denken</p>
                <p>Notie hebben van de vereiste relaties</p>
              </td>
              <td>
                <p>Vooropgestelde relaties kritisch interpreteren</p>
                <p> Vereiste relaties onder begeleiding aanbrengen</p>
              </td>
              <td>Vereiste relaties zelfstandig aanbrengen</td>
              <td />
            </tr>

            <tr>
              <th>Gegevens opslaan (uitzuiveren, converteren, stockeren)</th>
              <td>
                <p>
                  Notie hebben van bestaande procedures om gegevens en
                  veiligheidskopies op de slaan
                </p>
                <p>Notie hebben van procedures om gegevens uit te zuiveren</p>
                <p>Notie hebben van converteerprogramma's</p>
                <p>Gegevens opslaan in een aangereikt opslagmedium</p>
              </td>
              <td>
                <p>
                  Gegevens oplaan en veiligheidskopies maken volgens een
                  aangereikte procedure
                </p>
                <p>
                  Gegevens uitzuiveren / valideren volgend een aangereikte
                  procedure
                </p>
                <p>
                  Gegevens converteren en opslaan binnen eenzelfde opslag medium
                </p>
              </td>
              <td>
                <p>Zelfstandig een relavante kopieerprocedure bepalen</p>
                <p>Toepassen van een efficiënte opslagprocedure </p>
                <p>
                  Een validatiemethode bepalen en uitwerken voor een
                  geïntegreerde toepassing
                </p>
                <p>Gegevens converteren om over te brengen naar andere media</p>
              </td>
              <td>
                <p>Automatiseren van een kopieerprocedure</p>
                <p>Automatiseren van de opslagprocedure</p>
              </td>
            </tr>

            <tr>
              <th>Gegevens te beschikking stellen</th>
              <td>
                <p>Notie hebben van bestaande presentatievormen </p>
                <p>
                  Onder begeleiding gegevens invoeren in een aangereikte
                  presentatievorm
                </p>
              </td>
              <td>
                <p>Bestaande presentatie vormen kennen </p>
                <p>
                  Zelfstandig invoeren van gegevens in een aangereikte
                  presentatievorm
                </p>
              </td>
              <td>
                <p>Selecteren van een gepaste presentatievorm</p>
                <p>
                  Zelfstandig invoeren van gegevens in een aangepaste
                  presentatievorm
                </p>
              </td>
              <td />
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
