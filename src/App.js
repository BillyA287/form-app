import React from 'react';
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import {Form} from './components/Form/form-component'


function App() {
  return (
    <MuiThemeProvider >
      <Form />
    </MuiThemeProvider>
    
  );
}

export default App;
