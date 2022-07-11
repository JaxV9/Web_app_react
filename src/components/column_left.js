import React, { Component } from 'react';
import '../style/columnLeft.css';
import { Link } from 'react-router-dom';
import '../style/music.css';
import CloseMusic from './musicFunctions/closeMusic';
import FixElements0 from './functions/FunctionElement0';
import FixElements1 from './functions/FunctionElement1';
import FixElements2 from './functions/functionElement2';
import FixElements3 from './functions/FunctionElement3';
import FixElementsHome from './functions/FunctionElementHome';

import '../components/functions/functionsClip/clip.css';

class ColumnLeft extends React.Component {

  render() {
    return (
      <>
        <div className="column_left" id='column_left'>
          <Link exact to="/" className='link' onClick={FixElementsHome}>
            <div className="home" id="home" onClick={FixElementsHome}>
            </div>
          </Link>

          <div className="littleSpacer"></div>

          <Link to="/note" className='link'>
            <div className="elements" id="elements0" onClick={FixElements0}>
              Take notes
              <span className="line" />
            </div>
          </Link>
          <Link to="/inbox" className='link'>
            <div className="elements" id="elements1" onClick={FixElements1}>
              Crypto
              <span className="line" />
            </div>
          </Link>
          <Link to="/music" className='link'>
            <div className="elements" id="elements2" onClick={FixElements2}>
              Listen to music
              <span className="line" />
            </div>

          </Link>

          <Link to="/flux-rss" className='link'>
            <div className="elements" id="elements3" onClick={FixElements3}>
              RSS Feed
              <span className="line" />
            </div>

          </Link>


          <div className="spacer2" id="spacer2"></div>


          <div className="closeiframe" id="containerIframe">

            <div className="containerClose">
              <a href='https://open.spotify.com/embed/track/551xyaSJsg8hILXFq9JdST?utm_source=generator'
                target="myiframe">
                <div className="closeMusic" onClick={CloseMusic}></div>
              </a>
            </div>

            <iframe className="iframe" id="iframe" name='myiframe' src=""
              width="85%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write;
           encrypted-media; fullscreen; picture-in-picture"></iframe>

          </div>


        </div>

      </>
    );
  }
}
export default ColumnLeft;