import React, { Component } from "react";
import ToDoItem from "./ToDoItem.js";

class Taskbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      databaseRecords: [],
      refreshCounter: 0
    };
  }

  componentDidMount() {
    this.performSearch();
  }

  componentDidUpdate() {
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
    let stuff = this.state.databaseRecords.map((item, i) => (
      <ToDoItem key={item._id} data={item} />
    ));
    return stuff;
  }
}

export default Taskbox;
