import React from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";

export default class extends React.Component {
  render() {
    return (
      <div>
        <form
          method="post"
          action="https://formspree.io/robin.vandenbroeck@student.ucll.be"
        >
          <input type="hidden" name="_language" value="nl" />
          <div className="field is-horizontal">
            <div className="field-label">
              <label className="label">Contactgegevens:</label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control has-icons-left">
                  <input
                    className="input"
                    type="text"
                    placeholder="Robin Van den Broeck"
                    name="name"
                  />
                  <span className="icon is-small is-left">
                    <FontAwesomeIcon icon={["fas", "user"]} />
                  </span>
                </div>
              </div>
              <div className="field">
                <div className="control has-icons-left">
                  <input
                    className="input"
                    type="email"
                    placeholder="jouw-email@jouw-bedrijf.be"
                    name="_replyto"
                  />
                  <span className="icon is-small is-left">
                    <FontAwesomeIcon icon={["fas", "envelope"]} />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="field is-horizontal">
            <div className="field-label" />
            <div className="field-body">
              <div className="field">
                <div className="control has-icons-left">
                  <input
                    className="input"
                    type="tel"
                    placeholder="+32 999 99 99 99"
                    name="phone_number"
                  />
                  <span className="icon is-small is-left">
                    <FontAwesomeIcon icon={["fas", "mobile"]} />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="field is-horizontal">
            <div className="field-label">
              <label className="label">Bericht:</label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <textarea
                    className="textarea"
                    placeholder="Hoe kan ik je helpen"
                    name="message"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="field is-horizontal">
            <div className="field-label" />
            <div className="field-body">
              <div className="control">
                <input
                  type="submit"
                  className="button is-primary"
                  value="Verstuur email"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
