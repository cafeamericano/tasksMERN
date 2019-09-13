import React, { Component } from "react";

class AddTaskModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: this.props.visibility,
      newTaskName: "",
      newAssociatedList: ""
    };
    this.addTaskToDatabase = this.addTaskToDatabase.bind(this);
  }

  componentDidUpdate() {
    let x = this.props.visibility;
    if (x !== this.state.visible) {
      this.setState({ visible: x });
    }
  }

  addTaskToDatabase() {
    return fetch("/addtask", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        taskName: this.state.newTaskName,
        associatedList: this.state.newAssociatedList
      })
    }).then(response => console.log(response));
  }

  updateInputValue_taskName = event => {
    this.setState({ newTaskName: event.target.value });
  };

  updateInputValue_associatedList = event => {
    this.setState({ newAssociatedList: event.target.value });
  };

  render() {
    //Return
    if (this.state.visible) {
      return (
        <div className="modal-background-react">
          <div className="modal-foreground-react animated fadeInDown">
            {/* Begin Modal Content */}
            <div class="modal-header">
              <h5 class="modal-title">Add a Task</h5>
            </div>
            <div class="modal-body">
              <div class="form-group row">
                <label for="inputEmail3" class="col-sm-2 col-form-label">
                  Task Name
                </label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Task name"
                    value={this.state.newTaskName}
                    onChange={this.updateInputValue_taskName}
                  />
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-2 col-form-label">List Name</label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="List name"
                    value={this.state.newAssociatedList}
                    onChange={this.updateInputValue_associatedList}
                  />
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                onClick={this.props.toggleAddTaskModal}
              >
                Close
              </button>
              <div onClick={this.props.toggleAddTaskModal}>
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={this.addTaskToDatabase}
                >
                  Save changes
                </button>
              </div>
            </div>
            {/* End Modal Content */}
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default AddTaskModal;
