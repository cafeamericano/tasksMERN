import React, { Component } from "react";

class MyComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      databaseRecords: []
    };
  }

  componentDidMount() {
    this.performSearch();
  }

  performSearch() {
    let url = "/api";
    fetch(url)
      .then(response => response.json())
      .then(results => {
        console.log(results);
        this.setState({
          databaseRecords: results
        });
      });
  };

  drawToDOM = (argObj) => (
    <div>
      {argObj.name} {argObj.color}
    </div>
  )

  render() {
    var items = this.state.databaseRecords
    return <div>{items.map(this.drawToDOM)}</div>;
  }
}

export default MyComp;
