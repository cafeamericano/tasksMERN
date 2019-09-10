import React, { Component } from "react";

class AddTaskModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: this.props.visibility
    };
  }

  componentDidUpdate() {
    let x = this.props.visibility;
    if (x !== this.state.visible) {
      this.setState({ visible: x });
    }
  }

  render() {
    //Return
    if (this.state.visible) {
      return (
        <div className="modal-background-react">
          <div className="modal-foreground-react">
            {/* Begin Modal Content */}
            <div class="modal-header">
              <h5 class="modal-title">Add a Task</h5>
            </div>
            <div class="modal-body">
              <div class="form-group row">
                <label for="inputEmail3" class="col-sm-2 col-form-label">
                  Email
                </label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Task name"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-2 col-form-label">
                  List Name
                </label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="List"
                  />
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" onClick={this.props.toggleAddTaskModal}>
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
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
