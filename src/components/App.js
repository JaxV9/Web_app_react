import React from 'react';
import HeaderType from './header';
import ColumnLeft from './column_left';
import ColumnRight from './column_right';
import { BrowserRouter, Link } from 'react-router-dom';
import Draggable from 'react-draggable';


class App extends React.Component {
  

  render() {


    return (
      <BrowserRouter >

        
        <Draggable
        handle='.window-header'>

          <div>
          <div className="window" id="window" >
            <HeaderType />
            <div className='window_inner'>
              <ColumnLeft />
              <ColumnRight />
            </div>
          </div>
          </div>
          </Draggable>

          <div className="addWindowBody" id="openWindow">
            <a href='/'>
              <div className="addWindow">
                <i class="material-symbols-outlined">
                  open_in_full
                </i>
              </div>
            </a>
          </div>




          {/* <div className="addDarkMode" /> */}
        
      </BrowserRouter>
    );
  }
}

export default App;