import {
  Button,
  FormControl,
  FormHelperText,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import { MetaMaskInpageProvider } from "@metamask/providers";
import { useCoingeckoPrice } from "@usedapp/coingecko";
import { useSendTransaction } from "@usedapp/core";
import { utils } from "ethers";

declare global {
  interface Window {
    ethereum: MetaMaskInpageProvider;
  }
}

const MY_WALLET_ADDRESS = "0x1cC2A58d6b32662F587459B4a3b00F51D81FbB1d";

function TransactionPage() {
  const etherPrice = useCoingeckoPrice("ethereum", "usd");
  const [amount, setAmount] = useState({
    value: "0.01",
    usd: `${0.01 * Number(etherPrice)}`,
  });
  const [toAddress, setToAddress] = useState(MY_WALLET_ADDRESS);
  const { sendTransaction, state } = useSendTransaction({
    transactionName: "Send Ethereum",
  });

  useEffect(() => {
    setAmount({ ...amount, usd: `${0.01 * Number(etherPrice)}` });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [etherPrice]);

  const handleAmountChange = (newAmount: string) => {
    newAmount = newAmount.trim();
    if (isNaN(Number(newAmount))) return;
    setAmount({
      value: newAmount,
      usd: `${Number(newAmount) * Number(etherPrice)}`,
    });
  };

  const handleSubmit = (e: any) => {
    sendTransaction({ to: toAddress, value: utils.parseEther(amount.value) });
  };

  return (
    <>
      <Typography variant="h4" sx={{ margin: "20px 0px" }}>
        Send some ETH!
      </Typography>
      <FormControl
        sx={{
          display: "flex",
          rowGap: "1em",
          minHeight: "200px",
          minWidth: "400px",
          maxWidth: "400px",
          justifyContent: "space-between",
        }}
      >
        <TextField
          id="amount"
          label={`Amount ${
            !isNaN(Number(etherPrice))
              ? `$${parseFloat(amount.usd).toFixed(2)} USD`
              : ""
          }`}
          autoFocus
          value={amount.value}
          onChange={(e) => handleAmountChange(e.target.value)}
        >
          {amount.value}
        </TextField>
        <TextField
          id="toAddress"
          label={`To Address: ${`${toAddress.substring(
            0,
            6
          )}...${toAddress.substring(toAddress.length - 4)} `}`}
          value={toAddress}
          onChange={(e) => setToAddress(e.target.value)}
        >
          {toAddress}
        </TextField>
        <Button
          type="submit"
          onClick={handleSubmit}
          variant="contained"
          disabled={state.status === "PendingSignature"}
        >
          {state.status !== "PendingSignature" ? "Send" : "Pending Signature"}
        </Button>
        <FormHelperText id="Default to address is me!">
          {MY_WALLET_ADDRESS === toAddress
            ? "Hey! That's my wallet address! Thanks for your contribution!"
            : "Thank you for using my app!"}
        </FormHelperText>
        {state.status === "Exception" ? (
          <FormHelperText error>{state.errorMessage}</FormHelperText>
        ) : (
          ""
        )}
      </FormControl>
    </>
  );
}

export default TransactionPage;
