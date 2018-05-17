import React, {Component} from 'react';
import {Image} from 'react-native';
import { Container, Text, Button, Content, Card, CardItem, Left, Body} from 'native-base';

import axios from 'axios';

class Category extends Component {

    constructor(){
        super();
        this.state = {category: []}
      }
    
      componentWillMount() {
        axios.get(`http://192.168.56.1:3001/category/${this.props.navigation.state.params.seasonID}`)
        .then((data) => {
          this.setState({category: data.data});
        })
      }

    render() {

        const foldergambar = "http://192.168.56.1:3001/images/"

        const category = this.state.category.map((item, index) => {

            return (
                
                <Card key = {index} style = {{flex : 0}}>

                        <CardItem>
                            <Left>
                                <Body>
                                <Button block transparent onPress={() => this.props.navigation.navigate("Product",{categoryID: item.id})} key = {index}><Text> {item.kategori_produk} </Text></Button>
                                </Body>
                            </Left>
                        </CardItem>

                        <CardItem>
                            <Body>
                                <Image source = {{uri: `${foldergambar+item.gambar_kategori}`}} style = {{height: 100, flex: 1}} />
                            </Body>
                        </CardItem>
                        
                </Card>
            
            )
          })

        return(
            <Container>
                {category}
            </Container>
        )
    }
}

export default Category;