import React from "react";
import Header from "./header/Header";
import About from "./middle/About/About";
import Projects from "./middle/Projects/Projects.jsx";
import Contact from "./middle/Contact.jsx";

class Desktop extends React.Component {
  constructor() {
    super();
    this.state = {
      page: "about",
    };
    this.setPage = this.setPage.bind(this);
  }

  setPage(e) {
    this.setState({ page: e });
  }

  render() {
    const middle =
      this.state.page === "about" ? (
        <About />
      ) : this.state.page === "project" ? (
        <Projects />
      ) : this.state.page === "contact" ? (
        <Contact />
      ) : null;

    return (
      <div className="App">
        <Header page={this.state.page} setPage={this.setPage} />
        {middle}
      </div>
    );
  }
}

export default Desktop;
