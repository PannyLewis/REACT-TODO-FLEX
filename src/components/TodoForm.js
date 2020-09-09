import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      item: "",
    };
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
    if (this.props.isEditing === true && this.props.hasUpdated === false) {
      this.setState({
        item: this.props.toDoEdit.task,
      });
      console.log("updating item", this.state.item);
      this.props.toggleUpdate();
    }
  }

  handleChanges = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitItem = (e) => {
    e.preventDefault();
    const item = {
      task: this.state.item,
      id: this.props.toDoEdit.id,
      completed: false,
    };
    this.setState({ item: "" });
    this.props.isEditing
      ? this.props.finishEdit(item)
      : this.props.addItem(e, this.state.item);
  };

  render() {
    console.log("rendering form");
    return (
      <form onSubmit={this.submitItem}>
        <input
          type="text"
          value={this.state.item}
          name="item"
          onChange={this.handleChanges}
        />
        <button>{this.props.isEditing ? "Edit Task" : "Add Task"}</button>
      </form>
    );
  }
}

export default TodoForm;
