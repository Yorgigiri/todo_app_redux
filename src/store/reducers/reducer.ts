import DELETE_TODO_FROM_TODO_LIST from "../actions/deleteTodoFromTodoList";
import ADD_TODO_IN_TODO_LIST from "../actions/addTodoInTodoList";


interface ITodo {
    id: string;
    text: string;
    description: string;
}

const initialState: ITodo[] = [];

export default function todoList(state = initialState, action: any) {
    switch (action.type) {
        case ADD_TODO_IN_TODO_LIST:
            return [
                ...state,
                action.payload,
            ];
        case DELETE_TODO_FROM_TODO_LIST:
            return [
                ...state.filter((todo) => todo.id !== action.payload),
            ];

        default:
            return state
    }
}