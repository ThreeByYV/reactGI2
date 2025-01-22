import DetailCard from "./DetailCard";
import { TodoContext } from './TodoProvider';
import { useContext } from "react";

export default function TodoDetails() {
    const { tasks } = useContext(TodoContext);

    return (
        <div className="grid grid-cols-1 gap-20 align-center justify-center w-screen absolute left-0 top-40">
            {tasks.map((task, index) => (
                <DetailCard key={index} desc={task} />
            ))}
        </div>
    );
}
