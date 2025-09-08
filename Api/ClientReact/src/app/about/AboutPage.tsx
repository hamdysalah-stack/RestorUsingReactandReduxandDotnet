import { Button, ButtonGroup, Container, Typography } from "@mui/material";
import { useLazyGet400ErrorQuery, useLazyGet401ErrorQuery, useLazyGet404ErrorQuery, useLazyGet500ErrorQuery, useLazyGetValidationErrorQuery } from "./errorApi";

export default function AboutPage() {

  const [trigger400Error] = useLazyGet400ErrorQuery();
  const [trigger401Error] = useLazyGet401ErrorQuery();
  const [trigger404Error] = useLazyGet404ErrorQuery();
  const [trigger500Error] = useLazyGet500ErrorQuery();
  const [triggerValidationError] = useLazyGetValidationErrorQuery();


    

  

  return (
    <Container maxWidth="lg">

      <Typography gutterBottom variant="h3">Error for Testing </Typography>

      <ButtonGroup fullWidth >
        <Button variant="contained" color="primary" onClick={()=> trigger400Error().catch(err=>console.log(err)) }>Test 400 Error</Button>
      </ButtonGroup>

        <ButtonGroup fullWidth >
        <Button variant="contained" color="primary" onClick={()=> trigger401Error().catch(err=>console.log(err)) }>Test 401 Error</Button>
      </ButtonGroup>

        <ButtonGroup fullWidth >
        <Button variant="contained" color="primary" onClick={()=> trigger404Error().catch(err=>console.log(err)) }>Test 404 Error</Button>
      </ButtonGroup>

        <ButtonGroup fullWidth >
        <Button variant="contained" color="primary" onClick={()=> trigger500Error().catch(err=>console.log(err)) }>Test 500 Error</Button>
      </ButtonGroup>


        <ButtonGroup fullWidth >
        <Button variant="contained" color="primary" onClick={()=> triggerValidationError().catch(err=>console.log(err)) }>Test Validation Error</Button>
      </ButtonGroup>
    </Container>
  )
}