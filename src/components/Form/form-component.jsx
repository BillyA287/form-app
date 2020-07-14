import React from "react";
import UserDetails from '../UserDetails/user.details-component'
import PersonalDetails from '../Personal/personal-component'
import Confirm from '../Confirm/confirm-component'
import Success from '../Success/success-component'

export class Form extends React.Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    occupation: "",
    city: "",
    bio: ""
  };

  //next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  //previous step
  previousStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  //handle field change 
  handleChange = input => event =>{
this.setState({[input]: event.target.value});
  }

  render() {
      const {step} = this.state;
      const {firstName, lastName, email, age, occupation, city, bio} = this.state
      const values = {firstName, lastName, email, age, occupation, city, bio}
    

      switch(step){
          case 1:
              return (<UserDetails nextStep={this.nextStep} handleChange={this.handleChange} values={values}/>
                )
                case 2:
                    return (<PersonalDetails nextStep={this.nextStep} previousStep={this.previousStep} handleChange={this.handleChange} values={values} />)
                case 3:
                    return (
                      <Confirm
                        nextStep={this.nextStep}
                        previousStep={this.previousStep}
                        
                        values={values}
                      />
                    );
                case 4: return (<Success />)

                default :
              
      }
    
      
  }
}

export default Form