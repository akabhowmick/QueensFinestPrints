import { createTheme } from "@mui/material/styles";

// Mirrors src/theme/tokens.css so MUI-rendered UI (checkout stepper, forms,
// drawer) matches the rest of the site.
const ink = "#101014";
const paper = "#FCFBF7";

export const muiTheme = createTheme({
  palette: {
    mode: "light",
    // Brand blue for primary actions (matches .btn-primary); orange only as a
    // fill behind ink text, since white on orange fails contrast.
    primary: { main: "#0B3B9C", dark: "#082C75", contrastText: "#FFFFFF" },
    secondary: { main: "#F5791D", contrastText: ink },
    info: { main: "#0B3B9C" },
    text: { primary: ink, secondary: "#5C5F66" },
    background: { default: paper, paper: "#FFFFFF" },
    divider: "rgba(16, 16, 20, 0.14)",
  },
  shape: { borderRadius: 6 },
  typography: {
    fontFamily: '"Archivo", system-ui, -apple-system, "Segoe UI", Helvetica, Arial, sans-serif',
    h1: { fontFamily: '"Fraunces", Georgia, serif', fontWeight: 600 },
    h2: { fontFamily: '"Fraunces", Georgia, serif', fontWeight: 600 },
    h3: { fontFamily: '"Fraunces", Georgia, serif', fontWeight: 600 },
    h4: { fontFamily: '"Fraunces", Georgia, serif', fontWeight: 600 },
    h5: { fontFamily: '"Fraunces", Georgia, serif', fontWeight: 600 },
    h6: { fontFamily: '"Fraunces", Georgia, serif', fontWeight: 600 },
    button: { fontWeight: 600, letterSpacing: "0.06em" },
  },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
    },
    MuiPaper: {
      defaultProps: { elevation: 0 },
    },
    MuiStepIcon: {
      styleOverrides: {
        root: {
          "&.Mui-active": { color: "#0B3B9C" },
          "&.Mui-completed": { color: "#082C75" },
        },
      },
    },
  },
});
