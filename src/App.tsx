import React, { useEffect, useState } from "react";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";
import { getTodos, addTodo, updateTodo, deleteTodo } from "./API";

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = (): void => {
    getTodos()
      .then(({ data: { entity } }: ITodo[] | any) => setTodos(entity))
      .catch((err: Error) => console.log(err));
  };

  const handleSaveTodo = (e: React.FormEvent, entity: ITodo): void => {
    e.preventDefault();
    entity.status = false;
    entity.createdAt = `Pobx ${Math.random()}`;
    addTodo(entity)
      .then(({ status, data }) => {
        if (status !== 201) {
          throw new Error("Error! Todo not saved");
        }

        console.log(data);

        fetchTodos();
        // setTodos(data.entity);
      })
      .catch((err) => console.log(err));
  };

  const handleUpdateTodo = (entity: ITodo): void => {
    entity.status = !entity.status;
    entity.updateAt = `Pobx ${Math.random()}`;
    updateTodo(entity)
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error("Error! Todo not updaetd");
        }

        console.log(data);
        fetchTodos();
        // setTodos(data.todos);
      })
      .catch((err) => console.log(err));
  };

  const handleDeleteTodo = (id: number): void => {
    deleteTodo(id)
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error("Error! Todo not deleted");
        }

        console.log(data);
        fetchTodos();
        // setTodos(data.todos);
      })
      .catch((err) => console.log(err));
  };

  return (
    <main className="App">
      <h1>My Todos</h1>
      <AddTodo saveTodo={handleSaveTodo} />
      {todos.map((todo: ITodo) => (
        <TodoItem key={todo.id} updateTodo={handleUpdateTodo} deleteTodo={handleDeleteTodo} todo={todo} />
      ))}
    </main>
  );
};

export default App;
