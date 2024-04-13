import { createSignal, createEffect } from "solid-js";

function App() {
  const [task, setTask] = createSignal([]);
  const addTodo = (text) => {
    const newTodo = { text, completed: false };
    setTask((prevTodos) => [...prevTodos, newTodo]);
  };
  const removeTodo = (index) => {
    setTask((prevTodos) => prevTodos.filter((todo, i) => i !== index));
  };
  createEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storedTodos);
  });
  createEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos()));
  });
  const toggleTodo = (index) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  return (
    <div class="main">
      <h1>Todo App</h1>
      <div>
        <input
          type="text"
          placeholder="New task"
          onKeyPress={(e) => {
            if (e.key === "Enter" && e.target.value.trim() !== "") {
              addTodo(e.target.value.trim());
              e.target.value = "";
            }
          }}
        />
        <ul>
          <For each={task()}>
            {(todo, index) => (
              <li>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(index)}
                />
                <span
                  style={{
                    textDecoration: todo.completed ? "line-through" : "",
                  }}
                >
                  {todo.text}
                </span>
                <button onClick={() => removeTodo(index)}>Delete</button>
              </li>
            )}
          </For>
        </ul>
      </div>
    </div>
  );
}

export default App;
