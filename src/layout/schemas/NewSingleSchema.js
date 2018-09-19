import React from 'react';
import anime from 'animejs';
import {withRouter} from 'react-router-dom';

class NewSIngleSchema extends React.Component {
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
    drawLines(this.schemaCenter);
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
    // eraseLines(this.schemaRight);
    eraseLines(this.schemaLeft);
    eraseLines(this.schemaCenter)
  };

  render() {

    return (
        <div className="schema" ref={(svg) => this.svg = svg}>
          <svg version="1.1" x="0px" y="0px"
               className="schema-left"
               ref={(svg) => this.schemaLeft = svg}
               width="291.352px" height="642.875px" viewBox="0 0 291.352 642.875"
               enableBackground="new 0 0 291.352 642.875">
            <path fill="none" stroke="#BBBBBB" strokeMiterlimit="10" d="M187.998,299.852"/>
            <circle fill="#FFFFFF" stroke="#BBBBBB" strokeWidth="2" strokeMiterlimit="10" cx="263.5" cy="127.512" r="7"/>
            <polyline fill="none" stroke="#BBBBBB" strokeMiterlimit="10" points="156.998,93.852 156.998,116.852 167.495,127.35 
	167.498,127.352 256.498,127.352 "/>
            <polyline fill="none" stroke="#BBBBBB" strokeMiterlimit="10" points="96.998,94.852 96.998,118 96.998,117.957 85.747,129.229 
	85.998,129 85.998,168.852 "/>
            <polyline fill="none" stroke="#BBBBBB" strokeMiterlimit="10" points="136.998,94.852 136.998,118 136.998,117.957 
	125.747,129.229 125.998,129 125.998,168.852 "/>
            <polyline fill="none" stroke="#BBBBBB" strokeMiterlimit="10" points="116.998,94.852 116.998,118 116.998,117.957 
	105.747,129.229 105.998,129 105.998,168.852 "/>
            <circle fill="#FFFFFF" stroke="#BBBBBB" strokeWidth="2" strokeMiterlimit="10" cx="85" cy="175.66" r="7"/>
            <circle fill="#FFFFFF" stroke="#BBBBBB" strokeWidth="2" strokeMiterlimit="10" cx="105" cy="175.66" r="7"/>
            <circle fill="#FFFFFF" stroke="#BBBBBB" strokeWidth="2" strokeMiterlimit="10" cx="125" cy="175.66" r="7"/>
            <polyline fill="none" stroke="#BBBBBB" strokeMiterlimit="10" points="23.998,230.852 23.998,200.852 24.249,201.103 
	5.998,182.852 5.998,129 5.998,129.432 5.998,129.25 16.998,118 16.998,94.852 "/>
            <circle fill="#FFFFFF" stroke="#BBBBBB" strokeWidth="2" strokeMiterlimit="10" cx="24" cy="236.66" r="7"/>
            <polyline fill="none" stroke="#BBBBBB" strokeMiterlimit="10" points="43.998,230.852 43.998,200.852 44.249,201.103 
	25.998,182.852 25.998,129 25.998,129.432 25.998,129.25 36.998,118 36.998,94.852 "/>
            <circle fill="#FFFFFF" stroke="#BBBBBB" strokeWidth="2" strokeMiterlimit="10" cx="44" cy="236.66" r="7"/>
            <circle fill="#FFFFFF" stroke="#BBBBBB" strokeWidth="2" strokeMiterlimit="10" cx="64" cy="602.66" r="7"/>
            <polyline fill="none" stroke="#BBBBBB" strokeMiterlimit="10" points="56.998,94.852 56.998,118 45.998,129.25 45.998,129.432 
	45.998,129 45.998,182.852 64.249,201.103 63.998,200.852 63.998,230.852 63.998,594.852 "/>
            <polyline fill="none" stroke="#BBBBBB" strokeMiterlimit="10" points="76.998,94.852 76.998,118 65.998,129.25 65.998,129.432 
	65.998,129 65.998,182.852 84.249,201.103 83.998,200.852 83.998,230.852 83.998,594.852 "/>
            <circle fill="#FFFFFF" stroke="#BBBBBB" strokeWidth="2" strokeMiterlimit="10" cx="84" cy="602.66" r="7"/>
          </svg>

          <svg version="1.1" x="0px" y="0px"
               className="schema-center"
               ref={(svg) => this.schemaCenter = svg}
               width="591.35px" height="798.51px" viewBox="0 0 591.35 798.51" enableBackground="new 0 0 591.35 798.51">
            <path fill="none" stroke="#BBBBBB" strokeMiterlimit="10" d="M209.997,299.852"/>
            <circle fill="#FFFFFF" stroke="#BBBBBB" strokeWidth="2" strokeMiterlimit="10" cx="46.499" cy="127.512"
                    r="7"/>
            <circle fill="#FFFFFF" stroke="#BBBBBB" strokeWidth="2" strokeMiterlimit="10" cx="186.499" cy="127.512"
                    r="7"/>
            <polyline fill="none" stroke="#BBBBBB" strokeMiterlimit="10" points="490.997,-0.148 490.997,104.852 468.497,127.352
	193.497,127.352 "/>
            <polyline fill="none" stroke="#BBBBBB" strokeMiterlimit="10" points="510.997,-0.148 510.997,105.852 468.497,147.352
	175.497,147.352 155.497,127.352 53.497,127.352 "/>
          </svg>

        </div>
    );
  }
}
export default withRouter(NewSIngleSchema)