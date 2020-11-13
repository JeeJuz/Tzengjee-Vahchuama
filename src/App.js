import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        title: "Tzengjee Vahchuama",
        headerLinks: [
          {title: "Home", path: '/'},
          {title: "About", path: '/about'},
          {title: 'Contact', path: '/contact'},
        ],
      home: {
        title: 'Be Happy',
        subtitle: "Tzengjee's Porfolio",
        text: "Work in Progress",
      },
      about: {
        title: 'About me'
      },
      contact: {
        title: 'Let\'s talk'
      }
        }
    }
  }

  render(){
    return (
      <Router>

      </Router>
    )
  }
}

export default App;
