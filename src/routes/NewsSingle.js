import React from 'react';
import post1 from '../assets/img/laptop.jpg';
import Schema from '../layout/schemas/NewSingleSchema';
import Page from '../layout/Page';

class SingleNews extends React.Component {
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
        <Page id="naujienos" title="[naujienos]" className="News-Single">
          {this.state.show && <Schema/>}
          <div className="container">
            <h1>
              <span>Nemokami programavimo kursai savaitgaliais</span>
            </h1>
            <img src={post1} alt="post1"/>
            <p>
              <b className="ready2code">[ ready2<strong>code</strong> ]</b> pradeda savo veiklą jau nuo rugsėjo. Tad visą šį mėnesį jus kviečiame išbandyti savo žinias ir išmokti šį tą naujo.
            </p>
            <h2>Asmeninė svetainė per tris valandas</h2>
            <p>
              Kiekvieną rugsėjo šeštadienį organizuojame nemokamus 3val. kursus kurių metu su dėstytojo pagalba galėsite susiprogramuoti savo asmeninę svetainę. Kurso metu susipažinsite su programavimo pagrindais - HTML, CSS kalbomis.
              Per šias tris valandas jūs susikursite savo asmeninę svetainę, integruosite animacijų, paveikslėlių ir galėsite ją iškart patalpinti į veikiantį serverį.
            </p>
            <p>
              Tai puikus būdas išmėginti naują sritį ir įsitikinti jog net per kelias valandas galima nuveikti tiek daug!
              <br/>
              Jum reikės tik asmeninio nešiojamo kompiuterio, geros nuotaikos ir nusiteikimo.
            </p>
            <h2>Registracija</h2>
            <p>
              <br/>
              <b className=""><a href="tel:+37064701234">+370 647 01234</a></b>
              <br/>
              <b><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/Ready2code-967088000151889">Facebook</a></b>
              <br/>
              <b><a href="mailto:info@ready2code.lt">info@ready2code.lt</a></b>
            </p>
          </div>
        </Page>
    );
  }
}
export default SingleNews