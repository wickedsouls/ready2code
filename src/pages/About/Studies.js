import React from 'react';
import Schema from '../../layout/schemas/AboutInnerSchema';
import img from '../../assets/img/auditorija.jpg';
import Page from '../../layout/Page';

export default class  extends React.Component {
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
        <Page id="studijos" className="About-inner-page" title="[studijos]" description="Programavimo studijos ir kursai">
          {this.state.show && <Schema/>}
          <div className="container">
            <h1 className="glitch-once" data-text="Mokykla">
              Studijos
              <span/>
            </h1>
            <p>
              <b className="ready2code">[ready2<strong>code</strong>] </b> ruošia  programavimo
              specialistus atsižvelgdama į naujausias programavimo kalbų tendencijas ir specialistų poreikį. Mūsų tikslas ne tik paruošti aukšto lygio specialistus, bet ir sukurti jaukią bendruomenę kurioje būtų dalinamasi pasiekimais, darbo pasiūlymais ar iškilusiais iššūkiais.
            </p>
            <p>
              Mokykla yra įsikūrusi Užupyje, čia visad jauki aplinka ir bendruomenė.
              Į paskaitas galite atvažiuoti dviračiu ir saugiai jį čia palikti ar nemokamai pasistatyti automobilį.
            </p>
            <p>
              Paskaitas veda dėstytojai-programuotojai, turintys daug patirties ne tik IT
              sferoje, bet ir dirbant su studentais, vedant paskaitas.
              Tik pradedančiojo programuotojo laukia didžiulis kiekis informacijos, todėl dėstytojo tikslas - perteikti
              reikalingą informaciją, būti jūsų mentoriumi, atsakyti į jums iškilusius klausimus.
            </p>
            <p>
              Kurso metu
              <ul>
                <li>jūs dirbsite su dėstytoju pagal iš anksto aprašytas programas</li>
                <li>mažos 5-8 žmonių grupės</li>
                <li>jums bus pateikiamos reikalingos nuorodos ir dokumentacija</li>
                <li>aiškiai ir suprantamai paruoštos skaidrės</li>
                <li>namų darbai orientuoti į praeitas temas ir suskirstyti pagal lygius</li>
                <li>visi moduliai turi baigiamąjį projektą</li>
              </ul>
            </p>
            <p>
              Atvirų durų dienos - kasdien. Visada galite apsilankyti ir aptarti iškilusius klausimus ar sudalyvauti paskaitose.
            </p>
            <img src={img} alt="auditorija" className="room"/>
          </div>

        </Page>
    );
  }
}