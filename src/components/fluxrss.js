import React,{Component} from "react";
import ReactDOM from "react-dom";


class RSS extends React.Component {

    componentDidMount() {
        const script = document.createElement("script"); script.async = true; script.src = "https://widget.rss.app/v1/magazine.js"; this.div.appendChild(script);
    }


    render() {
        return (
            <>
                <div className="title">
                    <h1>FIL D'ACTUALITÉS</h1>
                    <span className="LineTitle"></span>
                </div>


                <div class="elfsight-app-5450ed1c-3b7a-4454-ba4a-f57bb952535e" ref={el => (this.div = el)}>
                    {<script src="https://widget.rss.app/v1/magazine.js" type="text/javascript" async></script>}
                    <rssapp-magazine id="AWEsSx5ZIUDtPfLB"></rssapp-magazine>
                </div>

                {/* <div class="elfsight-app-5450ed1c-3b7a-4454-ba4a-f57bb952535e" ref={el => (this.div = el)}>
                    {<script src="https://apps.elfsight.com/p/platform.js" defer></script>}
                </div> */}

            </>
        )
    }
}

export default RSS;

