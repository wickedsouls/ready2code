import React from 'react';
import anime from 'animejs';
import {withRouter} from 'react-router-dom';

class AboutInnerSchema extends React.Component {
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
    eraseLines(this.schemaLeft);
  };

  render() {

    return (
        <div className="schema" ref={(svg) => this.svg = svg}>
          <svg version="1.1" x="0px" y="0px"
               className="schema-left"
               ref={(svg) => this.schemaLeft = svg}
               width="291.352px" height="280.096px" viewBox="0 0 291.352 280.096"
               enableBackground="new 0 0 291.352 280.096">
            <path fill="none" stroke="#BBBBBB" strokeMiterlimit="10" d="M187.998,299.852"/>
            <polyline fill="none" stroke="#BBBBBB" strokeMiterlimit="10" points="56.998,94.852 56.998,118 56.998,117.957 45.747,129.229 
	45.998,129 45.998,168.852 "/>
            <polyline fill="none" stroke="#BBBBBB" strokeMiterlimit="10" points="76.998,94.852 76.998,118 76.998,117.957 65.747,129.229 
	65.998,129 65.998,168.852 "/>
            <polyline fill="none" stroke="#BBBBBB" strokeMiterlimit="10" points="96.998,94.852 96.998,118 96.998,117.957 85.747,129.229 
	85.998,129 85.998,168.852 "/>
            <polyline fill="none" stroke="#BBBBBB" strokeMiterlimit="10" points="136.998,94.852 136.998,118 136.998,117.957 
	125.747,129.229 125.998,129 125.998,168.852 "/>
            <polyline fill="none" stroke="#BBBBBB" strokeMiterlimit="10" points="116.998,94.852 116.998,118 116.998,117.957 
	105.747,129.229 105.998,129 105.998,168.852 "/>
            <circle fill="#FFFFFF" stroke="#BBBBBB" strokeWidth="2" strokeMiterlimit="10" cx="45" cy="175.66" r="7"/>
            <circle fill="#FFFFFF" stroke="#BBBBBB" strokeWidth="2" strokeMiterlimit="10" cx="65" cy="175.66" r="7"/>
            <circle fill="#FFFFFF" stroke="#BBBBBB" strokeWidth="2" strokeMiterlimit="10" cx="85" cy="175.66" r="7"/>
            <circle fill="#FFFFFF" stroke="#BBBBBB" strokeWidth="2" strokeMiterlimit="10" cx="105" cy="175.66" r="7"/>
            <circle fill="#FFFFFF" stroke="#BBBBBB" strokeWidth="2" strokeMiterlimit="10" cx="125" cy="175.66" r="7"/>
            <polyline fill="none" stroke="#BBBBBB" strokeMiterlimit="10" points="156.998,94.852 156.998,118 156.998,117.957 
	145.747,129.229 145.998,129 145.998,168.852 "/>
            <circle fill="#FFFFFF" stroke="#BBBBBB" strokeWidth="2" strokeMiterlimit="10" cx="145" cy="175.66" r="7"/>
            <polyline fill="none" stroke="#BBBBBB" strokeMiterlimit="10" points="23.998,230.852 23.998,200.852 24.249,201.103 
	5.998,182.852 5.998,129 5.998,129.432 5.998,129.25 16.998,118 16.998,94.852 "/>
            <circle fill="#FFFFFF" stroke="#BBBBBB" strokeWidth="2" strokeMiterlimit="10" cx="24" cy="236.66" r="7"/>
            <polyline fill="none" stroke="#BBBBBB" strokeMiterlimit="10" points="43.998,230.852 43.998,200.852 44.249,201.103 
	25.998,182.852 25.998,129 25.998,129.432 25.998,129.25 36.998,118 36.998,94.852 "/>
            <circle fill="#FFFFFF" stroke="#BBBBBB" strokeWidth="2" strokeMiterlimit="10" cx="44" cy="236.66" r="7"/>
          </svg>


        </div>
    );
  }
}
export default withRouter(AboutInnerSchema)