import React from 'react';
import php from '../../assets/img/php-1.png'
import wp from '../../assets/img/wp.png'
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
    type: 'php'
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
              heading="PHP Kursas"
              text="Registruokis ar gauk daugiau informacijos"
              type={this.state.type}
              show={this.state.showPopup}
              hidePopup={this.hidePopup}
          />
        <Page id="php" title="[PHP]" description="PHP, WordPress kursas" className="Program PHP">
          {this.state.showSchema && <Schema/>}
          <div className="container">
            <h1>Internetinių svetainių ir  <span>parduotuvių kursas</span></h1>
            <br/>
            <h2>Apie programą</h2>
            <p>
              Šis kursas specializuotas į PHP programavimo kalbą, MySQL duombazę ir WordPress sistemos integravimą. Pabaigus jį jūs galėsite konstruoti "web" aplikacijas, turinio valdymo sistemas ar WordPress temas.
            </p>
            <h2>
              PHP
              <img src={php} className="logo-one" alt="php"/>
            </h2>
            <p>
              Tai viena iš labiausiai paplitusių programavimo kalbų. Tai serverinė (back-end) programavimo kalba, kuri dėl savo paprastumo leidžia greitai sukurti dinaminius internetinius puslapius, apdoroti duomenis, prijungti duombazes ir kurti sistemas.
            </p>
            <h2>
              WordPress
              <img src={wp} className="logo-two" alt="wordpress"/>
            </h2>
            <p>
              WordPress - tai turinio valdymo sistema paremta PHP kalba ir MySQL duombaze. Daugiau nei 30% internetinių svetainių veikia šios sistemos pagalba. Naudojantis WordPress sistema, galima greitai ir paprastai sukurti internetines svetaines, "blogus" ar internetines parduotuves.
            </p>
            <h2>Kursas</h2>
            <p>
              Kurso trukmė 12 savaičių (72val), po tris užsiėmimus per savaitę po dvi valandas.
              <br/>
              Paskaitos vyksta kas antrą dieną, todėl bus pakankamai laiko pasidaryti praktinius darbus ir išmokti praeitą medžiagą.
              <br/>
              Kurso metu pirmasis mėnuo yra skirtas PHP pagrindam ir MySQL duombazės studijoms. Per šį mėnesį susipažinsime su serverinės dalies programavimu (Back-end), išmoksime PHP kalbos sintaksę, veikimo principus, MySQL duobazės integravimą. Apjungus šias technologijos sukonstruosime darbuotojų valdymo aplikaciją, sukelsime ją į serverį. Likusius du mėnesius gilinsimės į WordPress temų kūrimą, kur nuo pagrindų įsigilinsim į šios sistemos subtilybes. WordPress yra ypač plačiai paplitęs ir daug įmonių nuolat ieško šios technologijos specialistų. Pabaigus šį kursą turėsite pakankamai praktikos tiek darbui įmonėje tiek darbui savarankiškai.
              <br/>
              <b>Kurso eiga:</b>

            </p>
            <ul>
              <li>PHP kalbos pagrindai</li>
              <li>MySQL duombazės integravimas ir naudojimas</li>
              <li>Aplikacijos kūrimas apjungiant abi technologijas</li>
              <li>WordPress pagrindai</li>
              <li>WordPress temų kūrimas</li>
              <li>Daugiau nei 5 praktiniai namų darbai ir baigiamasis kursinis projektas</li>
              <li>Konsultacijos ir iškilusių problemų aptarimas</li>
              <li>Pasiruošimas darbo pokalbiui</li>
            </ul>
            <h3 className="offset">
              Trukmė: 12 savaičių - 72val
            </h3>
            <h3><span className="underline">Kaina: 195€/mėn</span></h3>
            <p className="offset">
              {/*<i>Artimiausias kursas: <b>2018-09-24</b></i>*/}
              <br/>
              Registracija:
              <br/>
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