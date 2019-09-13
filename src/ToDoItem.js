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
    this.state.completed
      ? this.setState({ completed: false })
      : this.setState({ completed: true });
  }

  render() {
    return (
      <div className="row">
        <div className="col-1 text-left" onClick={this.toggleCompletion}>
          {this.state.completed ? "Yay" : "No"}
        </div>
        <div className="col-10">{this.props.data.taskName}</div>
      </div>
    );
  }
}

export default ToDoItem;
