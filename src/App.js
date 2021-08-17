import React, { Component } from "react";
import "./App.css";

const { app } = window.require("electron").remote;

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Aplicación hecha con Electron</h1>
        <p>Si ya ves este mensaje es que lo has iniciado con yarn start</p>
        <p>
          Si deseas compilarla utiliza yarn build y se te generará en el
          directorio /dist
        </p>
      </div>
    );
  }
}

export default App;
