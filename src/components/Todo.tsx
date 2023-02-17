import { TodoModel } from "../models/interfaces"

export const Todo: React.FC<TodoModel> = ({id, todo, isDone}: TodoModel): JSX.Element => {
  return (
    <p>{todo}</p>
  )
}
