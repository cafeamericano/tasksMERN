import React, { Component } from "react";
import Taskbox from "./Taskbox.js";
import AddTaskModal from "./AddTaskModal";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible_AddTaskModal: false
    };
    this.toggleAddTaskModal = this.toggleAddTaskModal.bind(this);
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
          <span class="navbar-brand mb-0 h1">TasksMERN I</span>
          <div onClick={this.toggleAddTaskModal}>
            <i class="far fa-plus-square text-light fa-2x"></i>
          </div>
        </nav>
        <AddTaskModal
          visibility={this.state.visible_AddTaskModal}
          toggleAddTaskModal={this.toggleAddTaskModal}
        />
        <div className="p-3">
          <Taskbox />
        </div>
      </main>
    );
  }
}

export default Main;
