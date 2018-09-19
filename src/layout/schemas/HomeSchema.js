import React from 'react';
import anime from 'animejs';
import {withRouter} from 'react-router-dom';

class HomeSchema extends React.Component {
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
          duration: 3500,
          delay: function (el, n) {
            return n * 250
          },
          direction: 'normal',
          loop: false
        });
      }
    };
    drawLines(this.schemaRight);
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
    eraseLines(this.schemaRight);
    eraseLines(this.schemaLeft);
    eraseLines(this.schemaCenter)
  };

  render() {

    return (
        <div className="schema"  ref={(svg) => this.svg = svg} >
          <svg version="1.1" x="0px" y="0px" className="schema-left"
               ref={(svg) => this.schemaLeft = svg}
               width="291.352px" height="795.514px" viewBox="0 0 291.352 795.514"
               enableBackground="new 0 0 291.352 795.514">
            <polyline fill="none" stroke="#BBBBBB" strokeMiterlimit="10" points="17.998,94.354 17.998,117.354 6.748,128.604 6.998,128.354
	6.998,781.354 "/>
            <polyline fill="none" stroke="#BBBBBB" strokeMiterlimit="10" points="37.998,94.354 37.998,117.354 26.748,128.604
	26.998,128.354 26.998,609.354 "/>
            <circle strokeWidth="2" fill="#ffffff" stroke="#BBBBBB" strokeMiterlimit="10" cx="26.5" cy="616.014" r="7"/>
            <circle strokeWidth="2" fill="#ffffff" stroke="#BBBBBB" strokeMiterlimit="10" cx="7.5" cy="788.014" r="7"/>
            <circle strokeWidth="2" fill="#ffffff" stroke="#BBBBBB" strokeMiterlimit="10" cx="46.5" cy="616.014" r="7"/>
            <circle strokeWidth="2" fill="#ffffff" stroke="#BBBBBB" strokeMiterlimit="10" cx="214.49" cy="447.02"
                    r="7"/>
            <circle strokeWidth="2" fill="#ffffff" stroke="#BBBBBB" strokeMiterlimit="10" cx="211.49" cy="300.02"
                    r="7"/>
            <circle strokeWidth="2" fill="#ffffff" stroke="#BBBBBB" strokeMiterlimit="10" cx="257.49" cy="98.02" r="7"/>
            <circle strokeWidth="2" fill="#ffffff" stroke="#BBBBBB" strokeMiterlimit="10" cx="277.49" cy="98.02" r="7"/>
            <polyline fill="none" stroke="#BBBBBB" strokeMiterlimit="10" points="76.998,94.354 76.998,117.354 152.852,193.208
	152.998,193.354 152.998,410.354 189.847,447.202 189.498,446.854 207.498,446.854 "/>
            <polyline fill="none" stroke="#BBBBBB" strokeMiterlimit="10" points="136.998,94.354 136.998,117.354 181.415,161.771
	181.498,161.854 226.498,161.854 256.998,131.354 256.998,105.354 "/>
            <polyline fill="none" stroke="#BBBBBB" strokeMiterlimit="10" points="116.998,94.354 116.998,117.354 175.707,176.062
	175.498,175.854 232.498,175.854 232.207,175.854 276.998,131.062 276.998,131.354 276.998,105.354 "/>
            <path fill="none" stroke="#BBBBBB" strokeMiterlimit="10" d="M187.998,300.354"/>
            <polyline fill="none" stroke="#BBBBBB" strokeMiterlimit="10" points="156.998,94.354 156.998,117.354 186.415,146.771
	186.498,146.854 222.498,146.854 236.998,132.354 236.998,54.354 290.998,0.354 "/>
            <polyline fill="none" stroke="#BBBBBB" strokeMiterlimit="10" points="57.998,94.354 57.998,117.354 46.748,128.604
	46.998,128.354 46.998,609.354 "/>
            <polyline fill="none" stroke="#BBBBBB" strokeMiterlimit="10" points="96.998,94.354 96.998,117.354 170.248,190.604
	169.998,190.354 169.998,282.354 187.498,299.854 204.498,299.854 "/>
          </svg>
          <svg version="1.1" x="0px" y="0px" className="schema-center"
               ref={(svg) => this.schemaCenter = svg}
               width="400.354px" height="788.166px" viewBox="0 0 400.354 788.166"
               enableBackground="new 0 0 400.354 788.166">
            <circle strokeWidth="2" fill="#ffffff" stroke="#BBBBBB" strokeMiterlimit="10" cx="333.854" cy="97" r="7"/>
            <circle strokeWidth="2" fill="#ffffff" stroke="#BBBBBB" strokeMiterlimit="10" cx="333.854" cy="117" r="7"/>
            <circle strokeWidth="2" fill="#ffffff" stroke="#BBBBBB" strokeMiterlimit="10" cx="333.854" cy="137" r="7"/>
            <circle strokeWidth="2" fill="#ffffff" stroke="#BBBBBB" strokeMiterlimit="10" cx="50.345" cy="667.666"
                    r="7"/>
            <circle strokeWidth="2" fill="#ffffff" stroke="#BBBBBB" strokeMiterlimit="10" cx="70.345" cy="667.666"
                    r="7"/>
            <circle strokeWidth="2" fill="#ffffff" stroke="#BBBBBB" strokeMiterlimit="10" cx="130.345" cy="446.666"
                    r="7"/>
            <circle strokeWidth="2" fill="#ffffff" stroke="#BBBBBB" strokeMiterlimit="10" cx="130.345" cy="780.666"
                    r="7"/>
            <circle strokeWidth="2" fill="#ffffff" stroke="#BBBBBB" strokeMiterlimit="10" cx="110.345" cy="780.666"
                    r="7"/>
            <circle strokeWidth="2" fill="#ffffff" stroke="#BBBBBB" strokeMiterlimit="10" cx="90.345" cy="780.666"
                    r="7"/>
            <polyline fill="none" stroke="#BBBBBB" strokeMiterlimit="10" points="327.354,96.5 110.354,96.5 0.854,206 0.854,334 0.354,333.5
	29.854,363 29.854,454 49.854,477 49.854,661 "/>
            <polyline fill="none" stroke="#BBBBBB" strokeMiterlimit="10" points="327.354,116.5 116.354,116.5 20.854,212 20.854,333
	49.854,363 49.854,454 69.854,477 69.854,661 "/>
            <polyline fill="none" stroke="#BBBBBB" strokeMiterlimit="10" points="327.354,136.5 124.354,136.5 124.291,136.562 40.854,220
	40.854,333 69.854,363 69.854,454 89.854,477 89.854,773 "/>
            <polyline fill="none" stroke="#BBBBBB" strokeMiterlimit="10" points="358.854,0 358.854,137 340.354,156.5 131.354,156.5
	60.854,227 60.854,334 89.854,362 89.854,454 109.854,476 109.854,773 "/>
            <polyline fill="none" stroke="#BBBBBB" strokeMiterlimit="10" points="378.854,0 378.854,145 347.354,176.5 138.354,176.5
	80.854,234 80.854,333 109.854,362 109.854,454 129.854,476 129.854,774 "/>
            <polyline fill="none" stroke="#BBBBBB" strokeMiterlimit="10" points="399.854,0 399.854,152 399.854,151.815 354.404,196.5
	354.354,196.5 143.354,196.5 144.354,196.5 100.854,241 100.854,333 129.854,363 129.854,439 "/>
          </svg>


          <svg className="schema-right" ref={(svg) => this.schemaRight = svg} version="1.1" x="0px" y="0px"
               width="328.5px" height="780.167px" viewBox="0 0 328.5 780.167" enableBackground="new 0 0 328.5 780.167">
            <circle fill="none" strokeWidth="2" stroke="#BBBBBB" strokeMiterlimit="10" cx="67.998" cy="520.667" r="7"/>
            <circle fill="none" strokeWidth="2" stroke="#BBBBBB" strokeMiterlimit="10" cx="67.998" cy="539.667" r="7"/>
            <circle fill="none" strokeWidth="2" stroke="#BBBBBB" strokeMiterlimit="10" cx="67.998" cy="501.667" r="7"/>
            <circle fill="none" strokeWidth="2" stroke="#BBBBBB" strokeMiterlimit="10" cx="181.998" cy="576.667" r="7"/>
            <circle fill="none" strokeWidth="2" stroke="#BBBBBB" strokeMiterlimit="10" cx="201.998" cy="772.667" r="7"/>
            <circle fill="none" strokeWidth="2" stroke="#BBBBBB" strokeMiterlimit="10" cx="221.998" cy="772.667" r="7"/>
            <polyline fill="none" stroke="#BBBBBB" strokeMiterlimit="10" points="1.833,0 1.833,247 1.355,246.522 120.833,366 120.833,488
	107.249,501.584 107.333,501.5 75.333,501.5 "/>
            <polyline fill="none" stroke="#BBBBBB" strokeMiterlimit="10" points="22.833,0 22.833,237 140.833,357 140.833,488
	108.208,520.625 108.333,520.5 75.333,520.5 "/>
            <polyline fill="none" stroke="#BBBBBB" strokeMiterlimit="10" points="42.833,0 42.833,228 161.833,347 161.833,488
	110.041,539.792 110.333,539.5 75.333,539.5 "/>
            <polyline fill="none" stroke="#BBBBBB" strokeMiterlimit="10"
                      points="62.833,0 62.833,219 181.833,338 181.833,570 "/>

            <polyline fill="none" stroke="#BBBBBB" strokeMiterlimit="10"
                      points="82.833,0 82.833,210 201.833,329 201.833,766 "/>
            <polyline fill="none" stroke="#BBBBBB" strokeMiterlimit="10" points="102.333,0 102.833,1.718 102.833,201 221.833,320
	221.833,766 "/>
          </svg>
        </div>
    );
  }
}
export default withRouter(HomeSchema)