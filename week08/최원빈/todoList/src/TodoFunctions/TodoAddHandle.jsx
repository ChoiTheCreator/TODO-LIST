function TodoAddHandle({ inputTitle, inputValue, setInputTitle, setInputValue, handleAdd }) {
  return (
    <div className="flex flex-col w-full space-y-4">
      <input
        className="w-full px-4 py-2 text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        type="text"
        value={inputTitle}
        onChange={(e) => setInputTitle(e.target.value)}
        placeholder="할 일 제목"
      />
      <div className="flex items-center space-x-2">
        <input
          className="flex-grow px-4 py-2 text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          type="text"
          placeholder="계획을 추가하시오"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="px-6 py-2 text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:scale-105"
          onClick={handleAdd}
        >
          추가
        </button>
      </div>
    </div>
  );
}

export default TodoAddHandle;