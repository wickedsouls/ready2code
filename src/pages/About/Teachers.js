import React from 'react';
import Schema from '../../layout/schemas/AboutInnerSchema';
import coach1 from '../../assets/img/k1.jpg';
import Page from '../../layout/Page';

class Teachers extends React.Component {
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
        <Page id="destytojai" className="About-inner-page" title="[dėstytojai]" description="Akademijos destytojai">
          {this.state.show && <Schema/>}
          <div className="container">
            <h1 className="glitch-once" data-text="Dėstytojai">
              Dėstytojai
              <span/>
            </h1>
            <div className="coach">
              <h2>Karolis Kerpys</h2>
              <img src={coach1} alt="karolis kerpys"/>
            </div>
            <p>
              Mokyklos įkūrėjas, dėstytojas, programuotojas.
              <br/>
              Programavimo patirtis - 5 metai.
              <br/>
              Dėstytojavimo patirtis - 2 metai, paruošta virš 150 programuotojų.
              <br/>
              Programavimo kalbos ir įrankiai:
            </p>
            <ul>
              <li>HTML, CSS, JavaScript</li>
              <li>PHP</li>
              <li>React.js</li>
              <li>Node.js</li>
              <li>Python</li>
              <li>Photoshop, Illustrator</li>
            </ul>
            <p>
              Programavimas ir technologijos mane jau traukia nuo vaikystės. Dar būdamas vaikas labai mėgau LEGO
              konstruktorius, elektroniką, išradimus. Pabaigiau Vilniaus Gedimino technikos universitetą - statybos
              inžineriją. Po kelių metų darbo supratau jog tai ne mano sritis ir pradėjau mokintis programavimo kalbų.
            </p>
            <p>
              Studijuoti programavimo kalbas savarankiškai, tikrai sunkus ir ilgas procesas. Kelias buvo banguotas -
              nežinai kokią kalbą pasirinkti, į kokią sritį specializuotis, kaip pirmus užsakovus susirasti. Bet ši sritis traukė mane ypač stipriai ir ilgai netruko kai jau pirmus užsakymus gavau. Šiuo metu specializuojuosi į įmonių valdymo sistemų, mobiliųjų ir "web" aplikacijų kūrimą. Teko dirbti su tokiomis įmonėmis kaip Bobcat, Kretingos grūdai, ten įdiegti klientų ir gamybos valdymo sistemas.
            </p>
            <p>
              Laikui bėgant atsirado galimybė savo žiniomis pasidalinti ir su kitais. Tad paskutinius porą metų dėsčiau
              programavimo pagrindų ir subtilybių kitose mokyklose. Tačiau išsiskyrė mūsų vizija ir tikslai.
            </p>
            <p>
              Dirbti su žmogumi ir perteikti jam savo žinias yra atsakingas ir svarbus darbas. Svajojau vesti paskaitas kuriose yra mažos žmonių grupės, kruopščiai apgalvota programa kur studentas gali tikslingai judėti savo tikslo link. Norėjosi sukurti programuotojų bendruomenę, kurioje būtų visi studijuojantys ir jau dirbantys, besidalijantys reikalinga informacija ir pagalba.
            </p>
            <p>
              Tad paskatintas savo studentų ir draugų nusprendžiau įgyvendinti šią svajonę. Rugsėjo 1 dieną atidaryta programavimo mokykla <b className="ready2code">[ready2<strong>code</strong>]</b>
            </p>

          </div>

        </Page>
    );
  }
}
export default Teachers