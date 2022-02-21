import React from "react";
import {Button, Paper, Theme, Typography} from "@mui/material";
import {connect} from "react-redux";
import Delete from '@mui/icons-material/Delete';
import {Dispatch} from "redux";
import deleteTodoFromTodoList from "../../store/actionCreators/deleteTodoFromTodoList";
import {makeStyles} from "@mui/styles";
import {ClassNameMap} from "@mui/styles/withStyles";


interface IProps {
    id: string,
    title: string;
    description: string;
    deleteTodoFromTodoList: (todoId: string) => void;
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
    const {
        id,
        title,
        description,
        deleteTodoFromTodoList,
    } = props;
    const classes = useStyles(props);

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
        deleteTodoFromTodoList: (todoId: string) => dispatch(deleteTodoFromTodoList(todoId))
    }
}

export default connect(null, mapDispatchToProps)(TodoElement);