import React from 'react';
import reactjs from '../../assets/img/react.png';
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
    type: 'react'
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
        heading="React.js Kursas"
        text="Registruokis ar gauk daugiau informacijos"
        type={this.state.type}
        show={this.state.showPopup}
        hidePopup={this.hidePopup}
    />
        <Page id="react" title="[react.js]" description="React.js kursas" className="Program React">
          {this.state.showSchema && <Schema/>}
          <div className="container">
            <h1 className="react">Web ir mobiliųjų <span>aplikacijų kursas</span></h1>
            <br/>
            <h2>Apie programą</h2>
            <p>
              Šis kursas yra skirtas web ir mobiliųjų aplikacijų kūrimui. Tai kursas pažengusiems studentams ar programuotojams, turintiems HTML, CSS, JavaScript kalbų pagrindus.
              <br/>
              Paskaitų metu jūs praplėsite jau turimas Front-end žinias, išmoksite kurti "web" ir mobiliąsias aplikacijas naudojant JavaScript kalbos biblioteką React.js.
            </p>
            <h2>
              React.js
              <img src={reactjs} alt="react" className="logo react"/>
            </h2>
            <p>
              JavaScript pagrindinis web aplikacijų variklis, kadangi tai vienintelė programavimo kalba kuri veikia moderniose naršyklėse. Jos pagalba galima sukurti sparčiai veikiančias aplikacijas ir puslapius.
              <br/>
              Naudojantis tik JavaScript, greitai patampa keblu konstruoti didesnes aplikacijas, išeitis - React.js.
              <br/>
              React.js tai JavaScript kalbos biblioteka, kuri 2013 metais buvo sukurta Facebook komandos. Šiuo metu ji yra viena iš populiariausių bibliotekų konstruojant interaktyvias internetines svetaines ir aplikacijas. Šią technologiją naudoja tokios kompanijos kaip Facebook, Netflix, Airbnb, Instagram ir kitos.
              <br/>
              React.js pagalba aplikacijos yra konstruojamos komponentų pagalba. Juos galime sukurti ir daug kartų panaudoti neperrašant kodo kelis kartus, atvaizduoti dinamiškai pagal sąlygas. Kadangi už komponentų atvaizdavimą yra atsakinga JavaScript kalba, aplikacijose nebūna užvėlavimų ar puslapio perkrovimų, o tai suteikia labai sklandų naršymą sukurtoje sistemoje.
            </p>
            <h2>Kursas</h2>
            <p>
              Kurso trukmė 12 savaičių (72val), po tris užsiėmimus per savaitę po dvi valandas.
              <br/>
              Paskaitos vyksta kas antrą dieną, todėl bus pakankamai laiko pasidaryti praktinius darbus ir išmokti praeitą medžiagą.
              <br/>
              Kursas prasideda nuo pačių pagrindų, išsiaiškinant kam ir kodėl mums reikia tokio įrankio. Eigoje sukonstruosime dvi pilnai veikiančias aplikacijas, įsigilinsime į bibliotekos subtilybes ir orientuosimės kaip viską apjungti su serverine dalimi panaudojant API užklausas.
              <br/>
              <b>Kurso eiga:</b>

            </p>
            <ul>
              <li>Išsami ES6 JavaScript sintaksė</li>
              <li>React.js pagrindai ir subtilybės, npm pakuočių sistema</li>
              <li>API užklausos ir autentikacija</li>
              <li>Net dvi pilnai išbaigtos ir veikiančios aplikacijos</li>
              <li>Aplikacijų įdiegimas (deployment)</li>
              <li>Daugiau nei 6 praktiniai  darbai ir baigiamasis kursinis projektas</li>
              <li>Konsultacijos ir iškilusių problemų aptarimas</li>
              <li>Pasiruošimas darbo pokalbiui</li>
            </ul>

            <h3 className="offset">
              Trukmė: 12 savaičių - 72val
            </h3>
            <h3><span className="underline">Kaina: 195€/mėn</span></h3>
            <p className="offset">
              {/*<i>Artimiausias kursas: <b>2018-09-24</b> <br/></i>*/}
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