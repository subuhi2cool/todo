import { useToDoContext } from "../context/todo.context";
const Header = (props) => {
    let{todoList} = useToDoContext();
    return <>
    <div className=" text-center shadow-sm p-2 mb-2 bg-body-tertiary rounded bg-dark-subtle text-emphasis-dark h3">
              TODO LIST
              <small className="badge text-bg-danger ms-2">
                {todoList.length == 0 ? "" : todoList.length}
              </small>
            </div>
    </>;
}
export default Header;