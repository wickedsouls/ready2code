import React from 'react';
import Page from '../layout/Page';
import Schema from '../layout/schemas/HomeSchema';

class Home extends React.Component{
  state={
    show:false
  };
  componentDidMount(){
    setTimeout(()=>{
      this.setState({show:true})
    },1000)
  }
  render(){

    return (

        <Page className="Home-page" id="homepage">
          {this.state.show && <Schema/>}
          <div className="title">
            <div className="border border-left"/>
            <h1>
              <span>Specializuoti</span>
              <span className="glitch is-hover" data-text="Programavimo">Programavimo</span>
              <span>Kursai</span>
            </h1>
            <div className="border border-right"></div>
          </div>
        </Page>
    );
  }
}
export default Home