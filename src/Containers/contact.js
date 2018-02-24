import React from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";

export default class extends React.Component {
  render() {
    return (
      <div>
        <div className="field is-horizontal">
          <div className="field-label">
            <label className="label">From:</label>
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control has-icons-left">
                <input className="input" type="text" placeholder="Name" />
                <span className="icon is-small is-left">
                  <FontAwesomeIcon icon={["fas", "user"]} />
                </span>
              </div>
            </div>
            <div className="field">
              <div className="control has-icons-left">
                <input className="input" type="email" placeholder="Email" />
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
                  placeholder="Your phone number"
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
            <label className="label">Message:</label>
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <textarea
                  className="textarea"
                  placeholder="Explain how I can help you"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label" />
          <div className="field-body">
            <div className="control">
              <button className="button is-primary">Submit</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
