import { useState } from "react";
import { Container, Grid } from "@mui/material";
import { Navbar } from "./components/Navbar";
import Result from "./components/Result";
import SliderSelect from "./components/SliderSelect";
import TenureSelect from "./components/TenureSelect";

export interface DataProps {
  data: {
    homeValue: number
    downPayment: number,
    loanAmount: number,
    loanTerm: number,
    interestRate: number
  },
  setData: Function
}

function App() {
  const [data, setData] = useState({
    homeValue: 500000,
    downPayment: 500000 * 0.2,
    loanAmount: 500000 * 0.8,
    loanTerm: 10,
    interestRate: 5
  })


  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="lg" sx={{ mt: 3 }}>
        <Grid container spacing={4} alignItems={"center"}>
          <Grid item xs={12} md={6}>
            <SliderSelect data={data} setData={setData} />
            <TenureSelect data={data} setData={setData} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Result data={data} setData={setData} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
