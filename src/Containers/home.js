import React from "react";

export default class extends React.Component {
  render() {
    return (
      <div className="columns">
        <div className="column">
          <img
            src="/me.jpeg"
            height="500"
            width="500"
            style={{
              borderRadius: "100%"
            }}
          />
        </div>
        <div className="column" style={{ height: "100%" }}>
          <div className="card">
            <div className="card-content">
              <p className="title">Hallo beste bezoeker,</p>
              <p>
                Je bent net aangekomen op mijn persoonlijk portfolio. Kijk hier
                gerust rond. Je kunt navigeren door mijn portfolio door vanboven
                op de verschillende links te klikken. <br />
                Als ik iets voor u kan betekenen, neem dan gerust contact met me
                op via het formulier op deze site. Ik neem dan zo snel mogelijk
                contact met u op. Indien u zelf contact met mij wilt opnemen,
                kunt u mijn gegevens vinden op mijn CV. (Te downloaden in de
                balk hierboven) Ik zet deze om spam te vermijden niet in direct
                op de site.
                <br />
                <br />
                Met vriendelijke groeten, <br />
                Robin Van den Broeck.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
