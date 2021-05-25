import React from "react";
import Layout from "../components/layout";

export default class extends React.Component {
  render() {
    return (
      <Layout>
        <div>
          <p>
            Mijn projecten zijn te vinden op{" "}
            <a href="https://www.github.com/gamesmaxed">Github</a>
          </p>
        </div>
      </Layout>
    );
  }
}
