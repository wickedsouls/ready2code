import React from 'react';
import Schema from '../../layout/schemas/ProgramsSchema';
import MobileSchema from '../../layout/schemas/AboutInnerSchema';
import Page from '../../layout/Page';

import {Link} from 'react-router-dom';

class Programs extends React.Component {
  state = {
    show: false
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({show: true})
    }, 1000)
  }

  render() {

    return (
        <Page id="programos" description="Programos: Pradedančiųjų kursas, node.js, react.js php, wordpress" title="[programos]" className="Programs-page">
          {this.state.show && window.innerWidth>=800 && <Schema/>}
          {this.state.show && window.innerWidth<800 && <MobileSchema/>}
          <div className="container">
            <h3>Specializacija</h3>
            <div className="start item">
              <Link to='/programos/programavimo-pagrindai'>
                <h2>
                  <span>Programavimo pagrindai</span>
                  HTML, CSS, JavaScript
                </h2>
              </Link>
            </div>
            <div className="react item">
              <Link to='/programos/react'>
                <h2>
                  <span>Web ir mobiliųjų aplikacijų kursas</span>
                  React.js
                </h2>
              </Link>
            </div>
            <div className="node item">
              <Link to='/programos/node'>
                <h2>
                  <span>Serverių ir duombazių konfigūravimas</span>
                  Node.js, MongoDB
                </h2>
              </Link>
            </div>
            <div className="php item">
              <Link to='programos/php'>
                <h2>
                  <span>Internetinių svetainių ir parduotuvių kursas</span>
                  PHP, WordPress
                </h2>
              </Link>
            </div>
            <div className="work item">
              <h2>
                <Link to='/programos/praktika-darbas'>
                  <span>Praktika</span>
                  <span>Įdarbinimas</span>
                  ready2<strong>code</strong>!
                </Link>
              </h2>
            </div>
          </div>
        </Page>
    );
  }
}
export default Programs