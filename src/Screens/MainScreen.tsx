import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tweets from '../assets/tweets'
import Entypo from '@react-native-vector-icons/entypo';
import IconButtons from '../assets/IconButton';

export default function Twitter(props) {
    const tweet=props.tweet
  return (
    <View style={styles.Container}>
       <Image src={tweet.user.image} style={styles.Imagecontainer} />
            <View style={styles.datacontainer}>
              
            {/* <Link href={`/AllTabs/${tweet.id}`} asChild> */}
                <Pressable style={{flexDirection:"row",}}>
                    <Text style={{ fontWeight: "bold", color: "black" }}>{tweet.user.name}</Text>
                    <Text style={{  color: "grey" }}>  {  tweet.user.username}   .2h</Text>
                    <Entypo 
                    name="dots-three-horizontal"
                     size={18} 
                     color="grey" 
                     style={{marginLeft:"auto"}} />
                </Pressable>
                {/* </Link> */}
                <Text>{tweet.content}</Text>
                {tweet.image && <Image src={tweet.image} style={styles.contentIage} />}
                <View style={styles.containerFooter}>
                <IconButtons icon='retweet' text={tweet.numberOfRetweets}/>
               <IconButtons icon='comment' text={tweet.numberOfComments}/>
               <IconButtons icon='heart' text={tweet.numberOfLikes||0}/>
               <IconButtons  icon="chart" text={tweet.impressions ||0}/>
               <IconButtons icon="share-google" text={tweet.share ||0}/>
                </View>
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
      } ,
      containerFooter:{
        flexDirection:"row",
        justifyContent:"space-between"
    }
})