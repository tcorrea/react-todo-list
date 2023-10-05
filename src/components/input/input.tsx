import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import useTaksStore from "../../store/TaskStore";

function Input(): JSX.Element {
  const [value, setValue] = useState("");
  const addTaks = useTaksStore((state) => state.addTask)

  function handleSubmit() {
    // e.preventDefault();
    addTaks(value);
    setValue("");
  }

  return (
    <div>
      <label
        htmlFor="default-text"
        className="mb-2 text-sm font-medium text-gray-900 sr-only"
      >
        Add a new task
      </label>
      <div className="relative">
        <input
          type="text"
          id="default-text"
          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Add a new task ..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
        />
        <button
          className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
          onClick={() => handleSubmit()}
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </div>
  );
}

export default Input;
