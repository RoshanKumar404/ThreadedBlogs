import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Twitter from './src/Screens/MainScreen'
import tweets from './src/assets/tweets'

export default function App() {
  return (
    <View>
      {/* <ScrollView>
      <Twitter tweet={tweets[0]}/>
      <Twitter tweet={tweets[1]}/>
      <Twitter tweet={tweets[2]}/>
      <Twitter tweet={tweets[3]}/>
      <Twitter tweet={tweets[4]}/>
      <Twitter tweet={tweets[5]}/>
      <Twitter tweet={tweets[6]}/>
      <Twitter tweet={tweets[7]}/>
      </ScrollView> */}
      <FlatList 
      data={tweets}
      renderItem={({item})=><Twitter tweet={item}/>}
      />
    </View>
  )
}

const styles = StyleSheet.create({})