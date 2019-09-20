import React from 'react'
import {  Text, View, Image, Linking } from 'react-native'
import Card from './Card'
import CardSection from './CardSection'
import Button from './Button'

const Album = ({album}) => {

    const {header, 
        thumbNail, 
        imageContainer, 
        artwork,
        headerText} 
        = styles;

    const {title, 
        artist, 
        image,
        url,
        thumbnail_image} 
        = album;
    
    return (
        <Card>

            <CardSection>
                <View style={imageContainer}>
                    <Image source={{ uri: thumbnail_image}}
                    style={thumbNail}/>
                </View>
                <View style={header}>
                    <Text style={headerText}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image source={{ uri: image}} 
                style={artwork}/>
            </CardSection>

            <CardSection>
                <Button onPress={() => Linking.openURL(url)} name={title}/>
            </CardSection>

        </Card>
    )

}

const styles = {
    
    header: {
        flexDirection: 'column',
        justifyContent: 'space-around'

    },

    headerText: {
        fontSize: 18
    },

    thumbNail: {

        height: 50,
        width: 50
    },

    artwork: {

        height: 300,
        flex: 1,
        width: null
    },

    imageContainer: {
      
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    }
}

export default Album;