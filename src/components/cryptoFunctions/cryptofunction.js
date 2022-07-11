import React from 'react';
import {appendScript} from 'utils/appendScript'



class CryptoNews extends React.Component {
    componentDidMount () {
        appendScript("/path/to/resource.js");
    }
    <script type="text/javascript" src="https://files.coinmarketcap.com/static/widget/currency.js"></script>
        <div class="coinmarketcap-currency-widget" data-currencyid="1" data-base="USD" data-secondary="" data-ticker="true"
        data-rank="true" data-marketcap="true" data-volume="true" data-statsticker="true" data-stats="USD"></div>
    }

        


export default CryptoNews;