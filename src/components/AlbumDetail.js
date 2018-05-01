import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => 
{
    const {
        title,
        artist,
        thumbnail_image,
        image,
        url
    } = album;
    // destructure spy panggilnya lebih gampang

    const styles = {
        thumbnailStyle: {
        height: 50,
        width: 50
        },

        headerContentStyle: {
        justifyContent: 'space-around'
        },

        headerTextStyle: {
        fontSize: 18
        },

        thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
        },

        imageStyle: {
        height: 300,
        flex: 1
        }
            
    };
        

    return (
    <Card>

        <CardSection>
            <View style={styles.thumbnailContainerStyle}>
                <Image style={styles.thumbnailStyle} source={{ uri: thumbnail_image }} />
            </View>
            <View style={styles.headerContentStyle}>
                <Text style={styles.headerTextStyle}>{title}</Text>
                <Text>{artist}</Text>
            </View>
        </CardSection>

        <CardSection>
            <Image style={styles.imageStyle} source={{ uri: image }} />
        </CardSection>

        <CardSection>
            <Button onPress={() => Linking.openURL(url)} >
                Buy Now
            </Button>
        </CardSection>

    </Card>
    );
};

export default AlbumDetail;