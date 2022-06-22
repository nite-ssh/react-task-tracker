import { FaTrash } from "react-icons/fa";
import PropTypes from "prop-types";

function Task({ task, onDelete, onToggle }) {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}
        <FaTrash
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
}
//
//Task.defaultProps = {};
//
Task.propTypes = {
  onDelete: PropTypes.func,
};

export default Task;
