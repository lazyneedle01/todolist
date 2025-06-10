export default function TaskInputBox({ newTask, handleInputChange, addTask, errMsg }) {
  return (
    <>
      <div className="flex w-full items-center gap-2 mt-6 border-2 rounded-[3px]">
        <input
          type="text"
          className="w-full focus:outline-0 text-xl text-[#ebdbb2] pl-[16px]"
          placeholder="Add your new task"
          value={newTask}
          onChange={handleInputChange}
        />
        <button
          className="text-[#8ec07c] p-[0.5em] hover:cursor-pointer border-l-3 border-l-[#a89984] focus:outline-0 px-[16px]"
          onClick={addTask}
        >
          Add
        </button>
      </div>
      <p className="mt-2 text-start text-sm text-[#f38019]">{errMsg}</p>
    </>
  );
}
