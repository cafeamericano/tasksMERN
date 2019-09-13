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
      <main className="full-height bg-light">
        <nav class="navbar navbar-dark bg-primary">
          <span class="navbar-brand mb-0 h1">TasksMERN</span>
          <div onClick={this.toggleAddTaskModal}><i class="far fa-plus-square text-light fa-2x"></i></div>
        </nav>
        <AddTaskModal
          visibility={this.state.visible_AddTaskModal}
          toggleAddTaskModal={this.toggleAddTaskModal}
        />
        <div className='p-3'>
          <Taskbox activeList={this.state.activeList} />
        </div>
      </main>
    );
  }
}

export default Main;
