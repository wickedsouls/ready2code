import React from 'react';
import fb from '../assets/icons/if_06-facebook_104498.svg';
import instagram from '../assets/icons/if_38-instagram_104466.svg';
import linkedin from '../assets/icons/if_social-linkedin_216394.svg';
import youtube from '../assets/icons/if_18-youtube_104482.svg';

const Social = (props)=>{
    return (
        <div className="social">
          <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/Ready2code-967088000151889">
            <img src={fb} alt=""/>
          </a>
          <a href="#"><img src={instagram} alt=""/></a>
          <a href="#"><img src={linkedin} alt=""/></a>
          <a rel="noopener noreferrer" target="_blank" href="https://www.youtube.com/channel/UCabQxqkYQ3Gg8-ebnTAY0Qw?view_as=subscriber"><img src={youtube} alt=""/></a>
        </div>
    );
};
export default Social