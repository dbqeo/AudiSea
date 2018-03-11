import React, { Component } from "react"
import mp3 from './wingless.mp3';

class Index extends Component {

    render() {
        return(
            <div className="Index">
                <a-scene>
                    <a-assets>
                        <audio id="song" src={mp3} loop autostart="1"></audio>
                    </a-assets>

                    <a-gradient-sky material="shader: gradient; topColor: 191 96 255; bottomColor: 66 134 244;"></a-gradient-sky>

                    <a-text value="This is example text" color="red" position="-1.5 0.7 -3" scale="1.5 1.5 1.5"></a-text>

                    <a-ocean width="100" depth="100" density="90" color="#4286f4"></a-ocean>
                    
                    <a-camera position="0 0 0">
                        <a-cursor color="red"></a-cursor>
                    </a-camera>           
                </a-scene>
            </div>
        )
    }
}

export default Index