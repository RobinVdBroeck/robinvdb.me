import React from "react";
import Nav from "./nav";

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <Nav />
      <div className="container">{children}</div>
    </React.Fragment>
  );
}
