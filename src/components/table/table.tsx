import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useTodoStore from "../../store/TodoStore";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function Table(): JSX.Element {
  const todos = useTodoStore((state) => state.todos);
  const delete_todos = useTodoStore((state) => state.deleteTodo);
  const toggle_completed = useTodoStore((state) => state.toggleCompleted);
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase">
          <tr>
            <th scope="col" className="px-6 py-3 bg-gray-50">
              Title
            </th>
            <th scope="col" className="px-6 py-3">
              Created At
            </th>
            <th scope="col" className="px-6 py-3 bg-gray-50">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <tr className="border-b border-gray-200" key={index}>
              <th
                scope="row"
                className={`px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 ${
                  todo.completed ? "line-through" : ""
                }`}
              >
                {todo.title}
              </th>
              <td
                className={`px-6 py-4 ${todo.completed ? "line-through" : ""}`}
              >
                {todo.createdAt}
              </td>
              <td className="px-6 py-4 bg-gray-50">
                <div className="flex max-w-md flex-col gap-4" id="toggle">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      value=""
                      className="sr-only peer"
                      checked={todo.completed}
                      onChange={() => toggle_completed(index)}
                    />
                    <div className="w-11 h-6 bg-red-800 rounded-full peer peer-focus:ring-1 peer-focus:ring-gray-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                    <span className="ml-3 text-sm font-medium text-gray-900">
                      {todo.completed ? "Completed" : "Not Completed"}
                    </span>
                  </label>
                </div>
              </td>
              <td className="px-6 py-4 justify-center flex">
                <FontAwesomeIcon
                  onClick={() => {
                    if (
                      window.confirm(
                        "Are you sure you wish to delete this item?"
                      )
                    ) {
                      delete_todos(index);
                    }
                  }}
                  icon={faTrash}
                  className="cursor-pointer text-red-800 hover:text-red-700"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
