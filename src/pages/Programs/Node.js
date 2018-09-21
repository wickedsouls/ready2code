import React from 'react';
import node from '../../assets/img/nodejs.png'
import mongo from '../../assets/img/mongods.png'
import Schema from '../../layout/schemas/ProgramsSingleSchema';
import Page from '../../layout/Page';
import Aux from '../../components/Aux';
import Popup from '../../components/Popup';

class Start extends React.Component {
  state = {
    showPopup: false,
    showSchema: false,
    seen: false,
    send: false,
    type: 'node'
  };

  componentDidMount() {
    const submitTime = localStorage.getItem(this.state.type);
    if (submitTime && parseInt(Date.now()) < (parseInt(submitTime))) {
      console.log(parseInt(Date.now()), (parseInt(submitTime)));
      this.setState({send:true, seen:true})
    }
    document.addEventListener('keydown', this.hidePopup);
    this.setState({showSchema: true});
    // setTimeout(() => {
    //   if (!this.state.seen) this.setState({showPopup: true})
    // }, 3000)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.hidePopup)
  }

  hidePopup = (e) => {
    if (e === 'success') {
      this.setState({showPopup: false, seen: true, send: true})
    } else if (e.keyCode === 27 || e.type === 'click' || e === 'success') {
      this.setState({showPopup: false, seen: true})
    }
  };
  showPopup = () => {
    this.setState({showPopup: true, seen: true})
  };

  render() {

    return (
        <Aux>
          <Popup
              heading="Node.js Kursas"
              text="Registruokis ar gauk daugiau informacijos"
              type={this.state.type}
              show={this.state.showPopup}
              hidePopup={this.hidePopup}
          />
        <Page id="node" className="Program Node" description="Node.js kursas" title="[node.js]">

          {this.state.showSchema && <Schema/>}
          <div className="container">
            <h1>Serverių ir duomenų bazių <span>konfiguravimas</span></h1>
            <br/>
            <h2>Apie programą</h2>
            <p>
              Šis kursas specializuotas į serverinės dalies programavimą (back-end), duombazių prijungimą, RESTful serverio kūrimą, Linux operacinių sistemų konfigūravimą.
              <br/>
              Naudojamos technologijos: Node.js, MongoDB
            </p>
            <h2>
              Node.js
              <img src={node} className="logo-node" alt="node.js"/>
            </h2>
            <p>
              JavaScript kalba buvo sukurta internetinėms naršyklėms. Dėl savo populiarumo ir paprastumo ji labai išpopuliarėjo, todėl dar 2009 metais kompanija Google sukūrė Node.js įrankį, kuris leidžia rašyti JavaScript kalba už naršyklės ribų.
              <br/>
              Node.js yra skirtas kurti "web" serverius, pasižymi didžiuliu spartumu ir paprastumu. Programuotojams mokantiems JavaScript kalbą, jis yra greitai perprantamas ir įsisavinamas.
            </p>
            <h2>
              MongoDB
              <img src={mongo} className="logo-mongo" alt="mongoDB"/>
            </h2>
            <p>
              Tai NoSQL duombaze kuri yra ypač paplitusi tarp Node.js programuotoju. MongoDB įrašų struktūra yra JSON formato tipo, lengvai praplečiama, paprasta konstruoti kompleksines užklausas naudojant JavaScript funkcijas.
            </p>
            <h2>Kursas</h2>
            <p>
              Kurso trukmė 8 savaičių (48val), po tris užsiėmimus per savaitę po dvi valandas.
              <br/>
              Paskaitos vyksta kas antrą dieną, todėl bus pakankamai laiko pasidaryti praktinius darbus ir išmokti praeitą medžiagą.
              <br/>
              Kursas prasideda nuo pačių pagrindų, išsiaiškinant kaip veikia serveris, kas yra API, asinchroninis veikimas. Kurso metu naudosime tik naujausią JavaScript ES6 sintaksę. Sukonstruosime pilnai veikiantį RESTful serverį, patalpinsime jį i Linux operacinę sistemą.
              <br/>
              <b>Kurso eiga:</b>
            </p>
            <ul>
              <li>Išsami ES6 JavaScript sintaksė</li>
              <li>Node.js pagrindai, npm pakuočių sistema</li>
              <li>Express serveris</li>
              <li>"API endpoints" kūrimas</li>
              <li>MongoDB prijungimas</li>
              <li>Autentikacija ir saugumas</li>
              <li>Failų sistemos</li>
              <li>RESTful serverio kūrimas</li>
              <li>Serverio įdiegimas (deployment) Linux operacinėje sistemoje</li>
              <li>Konsultacijos ir iškilusių problemų aptarimas</li>
              <li>Pasiruošimas darbo pokalbiui</li>
            </ul>
            <h2>Bonus</h2>
            <p>
              Studentams praėjusiems React.js kursą papildomos dvi savaitės, kurių metu sujungsime abu įrankius sukurdami pilnai veikiančią aplikaciją
            </p>
            <h3 className="offset">
              Trukmė: 8 savaičių - 48val
            </h3>
            <h3><span className="underline">Kaina: 195€/mėn</span></h3>
            <p className="offset">
              {/*<i>Artimiausias kursas: <b>2018-09-24</b></i>*/}

              {!this.state.send &&
              <button
                  onClick={this.showPopup}
                  className="register">
                Registracija ir klausimai
              </button>
              }
            </p>
          </div>
        </Page>
        </Aux>
    );
  }
}
export default Start