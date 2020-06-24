import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import * as serviceWorker from './serviceWorker';
import Navbar, {NavButton} from './navigation/navbar'

class App {
  root=document.getElementById("root")
  show(component){
    ReactDOM.render(component,this.root)
  }
}

const app=new App()

app.show(
<Navbar>
  <NavButton>start</NavButton>
  <NavButton>end</NavButton>
</Navbar>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
