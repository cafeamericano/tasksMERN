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
  }

  drawToDOM = argObj => (
    <div
      onClick={() => this.props.makeActiveList(argObj.listName)}
      className="list-group-item pointer mb-2 bg-primary"
    >
      {argObj.listName}
    </div>
  );

  render() {
    var items = this.state.databaseRecords;
    return (
      <div>
        <div
          onClick={() => this.props.makeActiveList("All Tasks")}
          className="list-group-item pointer mb-2 bg-primary"
        >
          All Tasks
        </div>
        {items.map(this.drawToDOM)}
        <div
          onClick={() => this.props.makeActiveList("Completed")}
          className="list-group-item pointer mb-2 bg-primary"
        >
          Completed
        </div>
      </div>
    );
  }
}

export default Sidepanel;
