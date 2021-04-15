import { useEffect, useState } from "react";
import { Button, makeStyles } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

interface MessageProps {
  message: string;
  value: number;
}

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const Message = (props: MessageProps) => {
  const classes = useStyles();
  const [count, setCount] = useState(props.value);
  const [message, setMessage] = useState(props.message);

  useEffect(() => {
    console.log("I have just mounted!");

    return () => {
      console.log("unmounting");
    };
  }, []);

  return (
    <div>
      <h2>Message is: {message}</h2>
      <h2>Clicked count is: {count}</h2>
      <Button
        color="primary"
        variant="contained"
        className={classes.button}
        startIcon={<DeleteIcon />}
        onClick={() => {
          setCount(count + 1);
          setMessage(`counter being incremented to: ${count}`);
        }}
      >
        Click to Increment
      </Button>
    </div>
  );
};

export default Message;
