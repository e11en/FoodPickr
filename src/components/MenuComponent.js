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

  & button {
    margin: 0.5em;
  }
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
        <Button href="/all" variant="contained" color="secondary">All recipes</Button>
      </Toolbar>
    </StyledAppBar>
  );
};