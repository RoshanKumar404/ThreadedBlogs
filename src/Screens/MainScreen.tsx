import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tweets from '../assets/tweets'

export default function Twitter(props) {
    const tweet=props.tweet
  return (
    <View style={styles.Container}>
        <Image src={tweet.user.image} style={styles.Imagecontainer}/>
        <View style={styles.datacontainer}>
        <Text style={{fontWeight:"bold",color:"black"}}>{tweet.user.username}</Text>
      <Text>{tweet.content}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    Container: {
        // flex: 1,
        // alignItems: 'center',
        // justifyContent:"center",
        flexDirection:"row",
        padding:20,
        paddingLeft:10,
        borderBottomWidth:1,
        borderColor:"gray"
      },
      datacontainer:{
        flex: 1,
        alignItems:'flex-start',
        justifyContent:"center",
        marginLeft:10
      },
      Imagecontainer:{
        width:80,height:80,borderRadius:45
      } 
})