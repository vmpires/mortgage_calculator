import { useState } from "react";
import { Container, Grid } from "@mui/material";
import { Navbar } from "./components/Navbar";
import Result from "./components/Result";
import SliderSelect from "./components/SliderSelect";
import TenureSelect from "./components/TenureSelect";

function App() {
  const [data, setData] = useState({
    homeValue: 3000,
    downPayment: 3000,
    loanAmount: 3000,
    loanTerm: 3000,
  })



  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="lg" sx={{ mt: 3 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <SliderSelect />
            <TenureSelect />
          </Grid>
          <Grid item xs={12} md={6}>
            <Result />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
