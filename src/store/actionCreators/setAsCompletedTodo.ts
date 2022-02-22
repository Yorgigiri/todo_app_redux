import SET_AS_COMPLETED_TODO from "../actions/setAsCompletedTodo";


const setAsCompletedTodo = (todoId: string) => {
    return ({
        type: SET_AS_COMPLETED_TODO,
        payload: todoId,
    })
}

export default setAsCompletedTodo;