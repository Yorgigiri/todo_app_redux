import React from "react";
import clsx from 'clsx';
import {Button, Divider, Paper, Theme, Typography} from "@mui/material";
import {connect} from "react-redux";
import Delete from '@mui/icons-material/Delete';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import {Dispatch} from "redux";
import deleteTodoFromTodoList from "../../store/actionCreators/deleteTodoFromTodoList";
import setAsCompletedTodo from "../../store/actionCreators/setAsCompletedTodo";
import {makeStyles} from "@mui/styles";
import { green } from '@mui/material/colors';


interface IProps {
    id: string,
    title: string;
    description: string;
    isCompleted: boolean;
    setAsCompletedTodo: (todoId: string) => void;
    deleteTodoFromTodoList: (todoId: string) => void;
}

type TProps = IProps;

const useStyles = makeStyles((theme: Theme) => ({
    paper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: theme.spacing,
        marginBottom: '10px',
        '&--completed': {
            background: green[50],
            opacity: 0.7
        },
    },
    deleteButton: {
        minWidth: '120px',
        marginLeft: theme.spacing,
    },
    text: {
        flexBasis: '75%',
        wordBreak: 'break-word',
    },
    buttonsContainer: {
        paddingTop: theme.spacing,
        display: 'flex',
        alignSelf: 'flex-start',
    }
}));

function TodoElement(props: TProps) {
    const {
        id,
        title,
        description,
        isCompleted,
        setAsCompletedTodo,
        deleteTodoFromTodoList,
    } = props;
    const classes = useStyles(props);
    const paperClasses = clsx(
        classes.paper,
        isCompleted && `${classes.paper}--completed`,
    );

    const renderTodoTitle = () =>
        <Typography
            variant="h4"
            className={classes.text}
        >
            {title ? title : 'No title'}
        </Typography>;

    const renderTodoDescription = () =>
        description &&
        <Typography
            variant="body1"
            className={classes.text}
        >
            {description}
        </Typography>;

    const renderCompleteButton = () =>
        <Button
            color="success"
            variant="contained"
            startIcon={<ThumbUpIcon/>}
            onClick={() => setAsCompletedTodo(id)}
        >
            Complete
        </Button>

    const renderDeleteButton = () =>
        <Button
            color="error"
            variant="contained"
            className={classes.deleteButton}
            startIcon={<Delete/>}
            onClick={() => deleteTodoFromTodoList(id)}
        >
            Delete
        </Button>;

    return (
        <Paper className={paperClasses}>
            <div>
                {renderTodoTitle()}
                {renderTodoDescription()}
            </div>
            <Divider light/>
            <div className={classes.buttonsContainer}>
                {renderCompleteButton()}
                {renderDeleteButton()}
            </div>
        </Paper>
    );
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        deleteTodoFromTodoList: (todoId: string) => dispatch(deleteTodoFromTodoList(todoId)),
        setAsCompletedTodo: (todoId: string) => dispatch(setAsCompletedTodo(todoId))
    }
}

export default connect(null, mapDispatchToProps)(TodoElement);