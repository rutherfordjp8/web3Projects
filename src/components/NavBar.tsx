import * as React from "react";

import { useEtherBalance, useEthers } from "@usedapp/core";

import AccountCircle from "@mui/icons-material/AccountCircle";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { ConnectToWalletButton } from "./ConnectToWalletButton";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import IconButton from "@mui/material/IconButton";
import Jazzicon from "react-jazzicon";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Switch from "@mui/material/Switch";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { formatEther } from "ethers/lib/utils";

export default function MenuAppBar() {
  const { account, active } = useEthers();
  const etherBalance = useEtherBalance(account);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h1" sx={{ fontSize: "2em" }}>
            Web3 DApps
          </Typography>
          {active && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {account && etherBalance && (
                <>
                  <Typography color={"green"}>
                    {parseFloat(formatEther(etherBalance)).toFixed(3)} ETH{" "}
                  </Typography>

                  <Typography
                    sx={{ margin: "0px 5px", cursor: "pointer" }}
                    onClick={() => navigator.clipboard.writeText(account)}
                  >
                    {`${account.substring(0, 6)}...${account.substring(
                      account.length - 4
                    )} `}
                  </Typography>
                  <Jazzicon
                    diameter={20}
                    seed={parseInt(account.slice(2, 10), 16)}
                  />
                </>
              )}
              {/* 
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu> */}
              <ConnectToWalletButton />
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
