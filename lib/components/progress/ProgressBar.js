export default function ProgressBar({ title, percentage }) {
  return (
    <div>
      <div className="flex justify-between text-base font-normal text-gray-three">
        <p>{title}</p>
        <p>{percentage}%</p>
      </div>
      <div className="mt-5 h-4 w-full overflow-hidden rounded-full bg-gray-one">
        <div
          className={`${
            title === "Completed" ? "bg-green-four" : "bg-leaf-one"
          } h-4 rounded-full transition-all duration-500 ease-out`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
