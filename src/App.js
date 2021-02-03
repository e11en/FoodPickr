import React from "react";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import Menu from "./components/MenuComponent";
import Routing from "./components/RoutingComponent";
import MainContext from "context";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#c4e4cc",
    },
    secondary: {
      main: "#303C32",
    }
  }
});

const StyledWrapper = styled.div`
  margin-top: 64px;
  padding: 1em;
`;

export default() => {
  return (
    <ThemeProvider theme={theme}>
      <MainContext.Provider value={[]}>
        <BrowserRouter>
          <Menu title="FoodPickr" />
          <StyledWrapper>
            <Routing />
          </StyledWrapper>
        </BrowserRouter>
      </MainContext.Provider>
    </ThemeProvider>
  );
}