import { Trash2, ArrowBigUp, ArrowBigDown } from 'lucide-react';

export default function Task({ task, index, moveTaskDown, moveTaskUp, deleteTask }) {
  return (
    <div
      className="flex justify-between text-[#1d2021] p-3 border-0 rounded-[3px] bg-[#83a598]"
      key={index}
    >
      <p className="text-lg">{task}</p>
      <div id="actions" className="flex items-center space-x-3">
        <span
          className="hover:cursor-pointer text-xl"
          onClick={() => moveTaskUp(index)}
        >
          <ArrowBigUp />
        </span>
        <span
          className="hover:cursor-pointer text-xl"
          onClick={() => moveTaskDown(index)}
        >
          <ArrowBigDown />
        </span>
        <button
          className="hover:cursor-pointer text-lg"
          onClick={() => deleteTask(index)}
        >
          <Trash2 size={20} />
        </button>
      </div>
    </div>
  );
}
