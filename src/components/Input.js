import { useToDoContext } from "../context/todo.context";
const Input = (props) => {
    let {inputTask,inputTaskChange,addTask,error} = useToDoContext();
    return <>
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
            <div>
              <small className="text-danger">{error}</small>
            </div>
    </>;
}
export default Input;