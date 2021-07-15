import { TextField, Box, Button } from "@material-ui/core";
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
    <Box flexDirection="row">
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
        <Button variant="contained" color="primary">
          Primary
        </Button>
      </form>
    </Box>
  );
};
