import React from "react";
import "./App.css";
import { useState } from "react";

function App() {
  //let [text, setText] = useState("TODO APP");
  let [inputTask, setInputTask] = useState("");
  let [todoList, setTodoList] = useState([]);
  let inputTaskChange = (event) => {
    let value = event.target.value;
    setInputTask(value);
  };

  let deleteTask = (id) => {
    let updatedTasks = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTasks);
  };

  let addTask = () => {
    let newTask = {
      name: inputTask,
      isDone: false,
    };
    let _todoList = [...todoList];
    _todoList.push(newTask);
    setTodoList(_todoList);
    setInputTask("");
  };

  return (
    <>
      <section className="container-fluid ">
        <section className="row">
          <section className="col-lg-6 col-11 m-auto">
            <div className=" text-center shadow-sm p-2 mb-2 bg-body-tertiary rounded bg-dark-subtle text-emphasis-dark h3">
              TODO LIST
              <small className="badge text-bg-danger ms-2">
                {todoList.length == 0 ? "" : todoList.length}
              </small>
            </div>
            <div className="input-group ">
              <input
                type="text"
                className="form-control text-body-emphasis"
                placeholder="Enter Task"
                value={inputTask}
                onChange={inputTaskChange}
              />
              <button
                onClick={addTask}
                className="input-group-text btn btn-success"
              >
                ADD
              </button>
            </div>
            <hr />
            <ul className="list-group">
              {todoList.map((todo, index) => {
                return (
                  <li
                    className="list-group-item d-flex justify-content-between "
                    key={index}
                  >
                    <div>
                      <input type="checkbox"   
                      />
                      <span className= {todo.isDone == true? "ms-2 fst-italic text-decoration-line-through":"ms-2"}>{todo.name}</span>
                    </div>
                    <button
                      onClick={() => deleteTask({index})}
                      className="btn btn-danger"
                    >
                      DEL
                    </button>
                  </li>
                );
              })}
              {/* <li className="list-group-item">
                <input type="checkbox" checked disabled />
                <span className="ms-2 fst-italic text-decoration-line-through  ">
                  A second item
                </span>
              </li>
              <li className="list-group-item">A third item</li>
              <li className="list-group-item">A fourth item</li>
              <li className="list-group-item">And a fifth one</li> */}
            </ul>
          </section>
        </section>
      </section>
    </>
  );
}

export default App;
