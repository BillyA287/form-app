import React from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


export class PersonalDetails extends React.Component {
  continue = (event) => {
    event.preventDefault();
    this.props.nextStep();
  };

  back = (event) => {
    event.preventDefault();
    this.props.previousStep();
  };

  render() {
    const { values, handleChange } = this.props;

    return (
      <>
        <Dialog open fullWidth maxWidth="sm">
          <AppBar title="Enter Personal Details" />
          <TextField
            id="input"
            placeholder="Enter Your Occupation"
            label="Occupation"
            onChange={handleChange("occupation")}
            defaultValue={values.occupation}
            margin="normal"
            fullWidth
          />
          <br />
          <TextField
            id="input"
            placeholder="Enter Your City"
            label="City"
            onChange={handleChange("city")}
            defaultValue={values.city}
            margin="normal"
            fullWidth
          />
          <br />
          <TextField
            id="input"
            placeholder="Enter Your Bio"
            label="Bio"
            onChange={handleChange("bio")}
            defaultValue={values.bio}
            margin="normal"
            fullWidth
          />
          <br />

          <Button color="secondary" variant="contained" onClick={this.back}>
            Back
          </Button>

          <Button color="primary" variant="contained" onClick={this.continue}>
            Continue
          </Button>
        </Dialog>
      </>
    );
  }
}

export default PersonalDetails;
