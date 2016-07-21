import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import PolyfillCrypto from 'react-native-webview-crypto';

class AwesomeProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "None\n"
    };
  }

  addStatus(status: string) {
    this.setState({status: this.state.status + `${status}\n`});
  }

  async handleClick () {
    this.addStatus("Running: getRandomValues");
    const iv = crypto.getRandomValues(new Uint8Array(16));
    this.addStatus("Running: waiting for getRandomValues");
    await iv._promise;
    this.addStatus(`Updated array: ${iv}`);
    this.addStatus("Running: generateKey");
    const aesKey = await crypto.subtle.generateKey(
      {name: "AES-CBC", length: 128}, // Algorithm the key will be used with
      true,                           // Can extract key value to binary string
      ["encrypt", "decrypt"]          // Use for these operations
    );
    this.addStatus(`Running: Got aesKey ${aesKey._jwk}`);

    this.addStatus("Running: Creating array");
    const plainTextString = "This is very sensitive stuff.";

    const plainTextBytes = new Uint8Array(plainTextString.length);
    for (let i = 0; i < plainTextString.length; i++) {
        plainTextBytes[i] = plainTextString.charCodeAt(i);
    }
    this.addStatus("Running: encrypt");
    const cipherTextBytes = await crypto.subtle.encrypt(
        {name: "AES-CBC", iv: iv}, // Random data for security
        aesKey,                    // The key to use
        plainTextBytes             // Data to encrypt
    );

    this.addStatus("Running: decrypt");
    const decryptedBytes = new Uint8Array(
        await crypto.subtle.decrypt(
          {name: "AES-CBC", iv: iv}, // Same IV as for encryption
          aesKey,                    // The key to use
          cipherTextBytes            // Data to decrypt
      )
    );

    this.addStatus("Running: creating string");
    let decryptedString = "";
    for (let i = 0; i < decryptedBytes.byteLength; i++) {
        decryptedString += String.fromCharCode(decryptedBytes[i]);
    }
    this.addStatus(`Decrypted: ${decryptedString}`);
  }

  render() {
    return (
      <TouchableHighlight onPress={this.handleClick.bind(this)}>
        <View style={{
          padding: 20
        }}>
          <PolyfillCrypto />
          <Text>
            {this.state.status}
          </Text>
        </View>
      </TouchableHighlight>

    );
  }
}


AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
