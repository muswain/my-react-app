import { useEffect, useReducer, useState } from "react";
import { Button, makeStyles } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const initialState = { count: 10 };
type Action = { type: "plus" } | { type: "minus" };
type State = {
  count: number;
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "plus":
      return { count: state.count + 1 };
    case "minus":
      return { count: state.count - 1 };
    default:
      return { ...state };
  }
};

const Message = () => {
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    console.log("I have just mounted!");

    return () => {
      console.log("unmounting");
    };
  }, []);

  return (
    <div>
      <h2>Clicked count is: {state.count}</h2>
      <Button
        color="primary"
        variant="contained"
        className={classes.button}
        startIcon={<AddIcon />}
        onClick={() => {
          dispatch({ type: "plus" });
        }}
      >
        Click to Increment
      </Button>
      <Button
        color="primary"
        variant="contained"
        className={classes.button}
        startIcon={<RemoveIcon />}
        onClick={() => {
          dispatch({ type: "minus" });
        }}
      >
        Click to Decrement
      </Button>
    </div>
  );
};

export default Message;
