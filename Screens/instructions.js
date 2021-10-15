import * as React from 'react';
import { Text, View, Pressable, StyleSheet, Image } from 'react-native';

const beige = '#f7d59d';
const green = '#378248';
const blue = '#d9ffff';

// <Text style={styles.pageTitle}>
//             AVALANCHE GAME MODE:
//           </Text>

//           <View style={styles.viewBox}>
//           <Text style={styles.boxText}>
// Playing mancala in avalanche mode has the same mechanism that you played in the capture mode. There are few differences that you will experience. There is no capturing process in the avalanche mode. Like the capture mode, you have to tap on each pocket one after another to drop the stone in the mancala.

// Top 5 Nancy Drew Games You Must Try

// But the main difference in avalanche mode is that the turn in the game will end when you drop the stone in an empty pocket. The longer your turn continues in the Avalanche mode, the more stones you’ll drop into your mancala. And the chances of you winning will be better.          </Text>
//           </View>

export default class Start extends React.Component {
  render() {
    return (
      <View style={styles.page}>
        <View style={styles.titleBar}>
          <View style={styles.titleBar1}>
            <Image
              style={styles.image1}
              source={require('../assets/marbles.png')}
            />
          </View>
          <View style={styles.titleBar2}>
            <Text style={styles.titleBarText}>~HOW TO~ PLAY MANCALA</Text>
          </View>
        </View>
        <View style={styles.insideCont}>



              
          
 <Text style={styles.pageTitle}>
            CAPTURE GAME MODE:
          </Text>

          <View style={styles.viewBox}>
          <Text style={styles.boxText}>
            This game is started by tapping on one of the pockets. The stones will then be dropped in the next pockets counterclockwise. Thus you will have to take the stones to the mancala on your side by tapping on the pockets one after another.

You and your opponents have to do so until there are no stones left.

When you drop the last stone, you will get another free turn or else your opponent will get their turn. Now the difference that comes in the capture mode is that when you drop the last stone into an empty pocket, then that stone and all the stones in the adjacent pocket will be deposited in your mancala. This is called capturing.
          </Text>
          </View>

           

          

          

          <Pressable
            style={({ pressed }) =>
              pressed ? styles.buttonPressed : styles.button
            }
            onPress={() => this.props.goToPage('Home')}>
            <Text style={styles.titleBarText}>GO BACK</Text>
          </Pressable>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: blue,
  },
  insideCont: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-around',
  },
  titleBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '15%',
    backgroundColor: '#f7d59d',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  titleBar1: {
    flex: 1,
    justifyContent: 'left',
    alignItems: 'center',
    height: '100%',
  },
  titleBar2: {
    flex: 1,
  },
  image1: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  pageTitle: {
    marginHorizontal: 20,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: green,
  },
  titleBarText: {
    margin: 10,
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textAlign: 'center',
    color: green,
    letterSpacing: 5,
  },
  button: {
    backgroundColor: '#f7d59d',
    borderRadius: 30,
    padding: 5,
  },
  buttonPressed: {
    backgroundColor: 'grey',
    borderRadius: 30,
  },
  boxText:{
    
  marginHorizontal: 20,
  marginVertical: 20,
    fontSize: 17,
   // fontWeight: 'bold',
    textAlign: 'center',
    color: green,
  },
  viewBox: {
    marginTop: -20,
    backgroundColor: beige,
    borderRadius: 30,

  },
});
