import React, { Component } from 'react'
import PixelTokenContract from '../build/contracts/EIP20.json'
import getWeb3 from './utils/getWeb3'
import { StyleSheet, css } from 'aphrodite';
import RaisedButton from 'material-ui/RaisedButton';

import Info from './components/info';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      storageValue: 0,
      web3: null
    }
  }

  componentWillMount() {
    // Get network provider and web3 instance.
    // See utils/getWeb3 for more info.

    getWeb3
    .then(results => {
      this.setState({
        web3: results.web3
      })

      // Instantiate contract once web3 provided.
      this.instantiateContract()
    })
    .catch(() => {
      console.log('Error finding web3.')
    })
  }

  instantiateContract() {
    /*
     * SMART CONTRACT EXAMPLE
     *
     * Normally these functions would be called in the context of a
     * state management library, but for convenience I've placed them here.
     */

    const contract = require('truffle-contract')
    const pixelToken = contract(PixelTokenContract)
    pixelToken.setProvider(this.state.web3.currentProvider)

    // Declaring this for later so we can chain functions on SimpleStorage.
    var pixelTokenInstance

    // Get accounts.
    this.state.web3.eth.getAccounts((error, accounts) => {
      pixelToken.deployed().then((instance) => {
        pixelTokenInstance = instance

        // Stores a given value, 5 by default.
        return pixelTokenInstance.set(5, {from: accounts[0]})
      }).then((result) => {
        // Get the value from the contract to prove it worked.
        return pixelTokenInstance.get.call(accounts[0])
      }).then((result) => {
        // Update state with the result.
        return this.setState({ storageValue: result.c[0] })
      })
    })
  }

  render() {
    return (
      <div>
        <h1 className={css(styles.title)}>Pixel Party</h1>
        <Info/>
      </div>
    );
  }
}

const styles = StyleSheet.create({
    title: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: '35px',
      fontWeight: '100',
    }
})

export default App
