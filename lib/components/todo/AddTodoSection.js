import { useTodoStore } from "@/lib/store/TodoStore";

export default function AddTodoSection() {
  const addTodo = useTodoStore((state) => state.addTodo);

  return (
    <section className="flex justify-between">
      <h3 className="text-xl font-bold text-gray-three">Checklist</h3>
      <button
        className="out-line-2 group flex items-center rounded-md border-cream-four bg-green-one px-6 py-3 text-lg font-semibold text-gray-five outline outline-offset-2 outline-green-one hover:text-green-five focus-visible:text-green-five focus-visible:outline-green-five"
        type="button"
        onClick={addTodo}
      >
        Add Task
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="ml-3 h-5 w-5 text-gray-five group-hover:text-green-five group-focus-visible:text-green-five"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
    </section>
  );
}
