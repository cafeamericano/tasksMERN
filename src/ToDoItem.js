import React, { Component } from "react";

class ToDoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      completed: this.props.data.completed,
      taskId: this.props.data._id,
      animationClass: ""
    };
    this.toggleCompletion = this.toggleCompletion.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.deleteTaskOnDatabase = this.deleteTaskOnDatabase.bind(this);
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
    return fetch("/update", {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        taskId: taskId,
        completionStatus: completionStatus
      })
    }).then(response => console.log(response));
  }

  deleteTaskOnDatabase() {
    return fetch("/delete", {
      method: "delete",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        taskId: this.state.taskId
      })
    }).then(response => {
      console.log(response);
    });
  }

  removeTask() {
    this.deleteTaskOnDatabase();
  }

  render() {
    return (
      <div
        className={this.state.animationClass}
      >
        <section className="card mb-2 p-2 ">
          <div className="row">
            <div className="col-1 text-left" onClick={this.toggleCompletion}>
              {this.state.completed ? (
                <i className="far fa-check-circle fa-lg"></i>
              ) : (
                <i className="far fa-circle fa-lg"></i>
              )}
            </div>
            <div className="col-10">{this.props.data.taskName}</div>
            <div className="col-1 text-right" onClick={this.removeTask}>
              <i className="fas fa-times"></i>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ToDoItem;
