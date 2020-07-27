import React from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { List, ListItem, ListItemText } from "@material-ui/core/";
import Button from "@material-ui/core/Button";


export class Confirm extends React.Component {
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
    const {
      values: { firstName, lastName, email, occupation, city, bio },
    } = this.props;

    return (
      <>
        <Dialog open fullWidth maxWidth="sm">
          <AppBar title="Confirm User Data" />
          <List>
            <ListItem>
              <ListItemText
                data-test="firstName"
                primary="First Name"
                secondary={firstName}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                data-test="lastName"
                primary="Last Name"
                secondary={lastName}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                data-test="Email"
                primary="Email"
                secondary={email}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                data-test="Occupation"
                primary="Occupation"
                secondary={occupation}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                data-test="City"
                primary="City"
                secondary={city}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                data-test="Bio"
                primary="Bio"
                secondary={bio}
              />
            </ListItem>
          </List>
          <br />

          <Button color="secondary" variant="contained" onClick={this.back}>
            Back
          </Button>

          <Button color="primary" variant="contained" onClick={this.continue}>
            Confirm & Continue
          </Button>
        </Dialog>
      </>
    );
  }
}

export default Confirm;
