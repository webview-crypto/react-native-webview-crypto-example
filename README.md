# Example for `react-native-webview-crypto`

This repo serves as an example usage and
end to tend test of [`react-native-webview-crypto`](https://github.com/saulshanabrook/react-native-webview-crypto).


## Install

1. [Get setup with React Native](https://facebook.github.io/react-native/docs/getting-started.html)
2. `npm install`

## Usage

Simple run `react-native run-ios` and click on the `None` text. It should then
executes the code for [this tutorial](https://coolaj86.com/articles/webcrypto-encrypt-and-decrypt-with-aes/),
encrypting and decrypting with AES. If it is succesfull, it should display
`This is very sensitive stuff.` at the end. It should work with the debugger
both on and off

### Cavets
This isn't working on the latest version of React Native and Android
because [`react-native-webview-bridge` has not been updated for that yet](https://github.com/alinz/react-native-webview-bridge/issues/111#issuecomment-232780632).
