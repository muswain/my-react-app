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

const Home = (props: MessageProps) => {
  const classes = useStyles();
  const [count, setCount] = useState(props.value);
  const [message, setMessage] = useState(props.message);

  return ()

};

export default Home;
