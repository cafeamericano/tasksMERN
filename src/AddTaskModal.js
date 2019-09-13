import React, { Component } from "react";

class AddTaskModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: this.props.visibility,
      newTaskName: ""
    };
    this.addTaskToDatabase = this.addTaskToDatabase.bind(this);
  }

  componentDidUpdate() {
    let x = this.props.visibility;
    if (x !== this.state.visible) {
      this.setState({ visible: x });
    }
  }

  addTaskToDatabase(event) {
    event.preventDefault();
    return fetch("/addtask", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        taskName: this.state.newTaskName
      })
    }).then(response => {
      console.log(response);
      this.setState({ newTaskName: "" });
      this.props.toggleAddTaskModal();
    });
  }

  updateInputValue_taskName = event => {
    this.setState({ newTaskName: event.target.value });
  };

  render() {
    //Return
    if (this.state.visible) {
      return (
        <div className="modal-background-react">
          <div className="modal-foreground-react animated fadeInDown">
            <form onSubmit={this.addTaskToDatabase} className="row">
              <label>Task Name</label>
              <input
                autoFocus
                type="text"
                className="form-control mb-3"
                placeholder="Enter a new task"
                value={this.state.newTaskName}
                onChange={this.updateInputValue_taskName}
              />
              <div className="text-right full-width">
                <span
                  className="btn btn-secondary mr-2"
                  onClick={this.props.toggleAddTaskModal}
                >
                  Cancel
                </span>
                <button type="submit" className="btn btn-primary mr-2">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default AddTaskModal;
