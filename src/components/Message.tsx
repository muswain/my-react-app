import { Button, TextField } from '@mui/material';
import { useEffect, useReducer } from 'react';
import { reducer } from '../providers/count-reducer';

const Message = () => {
  const [state, dispatch] = useReducer(reducer, { count: 10 });

  useEffect(() => {
    console.log('I have just mounted!');

    return () => {
      console.log('unmounting');
    };
  }, []);

  return (
    <div>
      <h2>Clicked count is: {state.count}</h2>
      <Button
        color="primary"
        variant="contained"
        // startIcon={<AddIcon />}
        onClick={() => {
          dispatch({ type: 'plus' });
        }}
      >
        Click to Increment
      </Button>
      <Button
        color="primary"
        variant="contained"
        // startIcon={<RemoveIcon />}
        onClick={() => {
          dispatch({ type: 'minus' });
        }}
      >
        Click to Decrement
      </Button>
      <TextField
        type="number"
        label="Set Value"
        variant="outlined"
        onChange={(e) => {
          dispatch({
            type: 'setValue',
            payload: { value: Number(e.target.value) },
          });
        }}
      />
    </div>
  );
};

export default Message;
