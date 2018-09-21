import React from 'react';

class Popup extends React.Component {
  state = {
    show:false,
    name: '',
    email: '',
    phone: ''
  };
  onInputChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  };
  componentDidMount(){
    // setTimeout(()=>{
    //     this.setState({show:true})
    // },2000)
  }
  hidePopup=()=>{
      this.setState({show:false})
  };

  render() {

    return (
        [<div
            style={{display:this.state.show ? 'block':'none'}}
            onClick={this.hidePopup}
            key={1}
            className="backdrop"/>,
        <div
            style={{
              top:this.state.show? '50%' : '-50%'
            }}
            key={2}
            className="popup">
          <h2>Artimiausias kursas spalio 8d. !</h2>
          <p>
            nori daugiau info?
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
          <button  onClick={this.hidePopup}>Registruotis</button>
        </div>]
    );
  }
}
export default Popup