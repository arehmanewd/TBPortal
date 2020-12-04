import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text,FlatList,StyleSheet, ToastAndroid } from 'react-native'

import Homework from './src/components/Homework';
import Poem from './src/components/Poem';
import Video from './src/components/Video';
import ReactNativeYouTubeExample from './src/components/RNYoutube'
import ResetPass from './src/components/ResetPass'
import Play from './src/components/Play'
import Performance from "./src/components/Performance";
import PopupModal from './src/components/Modal';
import LetterYear from './src/components/LetterYear';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <View >
        {/* <PopupModal/> */}
        {/* <LetterYear/> */}
        <Performance/>
        {/* <Play/> */}
        {/* <ResetPass/> */}
        {/* <Homework/> */}
        {/* <Poem /> */}
        {/* <Video /> */}
        {/* <ReactNativeYouTubeExample/> */}
       
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 15,
    height: 44,
  },
});

export default App;
