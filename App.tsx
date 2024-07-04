import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Twitter from './src/Screens/MainScreen';
import tweets from './src/assets/tweets';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Twitter</Text>
      </View>
      <FlatList 
        data={tweets}
        renderItem={({item}) => <Twitter tweet={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    backgroundColor: '#1DA1F2',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
