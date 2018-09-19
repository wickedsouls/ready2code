import React from 'react';
import Schema from '../../layout/schemas/AboutInnerSchema';
import Page from '../../layout/Page';

class Career extends React.Component {
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
        <Page id="karjera" className="About-inner-page" title="[karjeros galimybes]" description="Karjeros galimybes">
          {this.state.show && <Schema/>}
          <div className="container">
            <h1 className="glitch-once" data-text="Karjeros galimybes">
              Karjeros galimybes
              <span/>
            </h1>
            <p>
              <b className="ready2code">[ ready2<strong>code</strong> ]</b> aktyviai bendradarbiauja su <a rel="noopener noreferrer" href="https://atranka360.lt/"  target="_blank"><span className="underline">Atranka 360</span></a> darbuotojų atrankos kompanija. Studentams baigusius React.js, Node.js ar PHP programą ir atsiskaičius visus praktinius darbus padedame įsidarbinti ar pradėti savo individualią veiklą.
            </p>
          </div>

        </Page>
    );
  }
}
export default Career