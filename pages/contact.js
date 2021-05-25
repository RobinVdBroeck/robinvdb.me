import React from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import Layout from "../components/layout";

export default function Contact() {
  return (
    <Layout>
      <div>
        <form
          method="post"
          /* TODO: update email */
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
                    required
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
                    required
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
                    required
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
    </Layout>
  );
}
