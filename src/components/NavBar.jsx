import React, { Component } from "react";
import "./../index.css";

export class Navbar extends Component {
  render(){
    return(
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="/#">Battleground</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">Link</a>
              </li>
              
              <li className="nav-item">
                <a className="nav-link disabled" href="/#">Disabled</a>
              </li>
            </ul>
           
          </div>
        </nav>

        <p className="highlight">Welcome to Battleground</p> 
        <br/>
        <h1>Do you want to join our team ?</h1>
      </React.Fragment>
    )
  }
}

export default Navbar

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       Welcome to Battleground
//     </div>
//   );
// }

// export default App;
