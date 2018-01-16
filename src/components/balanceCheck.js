import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import getWeb3 from '../utils/getWeb3'

class balanceCheck extends Component {
  constructor(props){
    super(props)
    this.state ={
      web3: null,
    }
  }
  render(){
    return(
      <div>
        <h2>Paint Token Check</h2>
        <TextField
          hintText="Hint Text"
          floatingLabelText="0x | Address"
        />
        <RaisedButton label="Check" primary={true} />
      </div>
    );
  }
}

export default balanceCheck;
