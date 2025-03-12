/* eslint-disable react/jsx-no-undef */
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { ChevronRight, TrashIcon } from "lucide-react";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }

  return (
    <ul className="space-y-4 p-6 bg-gradient-to-r from-slate-100 to-slate-200 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={task.isCompleted}
            onChange={() => onTaskClick(task.id)}
            className="mr-1 w-6 h-6 text-slate-500 bg-slate-200 border-slate-300 rounded focus:ring-slate-400"
          />
          <button
            onClick={() => onTaskClick(task.id)}
            className={`bg-slate-400 text-left w-full text-white p-2 rounded-md ${
              task.isCompleted && "line-through"
            }`}
          >
            {task.title}
          </button>

          <Button onClick={() => onSeeDetailsClick(task)}>
            <ChevronRight />
          </Button>

          <Button onClick={() => onDeleteTaskClick(task.id)}>
            <TrashIcon className="text-red-300" />
          </Button>
        </li>
      ))}
    </ul>
  );
}

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      isCompleted: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onTaskClick: PropTypes.func.isRequired,
  onDeleteTaskClick: PropTypes.func.isRequired,
};

export default Tasks;
