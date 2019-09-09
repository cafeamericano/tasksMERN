import React, { Component } from "react";

var incompleteIcon = "far fa-circle ml-2 mr-2"
var completeIcon = "fas fa-check-circle ml-2 mr-2"

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

  drawToDOM = (argObj) => (
    <div className="card p-2 mb-2 shadow">
      <div>
        <i className={incompleteIcon}></i> {argObj.taskName}
      </div>
    </div>
  );

  render() {
    var activeList = this.props.activeList;
    var allItems = this.state.databaseRecords;
    var filteredArr = allItems.filter(function(item) {
      return item.associatedList === activeList;
    });
    var completedItemsArr = allItems.filter(function(item) {
      return item.completed === true;
    });
    var arrayToUse;
    if (activeList === "All Tasks") {
      arrayToUse = allItems;
    } else if (activeList === "Completed") {
      arrayToUse = completedItemsArr;
    } else {
      arrayToUse = filteredArr;
    }
    return (
      <div className="animated slideInRight">
        <h3>{this.props.activeList}</h3>
        <hr></hr>
        <div>{arrayToUse.map(this.drawToDOM)}</div>
      </div>
    );
  }
}

export default Taskbox;
