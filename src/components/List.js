import { useToDoContext } from "../context/todo.context";
const List = (props) => {
    let {todoList,deleteTask}=useToDoContext();
    return <>
    <ul className="list-group">
              {todoList.map((todo, index) => {
                return (
                  <li
                    className="list-group-item d-flex justify-content-between "
                    key={index}
                  >
                    <div>
                      <input type="checkbox"  // onChange={isDone=!isDone}
                      />
                      <span className= {todo.isDone == true? "ms-2 fst-italic line-through":"ms-2"}>{todo.name}</span>
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
    </>;
}
export default List;