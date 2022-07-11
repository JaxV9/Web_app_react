import React from 'react';
import '../header'

function ChangeClassClose() { 
    document.getElementById('close').className = "newClose";
    document.getElementById('window').className = "newCloseWindow";
    document.getElementById('openWindow').className = "newOpenWindow";
    
}


export default ChangeClassClose;