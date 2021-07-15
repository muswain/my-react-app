import { TextField } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export const Login = () => {
  const classes = useStyles();

  return (
    <Box>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="User Name"
          variant="outlined"
          required
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          required
        />
      </form>
    </Box>
  );
};
