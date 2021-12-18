import { Box, Button, TextField } from '@mui/material';

export const Login = () => {
  return (
    <Box flexDirection="row">
      <form noValidate autoComplete="off">
        <TextField id="outlined-basic" label="User Name" variant="outlined" required />
        <TextField label="Password" variant="outlined" required />
        <Button variant="contained" color="primary">
          Primary
        </Button>
      </form>
    </Box>
  );
};
