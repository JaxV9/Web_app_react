import React,{Component} from "react";
import '../style/crypto.css'


class CoinMarket extends Component {
    componentDidMount() {
      const script = document.createElement("script");    script.async = true;    script.src = "https://files.coinmarketcap.com/static/widget/currency.js";    this.div.appendChild(script);  }
    render() {
      return (
        <div className="App" ref={el => (this.div = el)}>
          {<script type="text/javascript" ></script>}
          <div class="coinmarketcap-currency-widget" data-currencyid="1" data-base="USD" data-secondary="" data-ticker="true"
           data-rank="true" data-marketcap="true" data-volume="true" data-statsticker="true" data-stats="USD"></div>
        </div>
      );
    }
  }

export default CoinMarket;