import React, { Component } from "react";
import Sidepanel from "./Sidepanel.js";
import Taskbox from "./Taskbox.js";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeList: ""
    };
    this.setActiveList = this.setActiveList.bind(this);
  }

  setActiveList(listName) {
    this.setState({ activeList: listName });
  }

  render() {
    return (
      <main className="row full-height">
        <div className="col-3 p-5 bg-primary text-light">
          <h4>Tasks</h4>
          <hr></hr>
          <Sidepanel makeActiveList={this.setActiveList} />
        </div>
        <div className="col-9 p-5">
          <Taskbox activeList={this.state.activeList} />
        </div>
      </main>
    );
  }
}

export default Main;
