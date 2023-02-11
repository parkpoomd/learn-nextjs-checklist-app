import { useTodoStore } from "@/lib/store/TodoStore";

export default function TodoInput({ todo }) {
  const toggleComplete = useTodoStore((state) => state.toggleComplete);
  const editTodo = useTodoStore((state) => state.editTodo);
  const deleteTodo = useTodoStore((state) => state.deleteTodo);

  return (
    <div className="flex items-center justify-between rounded-md border-2 border-gray-one px-5 py-4">
      <div className="flex w-full max-w-lg items-center justify-start">
        <label htmlFor={`${todo.id}-checkbox`} className="sr-only">
          Complete todo
        </label>
        <input
          id={`${todo.id}-checkbox`}
          type="checkbox"
          checked={todo.complete}
          onChange={() => toggleComplete(todo.id)}
          className="h-4 w-4 rounded border border-gray-three bg-cream-four text-green-four focus:border-green-five focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-green-five"
        />
        <label htmlFor={`${todo.id}-text`} className="sr-only">
          Edit todo
        </label>
        <input
          type="text"
          id={`${todo.id}-text`}
          placeholder="Enter a todo"
          value={todo.text}
          onChange={(e) => editTodo(todo.id, e.target.value)}
          className="ml-5 flex-1 text-ellipsis rounded-none border-x-0 border-t-0 border-b border-dashed border-b-gray-two bg-cream-four px-0 pb-1 text-base font-normal text-gray-three placeholder:text-gray-two focus:border-gray-three focus:outline-none focus:ring-0"
        />
        <span
          className={`${
            todo.complete ? "bg-green-three" : "bg-leaf-one"
          } ml-5 hidden rounded-full py-0.5 px-2 text-sm font-normal text-gray-five md:block`}
        >
          {todo.complete ? "Complete" : "In Progress"}
        </span>
      </div>
      <button
        type="button"
        onClick={() => deleteTodo(todo.id)}
        className="group ml-4 flex items-center justify-center rounded-md bg-cream-four p-2 hover:bg-steel-one focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-five"
      >
        <span className="sr-only">Delete todo</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-5 w-5 text-steel-three group-hover:text-gray-five"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
      </button>
    </div>
  );
}
