import React, { Component } from "react";

class Taskbox extends Component {
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
    let url = "/usertasks";
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
    <div className="card p-2 mb-2 shadow">
      <div>
        <input type="checkbox" /> {argObj.taskName}
      </div>
    </div>
  );

  render() {
    var activeList = this.props.activeList;
    var allItems = this.state.databaseRecords;
    var filteredArr = allItems.filter(function(item) {
      return item.associatedList === activeList;
    });
    var arrayToUse;
    if (activeList !== "All Tasks") {
      arrayToUse = filteredArr;
    } else {
      arrayToUse = allItems;
    }
    return (
      <div>
        <h3>{this.props.activeList}</h3>
        <hr></hr>
        <div>{arrayToUse.map(this.drawToDOM)}</div>
      </div>
    );
  }
}

export default Taskbox;
