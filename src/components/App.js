import React from "react";
import SearchBar from "./searchBar";
import MapContainer from "./map";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: {},
    };
  }
  render() {
    const chargeStationHelper = async (e) => {
      e.preventDefault();
      const inputData = e.target[0].value;
      try {
        const myData = await fetch("http://localhost:3001/getChargeStation", {
          method: "POST",
          body: JSON.stringify({ inputData }),
          headers: { "Content-Type": "application/json" },
        });
        const apiData = await myData.json();
        if (apiData[0] === undefined) {
          window.alert("Invalid input");
          window.location.reload();
        }
        this.setState({ apiResponse: apiData[0] });
      } catch (error) {
        console.log("error");
      }
    };

    return (
      <div className="ui container">
        <center>
          <h1>CHARGE STATION</h1>
        </center>
        <SearchBar onSubmit={(e) => chargeStationHelper(e)} />
        <MapContainer data={this.state.apiResponse} />
      </div>
    );
  }
}

export default App;
