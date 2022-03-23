import "./App.css";

import {
  Button,
  FormControl,
  FormHelperText,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useEtherBalance, useEthers, useSendTransaction } from "@usedapp/core";

import MenuAppBar from "./components/NavBar";
import { MetaMaskInpageProvider } from "@metamask/providers";
import TransactionPage from "./pages/TransactionPage";
import logo from "./logo.svg";
import { useCoingeckoPrice } from "@usedapp/coingecko";
import { utils } from "ethers";

declare global {
  interface Window {
    ethereum: MetaMaskInpageProvider;
  }
}

const MY_WALLET_ADDRESS = "0x1cC2A58d6b32662F587459B4a3b00F51D81FbB1d";

function App() {
  // const etherPrice = useCoingeckoPrice("ethereum", "usd");
  // const [amount, setAmount] = useState({
  //   value: "0.01",
  //   usd: `${0.01 * Number(etherPrice)}`,
  // });
  // const [toAddress, setToAddress] = useState(MY_WALLET_ADDRESS);
  // const { sendTransaction, state } = useSendTransaction({
  //   transactionName: "Send Ethereum",
  // });
  // const { active, account } = useEthers();
  // const etherBalance = useEtherBalance(account);

  // useEffect(() => {
  //   setAmount({ ...amount, usd: `${0.01 * Number(etherPrice)}` });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [etherPrice]);

  // const handleAmountChange = (newAmount: string) => {
  //   newAmount = newAmount.trim();
  //   if (isNaN(Number(newAmount))) return;
  //   setAmount({
  //     value: newAmount,
  //     usd: `${Number(newAmount) * Number(etherPrice)}`,
  //   });
  // };

  // const handleSubmit = (e: any) => {
  //   sendTransaction({ to: toAddress, value: utils.parseEther(amount.value) });
  // };

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
