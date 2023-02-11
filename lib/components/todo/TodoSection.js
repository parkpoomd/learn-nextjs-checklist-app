import TodoInput from "./TodoInput";

export default function TodoSection({ todo }) {
  return (
    <section className="mt-8 space-x-4">
      <TodoInput todo={todo} />
    </section>
  );
}
