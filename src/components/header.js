import React from 'react';
import ChangeClassClose from './buttonHeader/closebutton';
import ChangeClassBig from './buttonHeader/bigButton';
import ChangeClassMin from './buttonHeader/minButton';

class HeaderType extends React.Component {
    render() {
        
        return (
            <>
                <div className="window-header"  >
                    <div className="TestContent">
                            <div className="close" id="close" title="close" onClick={ChangeClassClose}>
                            </div>

                        <div className="hide" id="min" title="diminuer" onClick={ChangeClassMin}>
                        </div>
                        <div className="open" id="big" title="agrandir" onClick={ChangeClassBig}>
                        </div>
                        <div>
                        </div>
                    </div>
                    <div className="test_2" >

                    </div>
                </div>

            </>
        )
    }
}

export default HeaderType;