import React, {useState} from "react";
import {connect} from "react-redux";
import {Box, Button, Paper, TextField, Theme} from "@mui/material";
import {
    makeStyles,
} from "@mui/styles";
import addTodoInTodoList from "../store/actionCreators/addTodoInTodoList";
import {Dispatch} from "redux";
import {ClassNameMap} from "@mui/styles/withStyles";


interface ITodo {
    id: string;
    title: string;
    description: string;
}

interface IProps {
    addTodoInTodoList: (todo: ITodo) => void;
}

type TProps = IProps & ClassNameMap;

const DEFAULT_TODO_PARAMS = {
    id: '',
    title: '',
    description: '',
};

const useStyles = makeStyles((theme: Theme) => ({
    input: {
        width: '100%',
        marginBottom: Number(theme.spacing) * 2,
        '&:last-child': {
            marginBottom: 0,
        }
    },
    inputsContainer: {
        flexBasis: '75%',
    },
    formContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    formButton: {
        flexBasis: '15%',
        minWidth: '120px',
        alignSelf: 'flex-start',
        marginLeft: theme.spacing,
    },
    paper: {
        padding: theme.spacing,
        marginBottom: '20px',
    }
}));

function AddTodoForm(props: TProps) {
    const [todo, setTodo] = useState<ITodo>({ ...DEFAULT_TODO_PARAMS });
    const classes = useStyles(props);
    const isDisabledButton = !(todo.title.length || todo.description.length);

    return (
        <Paper className={classes.paper}>
            <h2>Add Todo</h2>
            <Box className={classes.formContainer}>
                <div className={classes.inputsContainer}>
                    <TextField
                        label="Todo title"
                        variant="outlined"
                        className={classes.input}
                        onChange={(event) => setTodo({...todo, title: event.target.value})}
                    />
                    <TextField
                        label="Todo description"
                        className={classes.input}
                        multiline
                        onChange={(event) => setTodo({...todo, description: event.target.value})}
                    />
                </div>
                <Button
                    variant="contained"
                    className={classes.formButton}
                    disabled={isDisabledButton}
                    onClick={() => props.addTodoInTodoList({...todo, id: new Date().toISOString()})}
                >
                    Add
                </Button>
            </Box>
        </Paper>
    );
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addTodoInTodoList: (todo: ITodo) => dispatch(addTodoInTodoList(todo))
    }
}

export default connect(null, mapDispatchToProps)(AddTodoForm);