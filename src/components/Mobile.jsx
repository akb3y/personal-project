import React from "react";
import MHeader from "./header/MHeader";
import MAbout from "./middle/MAbout/MAbout";
import MProjects from "./middle/MProjects/Mprojects";
import MContact from "./middle/MContact";

class Mobile extends React.Component {
  constructor() {
    super();
    this.state = {
      page: "About",
    };
    this.setPage = this.setPage.bind(this);
  }

  setPage(e) {
    this.setState({ page: e.page });
  }

  render() {
    const middle =
      this.state.page === "About" ? (
        <MAbout />
      ) : this.state.page === "Projects" ? (
        <MProjects />
      ) : this.state.page === "Contact" ? (
        <MContact />
      ) : null;

    return (
      <div className="App">
        <MHeader pag={this.state.page} setPage={this.setPage} />
        {middle}
      </div>
    );
  }
}

export default Mobile;
