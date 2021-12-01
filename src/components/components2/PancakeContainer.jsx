import AddNewTodo from "./AddNewTodo";
import PancakeList from "./PancakeList";



const PancakeContainer = ({onTodoAdded,pancakes,onTodoClicked}) => {
    return(
    <div>
        <AddNewTodo onTodoAdded= {onTodoAdded}/>
        <PancakeList todoList = {pancakes} onTodoClicked={onTodoClicked} />
    </div>
    );
}

export default PancakeContainer;