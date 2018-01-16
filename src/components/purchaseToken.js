import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class purchaseToken extends Component {
  render(){
    return(
      <div>
        <h2>Buy Some Paint</h2>
        <h3>0.0005 Eth = 1 Paint Token</h3>
        <TextField
          hintText="Hint Text"
          floatingLabelText="0x | Address"
        />
        <RaisedButton label="Check" primary={true} />
      </div>
    );
  }
}

export default purchaseToken;
