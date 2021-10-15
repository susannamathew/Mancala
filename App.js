import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Platform,
  Pressable,
} from 'react-native';
import Constants from 'expo-constants';
import data from './Data';

import Capture from './Screens/capture';
import Home from './Screens/Home';
import Avalanche from './Screens/avalanche';
import Instructions from './Screens/instructions';

const webPreviewWidth = 300;
const webPreviewHeight = 550;
const screenWidth =
  Platform.OS === 'web' ? webPreviewWidth : Dimensions.get('screen').width;
const screenHeight =
  Platform.OS === 'web'
    ? webPreviewHeight
    : Dimensions.get('screen').height - Constants.statusBarHeight;

export default class App extends React.Component {
  state = {
    page: 'Home',
  };

  pickPageToRender = () => {
    if (this.state.page === 'Home') {
      return <Home goToPage={(page) => this.setState({ page })} />;
    } else if (this.state.page === 'Capture'){
      return <Capture goToPage={(page) => this.setState({ page })} />;
    }  else if (this.state.page === 'Avalanche'){
      return <Avalanche goToPage={(page) => this.setState({ page })} />;
    } else if (this.state.page === 'Instructions'){
      return <Instructions goToPage={(page) => this.setState({ page })} />;
    }

  };

render() {
    return <View style={styles.container}>{this.pickPageToRender()}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});

