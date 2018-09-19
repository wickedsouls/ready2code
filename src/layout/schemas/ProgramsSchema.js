import React from 'react';
import anime from 'animejs';
import {withRouter} from 'react-router-dom';

class ProgramsSchema extends React.Component {
  constructor(props) {
    super(props);

    this.props.history.listen(() => {
      this.removeSchema();
    });
  }

  state = {
    current: false
  };

  componentDidMount() {
    if (this.state.current) return;
    const drawLines = (svg) => {
      for (let i = 0; i < svg.children.length; i++) {
        anime({
          targets: svg.children[i],
          strokeDashoffset: [anime.setDashoffset, 0],
          easing: 'easeInOutSine',
          duration: 2500,
          delay: function (el, n) {
            return n * 250
          },
          direction: 'normal',
          loop: false
        });
      }
    };
    drawLines(this.schemaLeft);
    drawLines(this.schemaRight);
    this.setState({current: true})
  }

  removeSchema = () => {
    if (!this.svg) return;
    const eraseLines = (svg) => {
      for (let i = 0; i < svg.children.length; i++) {
        anime({
          targets: svg.children[i],
          strokeDashoffset: [0, anime.setDashoffset],
          easing: 'easeInOutSine',
          duration: 800,
          delay: function (el, n) {
            return n * 250
          },
          direction: 'normal',
          loop: false
        });
      }
    };
    eraseLines(this.schemaRight);
    eraseLines(this.schemaLeft);
  };

  render() {

    return (
        <div className="schema" ref={(svg) => this.svg = svg}>
          <svg version="1.1" x="0px" y="0px"
               className="schema-center-programs"
               ref={(svg) => this.schemaRight = svg}
               width="600px" height="656.664px" viewBox="0 0 600 656.664" enableBackground="new 0 0 600 656.664">
            <line fill="none" stroke="#BBBBBB" strokeMiterlimit="10" x1="262.322" y1="61.414" x2="262.322" y2="0.414"/>
            <line fill="none" stroke="#BBBBBB" strokeWidth="3" strokeMiterlimit="10" x1="417.822" y1="124.914" x2="425.822" y2="124.914"/>
            <line fill="none" stroke="#BBBBBB" strokeWidth="3" strokeMiterlimit="10" x1="417.822" y1="144.914" x2="425.822" y2="144.914"/>
            <polyline fill="none" stroke="#BBBBBB" strokeMiterlimit="10" points="174.822,124.914 80.822,124.914 81.322,124.414 
	81.322,208.414 "/>
            <polyline fill="none" stroke="#BBBBBB" strokeMiterlimit="10" points="174.822,104.914 60.822,104.914 61.322,104.414 
	61.322,208.414 "/>
            <polyline fill="none" stroke="#BBBBBB" strokeMiterlimit="10" points="174.822,144.914 100.822,144.914 101.322,145.414 
	101.322,208.414 "/>
            <line fill="none" stroke="#BBBBBB" strokeWidth="3" strokeMiterlimit="10" x1="417.822" y1="104.914" x2="425.822" y2="104.914"/>
            <line fill="none" stroke="#BBBBBB" strokeWidth="3" strokeMiterlimit="10" x1="519.322" y1="226.414" x2="519.322" y2="218.414"/>
            <line fill="none" stroke="#BBBBBB" strokeWidth="3" strokeMiterlimit="10" x1="539.322" y1="226.414" x2="539.322" y2="218.414"/>
            <line fill="none" stroke="#BBBBBB" strokeWidth="3" strokeMiterlimit="10" x1="499.322" y1="226.414" x2="499.322" y2="218.414"/>
            <line fill="none" stroke="#BBBBBB" strokeMiterlimit="10" x1="282.322" y1="61.414" x2="282.322" y2="0.414"/>
            <line fill="none" stroke="#BBBBBB" strokeMiterlimit="10" x1="302.322" y1="61.414" x2="302.322" y2="0.414"/>
            <line fill="none" stroke="#BBBBBB" strokeMiterlimit="10" x1="322.322" y1="61.414" x2="322.322" y2="0.414"/>
            <line fill="none" stroke="#BBBBBB" strokeMiterlimit="10" x1="342.322" y1="61.414" x2="342.322" y2="0.414"/>
            <line fill="none" stroke="#BBBBBB" strokeWidth="3" strokeMiterlimit="10" x1="81.322" y1="216.414" x2="81.322" y2="208.414"/>
            <line fill="none" stroke="#BBBBBB" strokeWidth="3" strokeMiterlimit="10" x1="101.322" y1="216.414" x2="101.322" y2="208.414"/>
            <line fill="none" stroke="#BBBBBB" strokeWidth="3" strokeMiterlimit="10" x1="61.322" y1="216.414" x2="61.322" y2="208.414"/>
            <line fill="none" stroke="#BBBBBB" strokeWidth="3" strokeMiterlimit="10" x1="81.322" y1="336.414" x2="81.322" y2="328.414"/>
            <line fill="none" stroke="#BBBBBB" strokeWidth="3" strokeMiterlimit="10" x1="81.322" y1="365.414" x2="81.322" y2="357.414"/>
            <line fill="none" stroke="#BBBBBB" strokeWidth="3" strokeMiterlimit="10" x1="81.322" y1="470.414" x2="81.322" y2="462.414"/>
            <line fill="none" stroke="#BBBBBB" strokeWidth="3" strokeMiterlimit="10" x1="101.322" y1="470.414" x2="101.322" y2="462.414"/>
            <line fill="none" stroke="#BBBBBB" strokeWidth="3" strokeMiterlimit="10" x1="61.322" y1="470.414" x2="61.322" y2="462.414"/>
            <line fill="none" stroke="#BBBBBB" strokeWidth="3" strokeMiterlimit="10" x1="174.822" y1="124.914" x2="182.822" y2="124.914"/>
            <line fill="none" stroke="#BBBBBB" strokeWidth="3" strokeMiterlimit="10" x1="174.822" y1="144.914" x2="182.822" y2="144.914"/>
            <line fill="none" stroke="#BBBBBB" strokeWidth="3" strokeMiterlimit="10" x1="174.822" y1="104.914" x2="182.822" y2="104.914"/>
            <line fill="none" stroke="#BBBBBB" strokeMiterlimit="10" x1="81.322" y1="336.414" x2="81.322" y2="357.414"/>
            <line fill="none" stroke="#BBBBBB" strokeWidth="3" strokeMiterlimit="10" x1="101.322" y1="336.414" x2="101.322" y2="328.414"/>
            <line fill="none" stroke="#BBBBBB" strokeWidth="3" strokeMiterlimit="10" x1="101.322" y1="365.414" x2="101.322" y2="357.414"/>
            <line fill="none" stroke="#BBBBBB" strokeMiterlimit="10" x1="101.322" y1="336.414" x2="101.322" y2="357.414"/>
            <line fill="none" stroke="#BBBBBB" strokeWidth="3" strokeMiterlimit="10" x1="61.322" y1="336.414" x2="61.322" y2="328.414"/>
            <line fill="none" stroke="#BBBBBB" strokeWidth="3" strokeMiterlimit="10" x1="61.322" y1="365.414" x2="61.322" y2="357.414"/>
            <line fill="none" stroke="#BBBBBB" strokeMiterlimit="10" x1="61.322" y1="336.414" x2="61.322" y2="357.414"/>
            <line fill="none" stroke="#BBBBBB" strokeWidth="3" strokeMiterlimit="10" x1="520.322" y1="470.414" x2="520.322" y2="462.414"/>
            <line fill="none" stroke="#BBBBBB" strokeWidth="3" strokeMiterlimit="10" x1="540.322" y1="470.414" x2="540.322" y2="462.414"/>
            <line fill="none" stroke="#BBBBBB" strokeWidth="3" strokeMiterlimit="10" x1="500.322" y1="470.414" x2="500.322" y2="462.414"/>
            <line fill="none" stroke="#BBBBBB" strokeWidth="3" strokeMiterlimit="10" x1="174.822" y1="553.914" x2="182.822" y2="553.914"/>
            <line fill="none" stroke="#BBBBBB" strokeWidth="3" strokeMiterlimit="10" x1="174.822" y1="573.914" x2="182.822" y2="573.914"/>
            <line fill="none" stroke="#BBBBBB" strokeWidth="3" strokeMiterlimit="10" x1="174.822" y1="533.914" x2="182.822" y2="533.914"/>
            <line fill="none" stroke="#BBBBBB" strokeWidth="3" strokeMiterlimit="10" x1="418.822" y1="554.914" x2="426.822" y2="554.914"/>
            <line fill="none" stroke="#BBBBBB" strokeWidth="3" strokeMiterlimit="10" x1="418.822" y1="574.914" x2="426.822" y2="574.914"/>
            <line fill="none" stroke="#BBBBBB" strokeWidth="3" strokeMiterlimit="10" x1="418.822" y1="534.914" x2="426.822" y2="534.914"/>
            <line fill="none" stroke="#BBBBBB" strokeMiterlimit="10" x1="267.322" y1="624.414" x2="267.322" y2="656.414"/>
            <line fill="none" stroke="#BBBBBB" strokeMiterlimit="10" x1="287.322" y1="624.414" x2="287.322" y2="656.414"/>
            <line fill="none" stroke="#BBBBBB" strokeMiterlimit="10" x1="307.322" y1="624.414" x2="307.322" y2="656.414"/>
            <line fill="none" stroke="#BBBBBB" strokeMiterlimit="10" x1="327.322" y1="624.414" x2="327.322" y2="656.414"/>
            <line fill="none" stroke="#BBBBBB" strokeMiterlimit="10" x1="347.322" y1="624.414" x2="347.322" y2="656.414"/>
            <circle fill="#FFFFFF" stroke="#BBBBBB" strokeWidth="2" strokeMiterlimit="10" cx="261.999" cy="68.66" r="7"/>
            <polyline fill="none" stroke="#BBBBBB" strokeMiterlimit="10" points="81.322,470.414 81.322,554.414 80.822,553.914 
	174.822,553.914 "/>
            <polyline fill="none" stroke="#BBBBBB" strokeMiterlimit="10" points="101.322,470.414 101.322,534.414 100.822,533.914 
	174.822,533.914 "/>
            <polyline fill="none" stroke="#BBBBBB" strokeMiterlimit="10" points="61.322,470.414 61.322,574.414 60.822,573.914 
	174.822,573.914 "/>
            <polyline fill="none" stroke="#BBBBBB" strokeMiterlimit="10" points="500.322,470.414 500.322,535.414 499.822,534.914 
	426.822,534.914 "/>
            <circle fill="#FFFFFF" stroke="#BBBBBB" strokeWidth="2" strokeMiterlimit="10" cx="281.999" cy="68.66" r="7"/>
            <circle fill="#FFFFFF" stroke="#BBBBBB" strokeWidth="2" strokeMiterlimit="10" cx="301.999" cy="68.66" r="7"/>
            <circle fill="#FFFFFF" stroke="#BBBBBB" strokeWidth="2" strokeMiterlimit="10" cx="321.999" cy="68.66" r="7"/>
            <circle fill="#FFFFFF" stroke="#BBBBBB" strokeWidth="2" strokeMiterlimit="10" cx="341.999" cy="68.66" r="7"/>
            <polyline fill="none" stroke="#BBBBBB" strokeMiterlimit="10" points="540.322,470.414 540.322,575.414 539.822,574.914 
	426.822,574.914 "/>
            <circle fill="#FFFFFF" stroke="#BBBBBB" strokeWidth="2" strokeMiterlimit="10" cx="266.999" cy="617.66" r="7"/>
            <circle fill="#FFFFFF" stroke="#BBBBBB" strokeWidth="2" strokeMiterlimit="10" cx="286.999" cy="617.66" r="7"/>
            <polyline fill="none" stroke="#BBBBBB" strokeMiterlimit="10" points="520.322,470.414 520.322,555.414 519.822,554.914 
	426.822,554.914 "/>
            <circle fill="#FFFFFF" stroke="#BBBBBB" strokeWidth="2" strokeMiterlimit="10" cx="306.999" cy="617.66" r="7"/>
            <circle fill="#FFFFFF" stroke="#BBBBBB" strokeWidth="2" strokeMiterlimit="10" cx="326.999" cy="617.66" r="7"/>
            <circle fill="#FFFFFF" stroke="#BBBBBB" strokeWidth="2" strokeMiterlimit="10" cx="346.999" cy="617.66" r="7"/>
            <polyline fill="none" stroke="#BBBBBB" strokeMiterlimit="10" points="425.822,104.914 539.822,104.914 539.322,105.414 
	539.322,218.414 "/>
            <polyline fill="none" stroke="#BBBBBB" strokeMiterlimit="10" points="425.822,124.914 519.822,124.914 519.322,125.414 
	519.322,218.414 "/>
            <polyline fill="none" stroke="#BBBBBB" strokeMiterlimit="10" points="425.822,144.914 499.822,144.914 499.322,145.414 
	499.322,218.414 "/>
          </svg>

          <svg version="1.1" x="0px" y="0px"
               width="291.352px" height="520.52px" viewBox="0 0 291.352 520.52"
               enableBackground="new 0 0 291.352 520.52"
               className="schema-left"
               ref={(svg) => this.schemaLeft = svg}
          >
            <path fill="none" stroke="#BBBBBB" strokeMiterlimit="10" d="M187.998,299.852"/>
            <polyline fill="none" stroke="#BBBBBB" strokeMiterlimit="10" points="77.998,93.852 77.998,117 77.998,116.957 66.747,128.229 
	66.998,128 66.998,167.852 "/>
            <polyline fill="none" stroke="#BBBBBB" strokeMiterlimit="10" points="97.998,93.852 97.998,117 97.998,116.957 86.747,128.229 
	86.998,128 86.998,167.852 "/>
            <polyline fill="none" stroke="#BBBBBB" strokeMiterlimit="10" points="137.998,93.852 137.998,117 137.998,116.957 
	126.747,128.229 126.998,128 126.998,167.852 "/>
            <polyline fill="none" stroke="#BBBBBB" strokeMiterlimit="10" points="157.998,93.852 157.998,117 157.998,116.957 
	146.747,128.229 146.998,128 146.998,167.852 "/>
            <polyline fill="none" stroke="#BBBBBB" strokeMiterlimit="10" points="117.998,93.852 117.998,117 117.998,116.957 
	106.747,128.229 106.998,128 106.998,167.852 "/>
            <circle fill="#FFFFFF" stroke="#BBBBBB" strokeWidth="2" strokeMiterlimit="10" cx="65" cy="313.66" r="7"/>
            <circle fill="#FFFFFF" stroke="#BBBBBB" strokeWidth="2" strokeMiterlimit="10" cx="66" cy="174.66" r="7"/>
            <circle fill="#FFFFFF" stroke="#BBBBBB" strokeWidth="2" strokeMiterlimit="10" cx="86" cy="174.66" r="7"/>
            <circle fill="#FFFFFF" stroke="#BBBBBB" strokeWidth="2" strokeMiterlimit="10" cx="106" cy="174.66" r="7"/>
            <circle fill="#FFFFFF" stroke="#BBBBBB" strokeWidth="2" strokeMiterlimit="10" cx="126" cy="174.66" r="7"/>
            <circle fill="#FFFFFF" stroke="#BBBBBB" strokeWidth="2" strokeMiterlimit="10" cx="147" cy="174.66" r="7"/>
            <polyline fill="none" stroke="#BBBBBB" strokeMiterlimit="10" points="18.998,93.852 18.998,117 7.998,128.25 7.998,128.432 
	7.998,128 7.998,181.852 26.249,200.103 25.998,199.852 25.998,496.852 "/>
            <circle fill="#FFFFFF" stroke="#BBBBBB" strokeWidth="2" strokeMiterlimit="10" cx="26" cy="504.66" r="7"/>
            <circle fill="#FFFFFF" stroke="#BBBBBB" strokeWidth="2" strokeMiterlimit="10" cx="46" cy="504.66" r="7"/>
            <polyline fill="none" stroke="#BBBBBB" strokeMiterlimit="10" points="38.998,93.852 38.998,117 27.998,128.25 27.998,128.432 
	27.998,128 27.998,181.852 46.249,200.103 45.998,199.852 45.998,497.852 "/>
            <polyline fill="none" stroke="#BBBBBB" strokeMiterlimit="10" points="57.998,93.852 57.998,117 46.998,128.25 46.998,128.432 
	46.998,128 46.998,181.852 65.249,200.103 64.998,199.852 64.998,306.852 "/>
          </svg>

        </div>
    );
  }
}
export default withRouter(ProgramsSchema)