import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      lng: null,
      coordsLoaded: false,
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        coordsLoaded: true,
      });
    });
  }
  render() {
    const containerStyle = {
      width: "85%",
      height: "255px",
      border: "solid",
      borderWidth: "thin",
      borderColor: "#dbdbdb",
      borderRadius: "3px",
    };
    return (
      <div>
        {this.state.coordsLoaded ? (
          <Map
            google={this.props.google}
            zoom={9.8}
            disableDefaultUI={true}
            containerStyle={containerStyle}
            initialCenter={{
              lat: this.state.lat,
              lng: this.state.lng,
            }}
          />
        ) : null}
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS,
})(MapContainer);
