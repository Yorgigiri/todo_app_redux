import watch from "redux-watch";
import {useEffect} from "react";
import {useStore} from "react-redux";
import {useSnackbar} from "notistack";


function useNotification() {
    const store = useStore();
    const {enqueueSnackbar} = useSnackbar();

    useEffect(() => {
        const todoListWatcher = watch(store.getState, 'todoList');

        store.subscribe(
            todoListWatcher((newVal: Array<any>, oldVal: Array<any>, objectPath) => {
                if (newVal.length > oldVal.length) {
                    enqueueSnackbar('todo is added!', {variant: "success"});
                } else if (newVal.length < oldVal.length) {
                    enqueueSnackbar('todo is removed!', {variant: "error"});
                }
            })
        );
    }, [store, enqueueSnackbar]);


}

export default useNotification;