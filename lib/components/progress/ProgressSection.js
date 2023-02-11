import { useTodoStore } from "@/lib/store/TodoStore";
import ProgressBar from "./ProgressBar";

export default function ProgressSection() {
  const todos = useTodoStore((state) => state.todos);

  let completePercentage = 0;
  let progressPercentage = 0;

  const totalCount = todos.length;
  const completeCount = todos.filter((todo) => todo.complete).length;
  const progressCount = todos.filter((todo) => !todo.complete).length;
  completePercentage = Math.round((completeCount / totalCount) * 100) || 0;
  progressPercentage = Math.round((progressCount / totalCount) * 100) || 0;

  return (
    <section className="mt-10">
      <h3 className="text-xl font-bold text-gray-three">Progress</h3>
      <div className="mt-8 space-y-8">
        <ProgressBar title="In Progress" percentage={progressPercentage} />
        <ProgressBar title="Completed" percentage={completePercentage} />
      </div>
    </section>
  );
}
