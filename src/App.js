import React from 'react';
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import {Form} from './components/Form/form-component'
import {Fragment} from 'react'

const theme = createMuiTheme();

function App() {
  return (
    <Fragment>
    <MuiThemeProvider theme={theme}>
      <Form />
    </MuiThemeProvider>
    </Fragment>
  );
}

export default App;
