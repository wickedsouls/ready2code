import React from 'react';
import html from '../../assets/img/HTML_Logo.png'
import css from '../../assets/img/csslogo.png'
import js from '../../assets/img/Javascript-shield.png'
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
        <Page id="pagrindai" title="[programavimo pagrindai]" description="Programavimo pagrindai: HTML, CSS, JavaScript" className="Program Start">
          {this.state.show && <Schema/>}
          <div className="container">
            <h1>Programavimo <span>pagrindai</span></h1>
            <br/>
            <h2>Apie programą</h2>
            <p>
              Šis kursas yra skirtas norintiems išmokti kurti internetines svetaines, susipažinti su puslapių
              architektūra ir animaciniais efektais, įgyti programavimo JavaScript kalba pagrindus. Jis puikiai tinkamas
              pradedantiesiems ar jau susipažinusiems su programavimu, web dizaineriams, ar tiems kurie nori pamėginti
              savo jėgas naujoje sferoje.
              <br/>

              <br/>
              <b>
                <span className="">Kalbos:</span> HTML, CSS, JavaScript
              </b>
            </p>
            <h2>
              HTML
              <img src={html} className="logo-one" alt="html"/>
            </h2>
            <p>
              HTML yra pagrindinė kalba naudojama kuriant internetinių puslapių struktūras.
              Tai tarsi namo statybiniai blokai kurių pagalba puslapyje sudedami esantys elementai. Ši kalba yra
              pakankamai lengva, todėl ją įsisavinti pakaks ir kelių dienų darbo, o rezultatai matomi iškart.
            </p>
            <h2>
              CSS
              <img src={css} className="logo-two" alt="css"/>
            </h2>
            <p>
              Ši kalba yra palaikoma visų internetinių naršyklių ir yra skirta stilizuoti HTML elementams esantiems
              puslapiuose. CSS kalbą lengva pradėti naudoti ir ji jūsų svetainėms suteiks daug išraiškingų atspalvių bei
              efektų.
            </p>
            <h2>
              JavaScript
              <img src={js} className="logo-three" alt="js"/>
            </h2>
            <p>
              Tai vienintelė programavimo kalba kuri veikia moderniose naršyklėse. Ji leidžia apjungti puslapio
              statinius elementus ir padaryti juos interaktyvius. Išmokę ją turėsite gerus programavimo pagrindus -
              susipažinsite su funkcijomis, kintamaisiais, objektais. Galėsite lengvai kurti interaktyvius puslapius,
              efektus, aplikacijas ar net žaidimus.
            </p>
            <h2>Kursas</h2>
            <p>
              Kurso trukmė - 12 savaičių (72val), po tris užsiėmimus per savaitę po dvi valandas. Paskaitos vyksta kas
              antrą dieną, todėl bus pakankamai laiko pasidaryti praktinius darbus ir išmokti praeitą medžiagą.
              Kursas yra sudarytas iš trijų dalių:
            </p>
            <p>
              <b>Pirmas mėnuo</b> - internetinių svetainių architektūra ir stilistika. HTML+CSS.
            </p>
            <ul>
              <li>Susipažinimas su programavimu, naršyklėmis, serveriais ir kodo redaktoriumi</li>
              <li>HTML ir CSS pagrindai</li>
              <li>Puslapių architektūros pagrindai</li>
              <li>Puslapio elementų stilizavimas</li>
              <li>Pritaikymas mobiliesiems įrenginiams</li>
              <li>Praktinių projektų konstravimas</li>
              <li>Internetinio adreso registravimas, projekto talpinimas į serverį</li>
            </ul>
            <p>
              <b>Antras mėnuo</b> - išsamus JavaScript kalbos studijavimas, kurio metu susipažinsite su funkcijomis,
              sąlygomis ir visais kitais programavimo įrankiais. Konstruosime internetines aplikacijas, žaidimus ir
              interaktyvias internetines svetaines.

            </p>
            <ul>
              <li>Programavimo pagrindai JavaScript kalba</li>
              <li>Kintamieji, sąlygos, ciklai, funkcijos, objektai ir kita..</li>
              <li>Loginiai programavimo uždaviniai</li>
              <li>Interaktyvių puslapių (parallax) efektų konstravimas</li>
              <li>Aplikacijų ir žaidimų kūrimas</li>
              <li>Duomenų užklausos į išorinius serverius (API)</li>
              <li>Kripto valiutos krepšelio aplikacijos kūrimas</li>
            </ul>
            <p>
              <b>Trečias mėnuo</b> - apjungsime visas kalbas ir kursime baigiamąjį projektą, pagal dizainerio pateikus
              duomenis, kurį galiausiai patalpinsime į serverį.
            </p>
            <ul>
              <li>Pasiruošimas projektui</li>
              <li>Svetainės išmatavimai ir sukarpymas</li>
              <li>Interaktyvių komponentų konstravimas</li>
              <li>SASS preprocessor integravimas</li>
              <li>PHP ir WordPress pagrindai</li>
              <li>Projekto talpinimas į serverį</li>
            </ul>
            <p>
              Pabaigus šį kursą jūs turėsite gerus programavimo pagrindus, būsite susipažinę su pagrindiniais
              programavimo terminais, išmokę kurti internetines svetaines ir aplikacijas.
            </p>
            <h3 className="offset">
              Trukmė: 12 savaičių - 72val
            </h3>
            <h3><span className="underline">Kaina: 165 €/mėn</span></h3>
            <p className="offset">
              <i>Artimiausias kursas: <b>2018-10-31</b></i>
              <br/>
              Registracija:
              <br/>
              <b className=""><a href="tel:+370 647 01234">+370 647 01234</a></b>
              <br/>
              <b><a href="mailto:info@ready2code.lt">info@ready2code.lt</a></b>
            </p>
          </div>
        </Page>
    );
  }
}
export default Start