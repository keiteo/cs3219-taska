import logo from "./logo.svg";
import "./App.css";
import React from "react";
import services from "./services";

function submitForm(val) {
  alert(val);
}

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>Sample app with Docker and Nginx.</p>
        <MyForm />
      </header>
    </div>
  );
}

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "" };
  }
  myChangeHandler = event => {
    this.setState({ username: event.target.value });
  };
  handler = async event => {
    event.preventDefault();
    await services.searchEntities(this.state.username);
    alert("submitted");
  };
  render() {
    return (
      <form onSubmit={this.handler}>
        <h1>Hello {this.state.username}</h1>
        <p>Enter your name:</p>
        <input type='text' onChange={this.myChangeHandler} />
      </form>
    );
  }
}

export default App;
