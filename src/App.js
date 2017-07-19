import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Navigation from './Components/navigation';
import MainBody from './Components/mainbody';
import MurrayForm from './Components/murrayform';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <MainBody />
        <MurrayForm />
      </div>
    );
  }
}

// let famousAstroPhysicists = [
//   {
//     id: 1,
//     firstName: "Carl",
//     lastName: "Sagan",
//     alive: "false",
//     nationality: "United States",
//
//   },
//   {
//     id: 2,
//     firstName: "Neil",
//     lastName: "deGrasse Tyson",
//     alive: "true",
//     nationality: "United States",
//   },
//   {
//     id: 3,
//     firstName: "Stephen",
//     lastName: "Hawking",
//     alive: "true",
//     nationality: "United Kingdom, England",
//   },
//
// ];

// class Physicist extends Component {
//   render() {
//     return (
//       <div>
//         <h1>{this.props.physicist.lastName + ", " + this.props.physicist.firstName}</h1>
//         <h2>Still alive: {this.props.physicist.alive}</h2>
//         <h3>Nationality: {this.props.physicist.nationality}</h3>
//       </div>
//     );
//   }
// }
//
// class App extends Component {
//   render() {
//     let physicists = famousAstroPhysicists.map( (physicist, index) => {
//       return (
//         <Physicist key={physicist.id} physicist ={ physicist } />
//       )
//     })
//     return (
//       <div className="App">
//         { physicists }
//       </div>
//     );
//   }
// }

export default App;
