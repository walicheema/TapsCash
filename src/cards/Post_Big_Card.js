import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons'
import { row } from '../css/pagecss';
import { FontAwesome5 } from '@expo/vector-icons';

const Post_Big_Card = ({
            post_pic,
            profile_image,
            username,
            likes,
            comments
}) => {
    //console.log(comments)
    const [isliked, setIsLiked] = useState(false)
    const [showcomments, setShowComments] = useState(false)
  return (
    <View style={styles.container}>
        <View style={styles.c1}>
            <Image source ={{uri: profile_image}} style={styles.profilepic}/>
            <Text style ={styles.username}>{username}</Text>
        </View>
        <Image source={{ uri: post_pic}} style={styles.image}/>

        <View style={styles.s2}>
            {
                isliked ?
                <View style={styles.s21}>
                    <AntDesign name="hearto" size={24} color= "white" style={styles.iconliked} onPress={()=> {
                        setIsLiked(false)
                    }}/>
                    <Text style={styles.liked} color="white">{likes.length + 1} Reactions</Text>
                </View>
                :
                <View style={styles.s21}>
                <AntDesign name="hearto" size={24} color= "white" style={styles.notliked} onPress={()=> {
                    setIsLiked(true)
                }}/>
                <Text style={styles.liked} color="white">{likes.length} Reactions</Text>
                </View>
            }
            <View style={styles.s22}>
            <Text style={styles.liked} color="white" onPress={
                () => {
                    setShowComments(!showcomments)
                }
            }>Comment:  </Text>
            </View>
        </View>

        {
            showcomments == true && 
            <View style={styles.s3}>
                {
                    comments.map((item, index) => {
                        return (
                            <View style={styles.s31} key={item.id}>
                                <Text style ={styles.commentuser}>{item.username}</Text>
                                <Text style = {styles.commenttext}>{item.comment}</Text>
                            </View>
                        )
                    })
                }
            </View>
        }
    </View>
  )
}

export default Post_Big_Card

const styles = StyleSheet.create({
    container: {
        width: '100%',
        //height: 500,
        backgroundColor: 'white',
        marginVertical: 10,
        borderRadius: 10,

    },
    c1: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'black'
    },
    profilepic: {
        width: 30,
        height: 30,
        borderRadius: 30,
        borderColor: 'white',
        borderWidth: 1,
    },
    username: {
        color: 'white',
        marginLeft: 10,
        fontSize: 17,
        fontWeight: 'bold',
    },
    image: {
        width: '100%',
        aspectRatio: 1,
    },
    s2: {
        width: '100%',
        flexDirection: row,
        backgroundColor: 'black',
        padding: 10,
        alignItems: 'center',
    },
    s21: {
        flexDirection: row,
        //width: '100%',
        alignItems: 'center'
    },
    s22: {
        marginLeft:20,

    },
    notliked: {
        color: 'grey',
        fontSize: 25,
    },
    liked: {
        color: 'white',
        fontSize: 25,
    },
    iconliked: {
        color: 'red',
        fontSize: 25,
    },
    s3: {
        width: '100%',
        backgroundColor: '#111111'
    },
    commentuser: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 17,
    },
    commenttext: {
        color: 'gray',
        fontSize: 17,
        marginLeft: 5,
    },
    s31: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 3,
    }
})