import { createContext,useState,useContext, useReducer} from "react";
import { todoInitialState } from "./reducer/todo.reducer";
import { todoReducer } from "./reducer/todo.reducer";

// create context
let ToDoContext = createContext();

//create context Provider
export let ToDoContextProvider = (props)=> {
  
    let [state,dispatch]=useReducer(todoReducer,todoInitialState);
   // let [inputTask, setInputTask] = useState("");
  //  let [todoList, setTodoList] = useState(data);
    //let [error,setError]=useState("");

    let inputTaskChange = (event) => {
      let value = event.target.value;
    //  setInputTask(value);
   //   setError("");
      dispatch  ({
        type:"INPUT_CHANGE",
        payload:value
      });
      dispatch  ({
        type:"SET_ERROR",
        payload:""
      });
    };
  
    let deleteTask = (id) => {
      let _todoList = [...state.todoList];
      _todoList.splice(id, 1);
      localStorage.setItem("todo",JSON.stringify(_todoList));
     // setTodoList(_todoList);
      dispatch  ({
        type:"DELETE_TASK",
        payload:_todoList
      });
    };
  
    let addTask = () => {
        if(state.inputTask.trim() === ""){
            dispatch  ({
                type:"SET_ERROR",
                payload:"Please Enter A Task"
              });
            return false;
        }
      let newTask = {
        name: state.inputTask,
        isDone: false,
      };
      let _todoList = [...state.todoList];
      _todoList.push(newTask);
      localStorage.setItem("todo",JSON.stringify(_todoList));
     // setTodoList(_todoList);
      dispatch  ({
        type:"SAVE_TODO_LIST",
        payload:_todoList
      });
      //setInputTask("");
    };

    let values = {
        inputTaskChange,
        addTask,
        deleteTask,
        //...state, or to write below lines
        inputTask: state.inputTask,
        todoList: state.todoList,
        error: state.error
    }

    return <ToDoContext.Provider value={values}>{props.children}</ToDoContext.Provider>
  
}

//create a hook
export const useToDoContext= () => {
    return useContext(ToDoContext);
}