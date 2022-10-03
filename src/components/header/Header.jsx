import React from "react";
import styles from "./Header.module.css";

import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { SwitchButton } from "./switch-button";
import { DropDownInput } from "./drop-down-input"
import MoreVertIcon from '@mui/icons-material/MoreVert'

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto"
  }
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}));

const SearchIconStyled = styled(SearchIcon)`
  position: absolute;
  left: 170px;
`

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(0)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch"
    }
  }
}));

export function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className={styles.appBar}>
        <Toolbar className={styles.toolbar}>
          <div>
            <SwitchButton />
            <Search className={styles.searchWrapper}>
              <SearchIconWrapper>
                <SearchIconStyled />
              </SearchIconWrapper>
              <StyledInputBase
                className={styles.inputSearch}
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </div>
          <DropDownInput />
          <MoreVertIcon color={"disabled"} sx={{ ml: 3 }} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
