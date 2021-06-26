import React, { Component } from "react";


import "../styles/header-footer.css";
import "../styles/style.css";
import "../styles/ezero.css";


import "../styles/custom.css";
import "../styles/ezllabs.css";
class MyApp extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }







  render() {
    const { Component, pageProps } = this.props;


    return (
      <><div class="ezeo-container-fluid">
        <Component {...pageProps} /></div>
      </>
    );
  }
}

export default MyApp;
