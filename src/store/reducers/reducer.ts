import DELETE_TODO_FROM_TODO_LIST from "../actions/deleteTodoFromTodoList";
import ADD_TODO_IN_TODO_LIST from "../actions/addTodoInTodoList";
import SET_AS_COMPLETED_TODO from "../actions/setAsCompletedTodo";


interface ITodo {
    id: string;
    text: string;
    description: string;
    isCompleted: boolean;
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
        case SET_AS_COMPLETED_TODO:
            return [
                ...state.map((todo) => {
                    if (todo.id === action.payload) {
                        todo.isCompleted = true;
                    }

                    return todo;
                }),
            ];

        default:
            return state
    }
}