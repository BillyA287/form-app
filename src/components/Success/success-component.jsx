import React from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";

export class Success extends React.Component {
  continue = (event) => {
    event.preventDefault();
    // send form
    this.props.nextStep();
  };

  back = (event) => {
    event.preventDefault();
    this.props.previousStep();
  };
  render() {
    return (
     
        <>
          <Dialog open fullWidth maxWidth="sm">
            <AppBar title="Success" />
            <h1>Thank You For Your Submission</h1>
            <p>You will get an email with further instructions.</p>
          </Dialog>
        </>
      
    );
  }
}



export default Success;
