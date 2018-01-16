import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class purchaseToken extends Component {
  render(){
    return(
      <div>
        <h2>Paint a Pixel</h2>
        <TextField
          hintText="Hint Text"
          floatingLabelText="0x | Address"
        />
      <RaisedButton label="Splash" primary={true} />
      </div>
    );
  }
}

export default purchaseToken;
