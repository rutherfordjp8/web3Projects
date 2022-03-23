import "./index.css";

import { Config, DAppProvider, Mainnet } from "@usedapp/core";

import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import reportWebVitals from "./reportWebVitals";

const config: Config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]:
      "https://mainnet.infura.io/v3/08394da387bd4616bf1e48eab7c14c05",
  },
};

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

ReactDOM.render(
  <React.StrictMode>
    <DAppProvider config={config}>
      <ThemeProvider theme={darkTheme}>
        <App />
      </ThemeProvider>
    </DAppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
