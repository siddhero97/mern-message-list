import React, {Component} from 'react';
import './App.css';
import AppNavbar from "./components/AppNavbar";
import "bootstrap/dist/css/bootstrap.css"
import {Provider} from "react-redux";
import store from "./store"
import MessageList from "./components/MessageList";
import MessageModal from "./components/MessageModal";
import {
    Container
} from "reactstrap";
class App extends Component {
  render() {
    return (
        <Provider store = {store} >
            <div className="App">
                <AppNavbar></AppNavbar>
                <Container>
                    <MessageModal></MessageModal>
                    <MessageList></MessageList>
                </Container>
            </div>
        </Provider>
    );
  }
}

export default App;
