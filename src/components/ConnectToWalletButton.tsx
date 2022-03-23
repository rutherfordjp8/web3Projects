import { useEtherBalance, useEthers } from "@usedapp/core";

import { Button } from "@mui/material";
import React from "react";

export const ConnectToWalletButton = () => {
  const { activateBrowserWallet, account, deactivate, active } = useEthers();
  const etherBalance = useEtherBalance(account);
  const handleConnectOrDisconnect = () => {
    !account ? activateBrowserWallet() : deactivate();
  };

  return (
    <Button
      sx={{ margin: "0px 8px", maxHeight: "32px" }}
      onClick={handleConnectOrDisconnect}
      variant="contained"
    >
      {active && account && etherBalance ? "Disconnect" : "Connect Wallet"}
    </Button>
  );
};
