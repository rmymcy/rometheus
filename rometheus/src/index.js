import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Navbar, {Navbutton} from "./navbar/navbar";
import * as serviceWorker from './serviceWorker';

class App {
  root = document.getElementById("root")

  show(component) {
    ReactDOM.render(component, this.root)
  }
}

export const app = new App()

app.show(
  <Navbar>
    <Navbutton> Test 1 </Navbutton>
    <Navbutton> Test 2 </Navbutton>
    <Navbutton> Test 3 </Navbutton>
    <Navbutton> Test 4 </Navbutton>
  </Navbar>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
