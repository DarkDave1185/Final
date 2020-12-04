import React from "react";
import { Map } from "react-leaflet;"

const position=(DEFAULT_LANGITUDE, DEFAULT_LATITUDE)
function Gps() {
  
  return (
    <div class="gps">
      <Map center={position} zoom={this.state.zoom}>
        
      </Map>
    </div>
  );
}

export default Gps;
