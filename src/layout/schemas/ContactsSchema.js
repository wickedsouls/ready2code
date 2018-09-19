import React from 'react';
import anime from 'animejs';
import {withRouter} from 'react-router-dom';

class ContactsSchema extends React.Component {
  constructor(props) {
    super(props);

    this.props.history.listen((location, action) => {
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
               ref={(svg) => this.schemaLeft = svg} className="schema-left"
               width="291.352px" height="798.51px" viewBox="0 0 291.352 798.51"
               enableBackground="new 0 0 291.352 798.51">
            <polyline fill="none" stroke="#BBBBBB" strokeMiterlimit="10" points="17.998,93.852 17.998,116.852 6.748,128.102 6.998,127.852
	6.998,780.852 "/>
            <polyline fill="none" stroke="#BBBBBB" strokeMiterlimit="10" points="37.998,93.852 37.998,116.852 26.748,128.102
	26.998,127.852 26.998,608.852 "/>
            <path fill="none" stroke="#BBBBBB" strokeMiterlimit="10" d="M187.998,299.852"/>
            <circle fill="#FFFFFF" stroke="#BBBBBB" strokeWidth="2" strokeMiterlimit="10" cx="263.5" cy="127.512"
                    r="7"/>
            <circle fill="#FFFFFF" stroke="#BBBBBB" strokeWidth="2" strokeMiterlimit="10" cx="126.5" cy="438.512"
                    r="7"/>
            <circle fill="#FFFFFF" stroke="#BBBBBB" strokeWidth="2" strokeMiterlimit="10" cx="27.5" cy="615.512" r="7"/>
            <circle fill="#FFFFFF" stroke="#BBBBBB" strokeWidth="2" strokeMiterlimit="10" cx="174.5" cy="463.512"
                    r="7"/>
            <circle fill="#FFFFFF" stroke="#BBBBBB" strokeWidth="2" strokeMiterlimit="10" cx="174.5" cy="483.512"
                    r="7"/>
            <circle fill="#FFFFFF" stroke="#BBBBBB" strokeWidth="2" strokeMiterlimit="10" cx="174.5" cy="503.512"
                    r="7"/>
            <circle fill="#FFFFFF" stroke="#BBBBBB" strokeWidth="2" strokeMiterlimit="10" cx="174.5" cy="523.512"
                    r="7"/>
            <line fill="none" stroke="#BBBBBB" strokeWidth="3" strokeMiterlimit="10" x1="6.998" y1="788.852" x2="6.998"
                  y2="780.852"/>
            <polyline fill="none" stroke="#BBBBBB" strokeMiterlimit="10" points="57.998,93.852 57.998,116.852 57.998,116.809 46.748,128.08
	46.998,127.852 46.998,460.852 109.498,523.352 167.498,523.352 "/>
            <polyline fill="none" stroke="#BBBBBB" strokeMiterlimit="10" points="76.998,93.852 76.998,116.852 76.998,116.922
	65.748,130.263 65.998,129.931 65.998,455.852 114.498,503.352 167.498,503.352 "/>
            <polyline fill="none" stroke="#BBBBBB" strokeMiterlimit="10" points="136.998,93.852 136.998,116.852 136.998,116.683
	125.998,128.018 125.998,128.358 125.998,127.852 125.998,431.852 "/>
            <polyline fill="none" stroke="#BBBBBB" strokeMiterlimit="10" points="116.998,93.852 116.998,116.852 105.998,127.852
	105.998,444.852 105.998,445.188 123.837,463.027 123.498,463.352 167.498,463.352 "/>
            <polyline fill="none" stroke="#BBBBBB" strokeMiterlimit="10" points="96.998,93.852 96.998,116.852 85.998,129.852
	85.998,449.852 118.498,483.352 167.498,483.352 "/>
            <polyline fill="none" stroke="#BBBBBB" strokeMiterlimit="10" points="156.998,93.852 156.998,116.852 167.495,127.35
	167.498,127.352 256.498,127.352 "/>
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
export default withRouter(ContactsSchema)