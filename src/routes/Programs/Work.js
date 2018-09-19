import React from 'react';
import Schema from '../../layout/schemas/ProgramsSingleSchema';
import Page from '../../layout/Page';

class Start extends React.Component {
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
        <Page id="idarbinimas" title="[įdarbinimas ir praktika]" description="Įdarbinimas ir praktika po studijų Lietuvoje ir užsienyje" className="Program Work">
          {this.state.show && <Schema/>}
          <div className="container">
            <h1>Praktika<span>Įdarbinimas</span></h1>
            <br/>
            <p>
                <b>[ ready2<strong>code</strong> ]</b> aktyviai bendradarbiauja su <a href="https://atranka360.lt/" rel="noopener noreferrer"  target="_blank"><span className="underline">Atranka 360</span></a> darbuotojų atrankos kompanija. Studentams baigusius React.js, Node.js ar PHP programą ir atsiskaičius visus praktinius darbus padedame įsidarbinti ar pradėti savo individualią veiklą.
            </p>

          </div>
        </Page>
    );
  }
}
export default Start