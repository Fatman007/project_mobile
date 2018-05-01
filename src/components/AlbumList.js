import React, { Component } from 'react';
import { Text, View, ScrollView, Image } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';
// import AlbumDetailHorizontal from './AlbumDetailHorizontal';

class AlbumList extends Component 
{
    state = {
        albums: []
    };
    
    componentWillMount()
    {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => 
                this.setState(
                    { 
                        albums: response.data 
                    })
                ); 
    }

    renderAlbums() {
        return this.state.albums.map(album => 
                <AlbumDetail key={album.title} album={album} />
        );
    }
    // render ini buat melooping yang di dalem text

    // renderAlbumsHorizontal() {
    //     return this.state.albums.map(album => 
    //             <AlbumDetailHorizontal key={album.title} album={album} />
    //     );
    // }

    render() 
    {
        return (
            <View style={{backgroundColor: "white", 
            // backgroundColor: "#ECEFF1", 
            left:0,
            right:0,
            top:0,}}>


                <View style={{flexDirection: 'row', justifyContent:'center'}}>
                <Image
                style={{width: 330, height: 150, marginBottom: 10, marginTop: 10}}
                source={require('../images/logo_main_plus_opaque.png')}
                />
                </View>

                <ScrollView horizontal={true} style={{marginBottom: 5, marginTop: 10}} >
                    {/* {this.renderAlbumsHorizontal()} */}
 
                        <Image source={require('../images/180207_POSTER_pesawat-Recovered.jpg')} style={{width: 360, height: 270}} />
                    
                        <Image source={require('../images/180207_POSTER_F1.jpg')} style={{width: 360, height: 270}} />
            
                </ScrollView>
                <ScrollView style={{marginBottom: 10}} >
                    {this.renderAlbums()}
                </ScrollView>
            </View>
        );
    } 
}
export default AlbumList;
