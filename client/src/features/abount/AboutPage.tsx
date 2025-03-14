import { useSelector } from "react-redux";
import { CounterState } from "../contact/counterReducer";
import { Typography } from "@mui/material";

export default function AboutPage() {const data = useSelector((state: CounterState) => state.data);


  return (
    <>
      <Typography variant="h2">
        About Page
      </Typography> 
      <Typography variant="body1">
        The data is: {data}
      </Typography>
    </>
    
  )
}
