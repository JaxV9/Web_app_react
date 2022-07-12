import React, { Component } from "react";
import '../style/crypto.css'
// import CoinMarket from '../components/coinmarket0';
// import CoinMarket1 from './cryptomarket1'


class Inbox extends Component {

    render() {
        return (
            <>
                <div className="title">
                    <h1>CRYPTO-MONNAIES</h1>
                    <span className="LineTitle"></span>
                </div>

                <div>
                    <h2 className="crypto-title">Cours de bourse</h2>
                </div>

                <iframe className="iframeCrypto" src="https://www.widgets.investing.com/top-cryptocurrencies?theme=darkTheme"
                    frameborder="0" allowtransparency="true" marginwidth="0" marginheight="0"></iframe>

                <div className="divider"></div>

                <div>
                    <h2 className="crypto-title">Calendrier économique
                    </h2>
                </div>

                <iframe className="iframeCrypto2" src="https://sslecal2.investing.com?ecoDayBackground=%232b2b2b&amp;borderColor=%23ffffff&amp;ecoDayFontColor=%23000000&amp;columns=exc_flags,exc_currency
                ,exc_importance,exc_actual,exc_forecast,exc_previous&amp;features=datepicker,timezone&amp;countries=25,32,6,37,72,22,17,39,14,10,35,43,56,36,110,11,26,12,4,5&amp;calType=week&amp;timeZone=58&amp;lang=1"
                    allowtransparency="true" ></iframe>

                <div className="divider"></div>


            </>
        );
    }
}

export default Inbox;