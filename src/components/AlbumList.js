import React, { Component } from 'react';
import { Text, View, ScrollView, Image } from 'react-native';
import { Container, Button } from 'native-base';
import axios from 'axios';



class AlbumList extends Component 
{

    constructor(){
        super()
        this.state = {season: []}
      }

    componentWillMount()
    {
        axios.get('http://192.168.56.1:3001/seasons')
        .then ((dataseason) =>
        {
          this.setState({season: dataseason.data});
          console.log(this.state.season)
        })
    }

    render() 
    {

        const data = this.state.season.map(
            (item,index)=>{
              var seasonid = item.id;
              // di data ada 2 yang bs diambil dari jsonnya, id sama name 
              return (
                <Button block transparent onPress={() => this.props.navigation.navigate("Category",{seasonID: seasonid})} key = {index}><Text> {item.season} </Text></Button>
              )
            })


        return (
            <Container>
            <View style={{backgroundColor: "white", 
            // backgroundColor: "#ECEFF1", 
            left:0,
            right:0,
            top:0,}}>


                <View style={{flexDirection: 'row', justifyContent:'center'}}>
                <Image
                style={{width: 330, height: 150, marginBottom: 5, marginTop: 5}}
                source={require('../images/logo_main_plus_opaque.png')}
                />
                </View>

                <ScrollView horizontal={true} style={{marginBottom: 5, marginTop: 5}} >
                    {/* {this.renderAlbumsHorizontal()} */}
 
                        <Image source={require('../images/180207_POSTER_pesawat-Recovered.jpg')} style={{width: 360, height: 270}} />
                    
                        <Image source={require('../images/180207_POSTER_F1.jpg')} style={{width: 360, height: 270}} />
            
                </ScrollView>

                <Text style={{flexDirection: 'row', textAlign:'center'}}>SEASON</Text>

                <View>{data}</View>

            </View>
            </Container>
        );
    } 
}
export default AlbumList;
