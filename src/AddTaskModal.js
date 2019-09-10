import React, { Component } from "react";

class AddTaskModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  render() {
    //Return
    if (this.state.visible) {
      return (
        <div className="modal-background-react">
          <div className="modal-foreground-react">banana</div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default AddTaskModal;
