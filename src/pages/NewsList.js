import React from 'react';
import post1 from '../assets/img/laptop.jpg';
import {Link} from 'react-router-dom';
import Schema from '../layout/schemas/NewsListSchema';
import Page from '../layout/Page';

class NewsList extends React.Component {
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
        <Page id="naujienos" title="[naujienos]"  description="naujienos" className="News-List">
          {this.state.show && <Schema/>}
          <div className="container">
            <Link to="/naujienos/nemokai-savaitgalio-kursai" className="list-item">
              <img src={post1} alt="pc"/>
              <h2 data-text="Nemokami savaitgalio kursai!" className="glitch">
                Nemokami savaitgalio kursai!
              </h2>
              <p>
                2018-09-15
              </p>
            </Link>
          </div>
        </Page>
    );
  }
}
export default NewsList