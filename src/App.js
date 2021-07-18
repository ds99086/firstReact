import "./App.css";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/todos-list.component";

import logo from "./logo.svg";

function App() {
  return (
    <Router>
      {/* only one element is returned from the Router. */}
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          {/* to homepage in another tab */}
          <a className="navbar-brand" href="/" target="_blank">
            <img src={logo} width="30" height="30" alt="logo" />
          </a>
        </nav>

        <Route path="/" exact component={TodosList} />
        <Route path="/edit/:id" component={EditTodo} />
        <Route path="create" component={CreateTodo} />
      </div>
    </Router>
  );
}

export default App;
