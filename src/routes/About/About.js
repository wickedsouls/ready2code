import React from 'react';
import Page from '../../layout/Page';
import Schema from '../../layout/schemas/AboutSchema';
import MobileSchema from '../../layout/schemas/AboutInnerSchema';
import {Link} from 'react-router-dom';

class About extends React.Component {
  state={
    show:false
  };
  componentDidMount(){
    setTimeout(()=>{
      this.setState({show:true})
    },1000)
  }
  render() {
    return (
        <Page id="apie-mus" className="About-page" title="Apie mus" description="Destytojai Studijos Perspektyvos">
          {this.state.show && window.innerWidth>=800 && <Schema/>}
          {this.state.show && window.innerWidth<800 && <MobileSchema/>}
          <div className="container">
            <h1 className="glitch-once" data-text="Apie.mus">
              Apie.mus
              <span/>
            </h1>

            <h2><Link to='mokykla'>Studijos</Link></h2>
            <h2><Link to="destytojai">Dėstytojai</Link></h2>
            <h2><Link to="karjeros-galimybes">Karjeros galimybes</Link></h2>

          </div>

        </Page>
    );
  }
}
export default About
