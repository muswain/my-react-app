import { useEffect, useReducer } from "react";
import { Button, makeStyles } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { reducer } from "../providers/count-reducer";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const Message = () => {
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, { count: 10 });

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
      <TextField
        id="outlined-basic"
        type="number"
        label="Set Value"
        variant="outlined"
        onChange={(e) => {
          dispatch({
            type: "setValue",
            payload: { value: Number(e.target.value) },
          });
        }}
      />
    </div>
  );
};

export default Message;
