import { useState } from "react";
import Input from "./Input";
import PropTypes from "prop-types";

function AddTasks({ onAddTaskSubmit, language }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const getButtonText = () => {
    return language === "pt" ? "Adicionar" : "Add";
  };

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <Input
        type="text"
        placeholder={
          language === "pt" ? "Digite o título da tarefa" : "Enter task title"
        }
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <Input
        type="text"
        placeholder={
          language === "pt"
            ? "Digite a descrição da tarefa"
            : "Enter task description"
        }
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            alert(
              language === "pt"
                ? "Preencha todos os campos"
                : "Fill in all fields"
            );
            return;
          }
          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
      >
        {getButtonText()}
      </button>
    </div>
  );
}

AddTasks.propTypes = {
  onAddTaskSubmit: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired,
};

export default AddTasks;
