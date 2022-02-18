import React from "react";
import {Button, Paper, styled, Theme, Typography} from "@mui/material";
import { connect } from "react-redux";
import Delete from '@mui/icons-material/Delete';
import {Dispatch} from "redux";
import deleteTodoFromTodoList from "../store/actionCreators/deleteTodoFromTodoList";
import {makeStyles} from "@mui/styles";
import {ClassNameMap} from "@mui/styles/withStyles";


interface ITodo {
    id: string;
    title: string;
    description: string;
}

interface IProps {
    todo: ITodo;
    deleteTodoFromTodoList: (todo: ITodo) => void;
}

type TProps = IProps & ClassNameMap;

const useStyles = makeStyles((theme: Theme) => ({
    paper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: theme.spacing,
        marginBottom: '10px',
    },
    deleteButton: {
        marginLeft: theme.spacing,
        minWidth: '120px',
        alignSelf: 'flex-start',
        flexBasis: '15%',
    },
    text: {
        flexBasis: '75%',
        wordBreak: 'break-word',
    },
}));

function TodoElement(props: TProps) {
    const { todo } = props;
    const classes = useStyles(props);

    console.log('props: ', typeof props.todo );

    const renderTodoTitle = () =>
        <Typography
            variant="h4"
            className={classes.text}
        >
            {todo.title ? todo.title : 'No title'}
        </Typography>;

    const renderTodoDescription = () =>
        todo.description &&
            <Typography
                variant="body1"
                className={classes.text}
            >
                {todo.description}
            </Typography>;

    const renderDeleteButton = () =>
        <Button
            color="error"
            variant="contained"
            className={classes.deleteButton}
            startIcon={<Delete />}
            onClick={() => props.deleteTodoFromTodoList(todo)}
        >
            Delete
        </Button>;

    return (
        <Paper className={classes.paper}>
            <div>
                {renderTodoTitle()}
                {renderTodoDescription()}
            </div>
            {renderDeleteButton()}
        </Paper>
    );
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        deleteTodoFromTodoList: (todo: ITodo) => dispatch(deleteTodoFromTodoList(todo))
    }
}

export default connect(null, mapDispatchToProps)(TodoElement);