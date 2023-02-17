import { useState } from "react";
import { Input } from "./components/Input";
import { TasksList } from "./components/TasksList";
import { TodoModel } from "./models/interfaces";

const App: React.FC = (): JSX.Element => {

  const [todos, setTodos] = useState<TodoModel[]>([]);

  return (
    <main className="flex flex-col gap-8 justify-center items-center w-full">
      <Input setTodos={setTodos} />
      <TasksList todos={todos} />
    </main>
  )
}

export default App;