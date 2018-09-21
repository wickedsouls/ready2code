import React from 'react';
import Aux from '../components/Aux';
import axios from 'axios';

class Popup extends React.Component {
  state = {
    complete:false,
    show: false,
    name: '',
    email: '',
    phone: '',
    message: ''
  };
  onInputChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  };
  register = ()=>{
      this.setState({
        complete:true
      });
      const url = 'https://docs.google.com/forms/d/e/1FAIpQLSe3kqe7zS_4fK1hLlEA4XljQ-8EGBNPjJ8uOPr3bomXU0w0Pw/formResponse'
      axios.post(url,{['entry.564309517']:this.state.name} );
      localStorage.setItem('start', Date.now());

      setTimeout(()=>{
          this.props.hidePopup('success')
      },2500)
  };
  render() {
    const me = {name:'as'};
    return (
        <div className="popup">
          <div
              style={{display: this.props.show ? 'block' : 'none'}}
              onClick={this.props.hidePopup}
              key={1}
              className="backdrop"/>
          <div
              style={{top: this.props.show ? '50%' : '-50%'}}
              key={2}
              className="text-box">
            {this.state.complete ?
                <Aux>
                  <h3>Ačiū!</h3>
                  <h4>Neužilgo su jumis susisieksime</h4>
                </Aux> :
                <Aux>
                  <h2>{this.props.heading}</h2>
                  <p>
                    {this.props.text}
                  </p>
                  <input
                      type="text"
                      name="name"
                      onChange={this.onInputChange}
                      value={this.state.name}
                      placeholder="Vardas"/>
                  <input
                      type="email"
                      name="email"
                      onChange={this.onInputChange}
                      value={this.state.email}
                      placeholder="El. paštas"/>
                  <input
                      type="text"
                      name="phone"
                      onChange={this.onInputChange}
                      value={this.state.phone}
                      placeholder="Tel. nr."/>
                  <textarea name="message" cols="30" rows="10" value={this.state.message} onChange={this.onInputChange}
                            placeholder="Žinutė"/>
                  <button onClick={this.register}>Registruotis</button>
                </Aux>
            }
          </div>
        </div>
    );
  }
}
export default Popup