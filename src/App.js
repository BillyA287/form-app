import React from 'react';
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import {Form} from './components/Form/form-component'
import {Fragment} from 'react'

function App() {
  return (
    <Fragment>
    <MuiThemeProvider >
      <Form />
    </MuiThemeProvider>
    </Fragment>
  );
}

export default App;
