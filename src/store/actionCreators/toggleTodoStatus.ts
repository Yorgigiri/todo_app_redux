import TOGGLE_TODO_STATUS from "../actions/toggleTodoStatus";


const toggleTodoStatus = (todoId: string) => {
    return ({
        type: TOGGLE_TODO_STATUS,
        payload: todoId,
    })
}

export default toggleTodoStatus;