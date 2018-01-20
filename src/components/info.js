import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';


class info extends Component {
  constructor(props){
    super(props);
    this.state = {
      open: false,
    }
  }
  handleOpen = () => {
    this.setState({open: true});
  };
  handleClose = () => {
    this.setState({open: false});
  };
  render(){
    return(
      <div>
        <RaisedButton label="Info" primary={true} onClick={this.handleOpen}/>
        <Dialog
          title="Welcome to Pixel Party!"
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
        >
        <h3>Decentralized Pixel Real Estate</h3>
        <p></p>
        <p>Why am I doing this?</p>
        </Dialog>
      </div>
    );
  }
}

export default info;
