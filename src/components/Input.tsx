import { useState } from "react";
import { TodoModel } from "../models/interfaces";

interface Props {
    setTodos: React.Dispatch<React.SetStateAction<TodoModel[]>>;
}

export const Input: React.FC<Props> = ({ setTodos }: Props): JSX.Element => {

    const [value, setValue] = useState<string>("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setTodos(prev => {
            return prev ? [...prev, {
                id: Date.now(),
                todo: value,
                isDone: false
            }
            ] : [{
                id: Date.now(),
                todo: value,
                isDone: false
            }]
        })
    }


    const handleOnChange = (event: React.FormEvent<HTMLInputElement>): void => {
        setValue(event.currentTarget.value);
    }

    return (
        <form action="" className="flex flex-col justify-center items-center gap-4 pt-20" onSubmit={handleSubmit}>
            <label htmlFor="task" className="text-2xl font-medium">Insert task:</label>
            <input type="text" name="task" id="task" className="p-1 border border-black" onChange={handleOnChange} value={value} />
            <input type="submit" value={"Add"} className="py-2 px-4 bg-gray-200 border border-black rounded" />
        </form>
    )
}
