import React, { Component } from "react";

class Sidepanel extends Component {
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
    let url = "/userlists";
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
      {argObj.listName}
    </div>
  )

  render() {
    var items = this.state.databaseRecords
    return <div>{items.map(this.drawToDOM)}</div>;
  }
}

export default Sidepanel;