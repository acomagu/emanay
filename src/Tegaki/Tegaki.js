import React, { Component } from 'react';
import {
  TouchableHighlight,
  AppRegistry,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image
} from 'react-native';
import SignatureCapture from 'react-native-signature-capture';

class Tegaki extends Component{
  constructor(props){
    super(props);

    this.state = {
      images: []
    }
  }

  render() {
    const imageList = this.state.images.map((image, i) => <Image style={styles.base64} key={i} source={{uri: image, scale: 3}}/>);

    return(
      <View style={styles.container}>
        <Text style={{margin: 20, alignItems:"center",justifyContent:"center"}}>Signature Capture Extended </Text>
            <SignatureCapture
              style={styles.signature}
              ref="sign"
              onSaveEvent={this._onSaveEvent.bind(this)}
              onDragEvent={this._onDragEvent.bind(this)}
              saveImageFileInExtStorage={false}
              showNativeButtons={false}
              viewMode={"landscape"}/>
        <View style={styles.buttonSpace}>
          <TouchableHighlight style={styles.buttonStyle}
            underlayColor="#445588"
            onPress={() => { this.saveSign()} } >
            <Text>Save</Text>
          </TouchableHighlight>

          <TouchableHighlight style={styles.buttonStyle}
            underlayColor="#445588"
            onPress={() => { this.resetSign() } } >
            <Text>Reset</Text>
          </TouchableHighlight>
        </View>

      </View>
    );
  }

  saveSign() {
    this.refs["sign"].saveImage();
  }

  resetSign() {
    this.refs["sign"].resetImage();
  }

  _onSaveEvent(result) {
    const prevImages = this.state.images;
    const base64String = `data:image/png;base64,${result.encoded}`;
    prevImages.push(base64String);
    this.setState({images: prevImages});
  }
  _onDragEvent() {
    // console.log("dragged");
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    flexDirection: "column",
    borderRadius: 30,
    backgroundColor: "#4444",
    borderStyle: "solid"
  },
  signature: {
    flex: 8,
    borderRadius: 30,
    margin: 10
  },
  buttonSpace: {
    flex: 1,
    flexDirection: "row"
  },
  buttonStyle: {
    flex: 1,
    margin: 10,
    height: 50,
    borderRadius: 20,
    alignItems: "center",
    backgroundColor: "#eeeeee",
    justifyContent: "center"
  }
});

export default Tegaki;
