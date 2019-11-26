
import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class App extends Component {
  render() {
    return(
      <ScrollView style={styles.container}>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>Estudando React Native</Text>
          <Text style={styles.postDescription}>Lorem Ipsum dolor sit amet...</Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>Estudando React Native</Text>
          <Text style={styles.postDescription}>Lorem Ipsum dolor sit amet...</Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>Estudando React Native</Text>
          <Text style={styles.postDescription}>Lorem Ipsum dolor sit amet...</Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>Estudando React Native</Text>
          <Text style={styles.postDescription}>Lorem Ipsum dolor sit amet...</Text>
        </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333'
  },
  postContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 20,
    borderRadius: 3,
    backgroundColor: '#fff'
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },  
  postDescription: {
    color: '#666'
  }
});