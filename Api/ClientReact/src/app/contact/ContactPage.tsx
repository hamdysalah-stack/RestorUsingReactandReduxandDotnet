import { useDispatch } from "react-redux"
import { decrement, increment } from "./CounterReducer";
import { Button, ButtonGroup, Typography } from "@mui/material";
import { useAppSelector } from "../Store/store";

export default function ContactPage () {
  const data = useAppSelector(state=>state.counter.data);
  const dispatch = useDispatch();
  return (
    <>
      <Typography variant="h4" >Contact Page</Typography>
      <Typography variant="h5" >Counter Value: {data}</Typography>
      <ButtonGroup>
        <Button color="error" onClick={() => dispatch(decrement(1))}>Decrement</Button>
        <Button color="error" onClick={() => dispatch(decrement(-5))}>Decrement by -5</Button>
        <Button color="primary" onClick={() => dispatch(increment(1))}>Increment</Button>
        <Button color="primary" onClick={() => dispatch(increment(5))}>Increment by 5</Button>

        

      </ButtonGroup>
      
          </>
  )
}