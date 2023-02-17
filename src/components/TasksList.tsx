import { TodoModel } from "../models/interfaces"
import { Todo } from "./Todo"

interface Props {
    todos: TodoModel[]
}

export const TasksList: React.FC<Props> = ({todos}: Props): JSX.Element => {
  return (
    <div className="w-1/4">
        {todos.map((todo, i) => {
            return <Todo {...todo} />
        })}
    </div>
  )
}
