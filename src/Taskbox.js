import React, { Component } from "react";

var incompleteIcon = "far fa-circle";
var completeIcon = "fas fa-check-circle";
var taskCardClass = "card p-2 mb-2 shadow container";

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

  render() {
    // ARRAY MANAGEMENT########################################
    //Define the active list
    var activeList = this.props.activeList;
    //Gather all of the users tasks
    var allItems = this.state.databaseRecords;
    //Isolate items relevant to the active list
    var filteredArr = allItems.filter(function(item) {
      return item.associatedList === activeList && item.completed === false;
    });
    //Isolate items that are complete
    var completedItemsArr = allItems.filter(function(item) {
      return item.completed === true;
    });
    //Choose the array to use based on active list
    var arrayToUse;
    if (activeList === "All Tasks") {
      arrayToUse = allItems;
    } else if (activeList === "Completed") {
      arrayToUse = completedItemsArr;
    } else {
      arrayToUse = filteredArr;
    }

    // ELEMENT MANAGEMENT########################################
    //Create a new arraw to contain the HTML
    var assembledElements = [];

    for (var i = 0; i < arrayToUse.length; i++) {
      let x = arrayToUse[i];
      //Decide on the class
      let classToApply;
      if (x.completed === true) {
        classToApply = completeIcon;
      } else {
        classToApply = incompleteIcon;
      }
      //Push to array
      assembledElements.push(
        <div class={taskCardClass}>
          <div className="row">
            <div className="col-1 text-left">
              <i class={classToApply}></i>
            </div>
            <div className="col-10">{x.taskName}</div>
          </div>
        </div>
      );
    }

    //Return
    return (
      <div>
        <h3>{this.props.activeList}</h3>
        <hr></hr>
        <div>{assembledElements}</div>
      </div>
    );
  }
}

export default Taskbox;
