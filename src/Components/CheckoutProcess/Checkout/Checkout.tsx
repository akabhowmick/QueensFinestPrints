import * as React from "react";
import "./Checkout.css";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { Shipping } from "../Shipping/Shipping";
import { Payment } from "../Payment/Payment";
import Review from "../Review/Review";

const steps = ["Shipping address", "Payment details", "Review your order"];

const defaultTheme = createTheme();

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);

  function getStepContent(step: number) {
    switch (step) {
      case 0:
        return <Shipping handleNext={handleNext} />;
      case 1:
        return <Payment handleNext={handleNext} />;
      case 2:
        return <Review />;
      default:
        throw new Error("Unknown step");
    }
  }

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />

      <Container
        maxWidth="sm"
        sx={{ mb: 4, paddingTop: "5rem" }}
        id="checkout-container"
      >
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper
            id="check-out-stepper"
            activeStep={activeStep}
            sx={{ pt: 3, pb: 5 }}
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                We have emailed your order confirmation, and will send you an
                update when your order has shipped.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>{getStepContent(activeStep)}</React.Fragment>
          )}
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
