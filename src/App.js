import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import SearchForm from "./components/SearchForm";

const todos = [
  {
    task: "dishes",
    id: 111, //item.id
    completed: false,
  },
  {
    task: "laundry",
    id: 222, //item.id
    completed: false,
  },
  {
    task: "cooking",
    id: 333, //item.id
    completed: false,
  },
  {
    task: "shopping",
    id: 444, //item.id
    completed: false,
  },
];
console.log(todos);
class App extends React.Component {
  // this component is going to take care of state, and any change handlers you need to work with your state

  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
      todos: todos,
      inputValue: "",
      // sortValue: "",
    };
  }

  // equivalent to [todo, setTodo] = useState()

  // search existing items on the list.
  itemFilterOnChange = (e) => {
    e.preventDefault();
    // console.log("hi from OnChange", event.target.value);

    this.setState({ inputValue: e.target.value });
    console.log("hi from OnChange", e.target.value);
  };

  // add new item when user enters value into input field, the ellipses/spread operator ... copy over the previous values
  addItem = (e, item) => {
    e.preventDefault(); //pages auto reload so we don't want that
    const newItem = {
      task: item,
      id: Date.now(),
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newItem],
    });
  };

  // causes the font to change from normal to striked to look like it's been crossed off and done
  toggleItem = (itemId) => {
    //itemId is whatever will be entered into an input field by the user
    console.log(itemId);
    // map over array
    // when we find the item we clicked, toggle the completed field
    // otherwise return the item untouched
    const newtodolist = this.state.todos.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          completed: !item.completed, //return completed as opposite of completed
        };
      }
      return item;
    });
    this.setState({
      todos: newtodolist,
    });
  };

  // deletes all the crossed off items
  clearCompleted = (e) => {
    e.preventDefault(); // prevents page from refreshing
    // if item is completed (item.completed is true) then filter out
    this.setState({
      todos: this.state.todos.filter((item) => !item.completed),
    });
  };

  //add a function that will filter using the includes
  filterItems = () => {
    // this.state.todos.filter((item)  {
    return this.state.todos.filter((item) =>
      item.task.toLowerCase().includes(this.state.inputValue.toLowerCase())
    );
    // .toLowerCase()
    // .includes(this.state.inputValue.toLowerCase());
  };

  // design `App` to be the parent component of your application.
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>To Do List</h1>
          {/* <label htmlFor="search">Search by task</label>
          <input
            type="text"
            name="search"
            value={this.state.inputValue}
            onChange={this.itemFilterOnChange}
          /> */}
          {/* <button>Search</button> */}

          <SearchForm
            inputValue={this.state.inputValue}
            itemFilterOnChange={this.itemFilterOnChange}
          />

          <TodoForm addItem={this.addItem} />
        </div>
        <TodoList
          todos={this.filterItems()}
          toggleItem={this.toggleItem}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;

// {this.state.todos}
