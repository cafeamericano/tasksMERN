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
    <div>
      <input type="checkbox" /> {argObj.taskName} | {argObj.associatedList}
    </div>
  );

  render() {
    var activeList = this.props.activeList
    var allItems = this.state.databaseRecords;
    var filteredArr = allItems.filter(function(item) {
      return item.associatedList === activeList;
    });
    return (
      <div>
        <div>{filteredArr.map(this.drawToDOM)}</div>
      </div>
    );
  }
}

export default Taskbox;
