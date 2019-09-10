import React, { Component } from "react";
import Sidepanel from "./Sidepanel.js";
import Taskbox from "./Taskbox.js";
import AddTaskModal from "./AddTaskModal";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeList: "All Tasks",
      visible_AddTaskModal: false
    };
    this.setActiveList = this.setActiveList.bind(this);
    this.toggleAddTaskModal = this.toggleAddTaskModal.bind(this);
  }

  setActiveList(listName) {
    this.setState({ activeList: listName });
  }

  toggleAddTaskModal() {
    if (this.state.visible_AddTaskModal) {
      this.setState({ visible_AddTaskModal: false });
    } else {
      this.setState({ visible_AddTaskModal: true });
    }
  }
  render() {
    return (
      <main className="row full-height">
        <AddTaskModal
          visibility={this.state.visible_AddTaskModal}
          toggleAddTaskModal={this.toggleAddTaskModal}
        />
        <div className="col-3 p-3 bg-primary text-light">
          <h4>Tasks MERN</h4>
          <hr></hr>
          <div className="text-center" onClick={this.toggleAddTaskModal}>
            <i class="fas fa-plus-circle fa-3x"></i>
          </div>
          <hr></hr>
          <Sidepanel
            makeActiveList={this.setActiveList}
            activeList={this.state.activeList}
          />
        </div>
        <div className="col-9 p-5 bg-light">
          <Taskbox activeList={this.state.activeList} />
        </div>
      </main>
    );
  }
}

export default Main;
