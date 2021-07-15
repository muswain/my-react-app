import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <BrowserRouter>
      <App />,
    </BrowserRouter>
  </MuiThemeProvider>,
  document.getElementById("root")
);
