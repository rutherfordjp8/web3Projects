import "./App.css";

import MenuAppBar from "./components/NavBar";
import { MetaMaskInpageProvider } from "@metamask/providers";
import React from "react";
import TransactionPage from "./pages/TransactionPage";

declare global {
  interface Window {
    ethereum: MetaMaskInpageProvider;
  }
}

function App() {
  return (
    <div className="App">
      <MenuAppBar />
      <header className="App-header">
        <TransactionPage />
      </header>
    </div>
  );
}

export default App;
