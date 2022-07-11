import React from 'react';
import '../style/music.css'
import OpenMusic from './musicFunctions/openMusic';
import plan from './functions/functionsClip/plan';
import Splash from './functions/functionsClip/splash';
import Stronger from './functions/functionsClip/stronger';
import Beijing from './functions/functionsClip/beijing';
import Soliterrien from './functions/functionsClip/soliterrien';
import Rencontre from './functions/functionsClip/rencontre';
import Heat from './functions/functionsClip/heatwaves';
import Lofi from './functions/functionsPlaylist/lofi';
import Underscore_ from './functions/functionsPlaylist/underscore_';
import HomeHappy from './functions/functionsPlaylist/happyHome';
import CodingMode from './functions/functionsPlaylist/codingMode';

class Music extends React.Component {



    render() {
        return (
            <>
                <div className="title">
                    <h1>Music</h1>
                    <span className="LineTitle"></span>
                </div>

                <h2 className="second-title">RECOMMENDATIONS</h2>

                <div class="wrapper">
                    <div class="slider">
                        <a href="https://open.spotify.com/embed/track/551xyaSJsg8hILXFq9JdST?utm_source=generator"
                            target="myiframe" onClick={OpenMusic}>
                            <div class="slide" id="firstMusic" onClick={plan}>
                                <div class="slideEnter" >
                                    <div class="img"></div>
                                    <h3>The Plan</h3>
                                </div>
                            </div>
                        </a>

                        <a href="https://open.spotify.com/embed/track/1T4gCNnApeyGgbuFTQSAJd?utm_source=generator"
                            target="myiframe" onClick={OpenMusic}>
                            <div class="slide" onClick={Splash}>
                                <div class="slideEnter">
                                    <div class="img2"></div>

                                    <h3>Splash</h3>
                                </div>
                            </div>
                            </a>
                            
                            <a href="https://open.spotify.com/embed/track/0j2T0R9dR9qdJYsB7ciXhf?utm_source=generator"
                            target="myiframe" onClick={OpenMusic}>
                            <div class="slide" onClick={Stronger}>
                                <div class="slideEnter">
                                    <div class="img3"></div>

                                    <h3>Stonger</h3>
                                </div>
                            </div>
                            </a>
                            
                            <a href="https://open.spotify.com/embed/track/0PWQP31v9xLgGIxWW00rE2?utm_source=generator"
                            target="myiframe" onClick={OpenMusic}>
                            <div class="slide" onClick={Beijing}>
                                <div class="slideEnter">
                                    <div class="img4"></div>

                                    <h3>Lost In Beijing</h3>
                                </div>
                            </div>
                            </a>

                            <a href="https://open.spotify.com/embed/track/7qj2pdwGVmN7E26nMVFeMq?utm_source=generator"
                            target="myiframe" onClick={OpenMusic}>
                            <div class="slide" onClick={Soliterrien}>
                                <div class="slideEnter">
                                    <div class="img5"></div>

                                    <h3>SOLITERRIEN</h3>
                                </div>
                            </div>
                            </a>
                            
                            <a href="https://open.spotify.com/embed/track/2toEys3zZ8rRB242Na7FZh?utm_source=generator"
                            target="myiframe" onClick={OpenMusic}>
                            <div class="slide" onClick={Rencontre}>
                                <div class="slideEnter">
                                    <div class="img6"></div>

                                    <h3>RENCONTRE</h3>
                                </div>
                            </div>
                            </a>

                            <a href="https://open.spotify.com/embed/track/6CDzDgIUqeDY5g8ujExx2f?utm_source=generator"
                            target="myiframe" onClick={OpenMusic}>
                            <div class="slide" onClick={Heat}>
                                <div class="slideEnter">
                                    <div class="img7"></div>

                                    <h3>Heat Waves</h3>
                                </div>
                            </div>
                            </a>
                    </div>
                </div>

                <h2 className="second-title">PLAYLISTS</h2>

                <div class="wrapper">
                    <div class="slider">
                        <a href="https://open.spotify.com/embed/playlist/0vvXsWCC9xrXsKd4FyS8kM?utm_source=generator"
                            target="myiframe" onClick={OpenMusic}>
                            <div class="slide" id="firstMusic" onClick={Lofi}>
                                <div class="slideEnter" >
                                    <div class="img01"></div>
                                    <h3>Lofi</h3>
                                </div>
                            </div>
                        </a>

                        <a href="https://open.spotify.com/embed/show/1sz1NhoHqbpXbzNlpOnFoz?utm_source=generator"
                            target="myiframe" onClick={OpenMusic}>
                            <div class="slide" id="firstMusic" onClick={Underscore_}>
                                <div class="slideEnter" >
                                    <div class="img02"></div>
                                    <h3>Underscore_</h3>
                                </div>
                            </div>
                        </a>

                        <a href="https://open.spotify.com/embed/playlist/37i9dQZF1DXeby79pVadGa?utm_source=generator"
                            target="myiframe" onClick={OpenMusic}>
                            <div class="slide" id="firstMusic" onClick={HomeHappy}>
                                <div class="slideEnter" >
                                    <div class="img03"></div>
                                    <h3>Get Home Happy!</h3>
                                </div>
                            </div>
                        </a>

                        <a href="https://open.spotify.com/embed/playlist/37i9dQZF1DX5trt9i14X7j?utm_source=generator"
                            target="myiframe" onClick={OpenMusic}>
                            <div class="slide" id="firstMusic" onClick={CodingMode}>
                                <div class="slideEnter" >
                                    <div class="img04"></div>
                                    <h3>Coding Mode</h3>
                                </div>
                            </div>
                        </a>


                    </div>
                </div>


                <div className='spacer'></div>

            </>
        )
    }
}

export default Music;