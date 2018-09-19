import React from 'react';
import anime from 'animejs';
import {withRouter} from 'react-router-dom';

class ProgramsSingleSchema extends React.Component {
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
    // drawLines(this.schemaRight);
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
  };

  render() {

    return (
        <div className="schema" ref={(svg) => this.svg = svg}>
          <svg version="1.1" x="0px" y="0px"
               className="schema-left"
               ref={(svg) => this.schemaLeft = svg}
               width="964.498px" height="729.926px" viewBox="0 0 964.498 729.926" enableBackground="new 0 0 964.498 729.926">
            <path fill="none" stroke="#BBBBBB" strokeMiterlimit="10" d="M187.998,299.852"/>
            <polyline fill="none" stroke="#BBBBBB" strokeMiterlimit="10" points="77.998,93.852 77.998,117 77.998,116.852 "/>
            <polyline fill="none" stroke="#BBBBBB" strokeMiterlimit="10" points="97.998,93.852 97.998,117 97.998,116.852 "/>
            <circle fill="#FFFFFF" stroke="#BBBBBB" strokeWidth="2" strokeMiterlimit="10" cx="78" cy="123.66" r="7"/>
            <circle fill="#FFFFFF" stroke="#BBBBBB" strokeWidth="2" strokeMiterlimit="10" cx="58" cy="123.66" r="7"/>
            <circle fill="#FFFFFF" stroke="#BBBBBB" strokeWidth="2" strokeMiterlimit="10" cx="39" cy="123.66" r="7"/>
            <circle fill="#FFFFFF" stroke="#BBBBBB" strokeWidth="2" strokeMiterlimit="10" cx="98" cy="123.66" r="7"/>
            <circle fill="#FFFFFF" stroke="#BBBBBB" strokeWidth="2" strokeMiterlimit="10" cx="917" cy="228.66" r="7"/>
            <line fill="none" stroke="#BBBBBB" strokeMiterlimit="10" x1="18.998" y1="93.852" x2="18.998" y2="711.852"/>
            <circle fill="#FFFFFF" stroke="#BBBBBB" strokeWidth="2" strokeMiterlimit="10" cx="39" cy="629.66" r="7"/>
            <circle fill="#FFFFFF" stroke="#BBBBBB" strokeWidth="2" strokeMiterlimit="10" cx="19" cy="718.66" r="7"/>
            <circle fill="#FFFFFF" stroke="#BBBBBB" strokeWidth="2" strokeMiterlimit="10" cx="59" cy="629.66" r="7"/>
            <line fill="none" stroke="#BBBBBB" strokeMiterlimit="10" x1="38.998" y1="93.852" x2="38.998" y2="116.852"/>
            <line fill="none" stroke="#BBBBBB" strokeMiterlimit="10" x1="57.998" y1="93.852" x2="57.998" y2="116.852"/>
            <polyline fill="none" stroke="#BBBBBB" strokeMiterlimit="10" points="117.998,93.852 117.998,192.494 117.998,191.852
	102.498,208.352 69.498,208.352 69.845,208.352 38.998,240.257 38.998,239.852 38.998,622.852 "/>
            <polyline fill="none" stroke="#BBBBBB" strokeMiterlimit="10" points="137.998,93.852 137.998,200.494 137.998,199.852
	137.998,200.852 137.998,200.494 109.727,228.765 109.498,228.352 77.498,228.352 77.998,228.352 58.998,247.852 58.998,622.852 "/>
            <polyline fill="none" stroke="#BBBBBB" strokeMiterlimit="10" points="157.998,93.852 157.998,200.494 157.998,199.852
	157.998,200.852 157.998,200.494 186.27,228.352 186.519,228.352 186.646,228.352 910.498,228.352 "/>
          </svg>


        </div>
    );
  }
}
export default withRouter(ProgramsSingleSchema)