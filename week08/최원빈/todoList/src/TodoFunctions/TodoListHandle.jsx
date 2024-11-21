function TodoListHandle({ todos, toggleCheck, handleDelete }) {
  return (
    <ul className="w-full space-y-2">
      {todos.map((item) => (
        <li
          key={item.id}
          className="flex justify-between items-center p-3 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition duration-300 ease-in-out"
        >
          <div
            className={`cursor-pointer ${
              item.isComplete ? 'line-through text-gray-400' : 'text-gray-800'
            }`}
            onClick={() => toggleCheck(item.id)}
          >
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.content}</p>
          </div>
          <button
            className="text-red-500 hover:text-red-700 focus:outline-none"
            onClick={() => handleDelete(item.id)}
          >
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoListHandle;