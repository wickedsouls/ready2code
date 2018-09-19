import React from 'react';
import {Link} from 'react-router-dom';
import LogoSchema from './schemas/LogoSchema';
import MenuSchema from './schemas/MenuSchema';
import logo from '../assets/img/logo.svg';

const links = [
  {
    to: '/apie-mus',
    text: 'Apie.Mus'
  },
  {
    to: '/programos',
    text: 'Programos'
  },
  {
    to: '/naujienos',
    text: 'Naujienos'
  },
  {
    to: '/kontaktai',
    text: 'kontaktai'
  },
];

class Header extends React.Component {
  state = {
    showMenu: false
  };
  toggleMenu = () => {
    document.body.classList.toggle("no-scroll");
    this.setState((prevState) => {
      return {showMenu: !prevState.showMenu}
    })
  };
  hideMenu = () => {
    document.body.classList.remove("no-scroll");
    this.setState({showMenu: false})
  };

  componentDidMount() {
    window.addEventListener('resize', () => {
      this.hideMenu()
    })
  }

  render() {
    const {current} = this.props;
    const isCurrent = (to, current) => {
      if (to === '/' && current === to) {
        return true;
      } else if (to !== '/' && current.includes(to)) {
        return true;
      }

      return false;
    };

    const HeaderLink = ({to, text, current}) => (
        <li onClick={this.hideMenu} key={text}>
          <Link className={isCurrent(to, current) ? 'active' : ''}  to={to}>
                  <span data-text={text} className="glitch">
                    {text}
                  </span>
          </Link>
        </li>
    );
    return (
        <header id="header" className="main-header">
          <LogoSchema/>
          <MenuSchema/>
          <Link to='/' className="logo">
            <img className="logo" src={logo} alt="ready2code" onClick={this.hideMenu}/>
          </Link>
          <div className="bars" onClick={this.toggleMenu}>
            <div className="bar"/>
            <div className="bar"/>
            <div className="bar"/>
          </div>
          <nav>
            <ul id="links">
              {links.map((link, index) => {
                return <HeaderLink key={index} current={current} {...link} />;
              })}
            </ul>
          </nav>
        </header>
    )
  }
}
export default Header