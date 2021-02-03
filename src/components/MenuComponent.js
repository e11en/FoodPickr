import React from "react";
import {
  AppBar,
  Button,
  Toolbar,
  Typography
} from "@material-ui/core";
import styled from "styled-components";

const StyledAppBar = styled(AppBar)`
  flex-grow: 1;
`;

const StyledTitle = styled(Typography)`
  flex-grow: 1;
`;

export default (props) => {
  const toShoppingList = () => {
    console.error("Not yet implemented");
  };

  return (
    <StyledAppBar position="fixed">
      <Toolbar>
        <StyledTitle variant="h6">{props.title}</StyledTitle>
        <Button variant="contained" color="secondary" onClick={toShoppingList}>To shopping list</Button>
      </Toolbar>
    </StyledAppBar>
  );
};