/* eslint-disable require-jsdoc */
import "./App.css";
import React from "react";
import Desktop from "./components/Desktop.jsx";
import Mobile from "./components/Mobile.jsx";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      mobile: window.innerWidth <= 768,
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowResize);
  }

  handleWindowResize = () => {
    this.setState({ mobile: window.innerWidth <= 768 });
  };

  render() {
    const view = this.state.mobile ? <Mobile /> : <Desktop />;

    return <>{view}</>;
  }
}

export default App;
