import React from 'react';
import loader from '../../assets/img/no-copia.gif_c200';

class PageLoader extends React.Component{
    render(){
        return (
        <div className="Page-loader">
          <img src={loader} alt=""/>
        </div>
        );
    }
}
export default PageLoader