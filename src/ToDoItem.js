import React, { Component } from "react";

class ToDoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      completed: this.props.data.completed
    };
    this.toggleCompletion = this.toggleCompletion.bind(this);
  }

  toggleCompletion() {
    if (this.state.completed) {
      this.setState({ completed: false });
      this.updateCompletionStatusOnDatabase(this.props.data._id, false);
    } else {
      this.setState({ completed: true });
      this.updateCompletionStatusOnDatabase(this.props.data._id, true);
    }
  }

  updateCompletionStatusOnDatabase(taskId, completionStatus) {
    console.log(taskId);
    console.log(completionStatus);
    return fetch("/update", {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        taskId: taskId,
        completionStatus: completionStatus
      })
    }).then(response => console.log(response));
  }

  render() {
    return (
      <div className="row mb-2">
        <div className="col-1 text-left" onClick={this.toggleCompletion}>
          {this.state.completed ? (
            <i class="far fa-check-circle fa-lg"></i>
          ) : (
            <i class="far fa-circle fa-lg"></i>
          )}
        </div>
        <div className="col-11">{this.props.data.taskName}</div>
      </div>
    );
  }
}

export default ToDoItem;
