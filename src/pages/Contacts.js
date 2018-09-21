import React from 'react';
import Schema from '../layout/schemas/ContactsSchema';
import map from '../assets/map4.png';
import MobileSchema from '../layout/schemas/AboutInnerSchema';
import Page from '../layout/Page';

class Contacts extends React.Component {
  state={
    show:false,
    bigMap:false
  };
  componentDidMount(){
    setTimeout(()=>{
      this.setState({show:true})
    },1000)
  }

  render() {

    return (
        <Page id="kontaktai" title="[kontaktai]" description="Kontaktai, info@ready2code.lt info@ready2code.lt" className="Contacts-page">
          {this.state.show && window.innerWidth>=800 && <Schema/>}
          {this.state.show && window.innerWidth<800 && <MobileSchema/>}
          <div className="container">
            <h1 className="glitch-once" data-text="Kontaktai">
              Kontaktai
              <span/>
            </h1>
            <div className="contacts">
              <div className="info">
                <p className="content">
                  Vieta: Užupio respublika.
                  <br/>
                  Pas mus nemokamas automobilių stovėjimas ir saugi vieta dviračio laikymui.
                </p>
                <p className="address">Krivių g. 10, Vilnius</p>
                <a href="tel:+37064701234">+370 647 01234</a>
                <a href="mailto:info@ready2code.lt">info@ready2code.lt</a>
              </div>
              <a rel="noopener noreferrer" target="_blank" href="https://www.google.com/maps/place/%5B+ready2code+%5D/@54.6841623,25.2996939,17z/data=!3m1!4b1!4m5!3m4!1s0x46dd95baeba9520b:0x6c8ca91b63fbdada!8m2!3d54.6841623!4d25.3018826">
                <img
                    src={map}
                    alt="žemėlapis, krivių g. 10"/>
              </a>
            </div>
          </div>
        </Page>
    );
  }
}
export default Contacts