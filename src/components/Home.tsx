import { makeStyles } from "@material-ui/core";

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
};

export default Home;
