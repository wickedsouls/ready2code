import React from 'react';
import Schema from '../layout/schemas/AboutInnerSchema';
import Page from '../layout/Page';
import Aux from '../components/Aux';
import axios from 'axios';

class Registration extends React.Component {
  state = {
    complete: false,
    showShema: false,
    name: '',
    surname: '',
    email: '',
    phone: '',
  };
  onInputChange = e => this.setState({[e.target.name]: e.target.value});

  componentDidMount() {
    setTimeout(() => {
      this.setState({showShema: true})
    }, 1000)
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    if(!this.state.email && !this.state.phone) return;
    const url = 'https://docs.google.com/forms/d/e/1FAIpQLSe3kqe7zS_4fK1hLlEA4XljQ-8EGBNPjJ8uOPr3bomXU0w0Pw/formResponse';
    const formData = new FormData();
    formData.append('entry.564309517', this.state.name + ' ' + this.state.surname);
    formData.append('entry.1618905305', this.state.phone);
    formData.append('entry.864963703', this.state.email);
    formData.append('entry.1689904649', 'registracija');
    axios.post(
        url,
        formData,
        {headers: {'Content-type': 'application/x-www-form-urlencoded'}}
    );
    this.setState({complete:true});
    setTimeout(()=>{
        this.props.history.push('/')
    },2500)
  };

  render() {
    return (
        <Page description="Registracija i rengini" id="registration" title="[registracija]" className="Registration">
          {this.state.showShema && window.innerWidth>600 && <Schema/>}
          <div className="container">
            {this.state.complete ?
                <Aux>
                  <h2>Ačiū!<br/><span>Iki pasimatymo renginyje!</span></h2>
                </Aux>
                :
                <Aux>
                  <h1>
                    <span>Registracija į programavimo "workshop"ą</span>
                  </h1>
                  <form onSubmit={this.onFormSubmit}>
                    <input
                        name="name"
                        value={this.state.name}
                        type="text" placeholder="Vardas"
                        onChange={this.onInputChange}/>
                    <input
                        name="surname"
                        value={this.state.surname}
                        type="text" placeholder="Pavardė"
                        onChange={this.onInputChange}/>
                    <input
                        name="phone"
                        value={this.state.phone}
                        type="text" placeholder="Tel. nr."
                        onChange={this.onInputChange}/>
                    <input
                        name="email"
                        value={this.state.email}
                        type="text" placeholder="El. paštas"
                        onChange={this.onInputChange}/>
                    <button className="register">Registruotis</button>
                  </form>
                </Aux>
            }
          </div>
        </Page>
    );
  }
}
export default Registration