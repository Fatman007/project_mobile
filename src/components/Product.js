import React, {Component} from 'react';
import {Image, Linking} from 'react-native';
import { Container, Text, Button, Content, Card, CardItem, Left, Body} from 'native-base';

import axios from 'axios';

class Product extends Component {

    constructor(){
        super();
        this.state = {product: []}
      }
    
      componentWillMount() {
        axios.get(`http://192.168.56.1:3001/product/${this.props.navigation.state.params.categoryID}`)
        .then((data) => {
          this.setState({product: data.data});
        })
      }

    render() {

        const foldergambar = "http://192.168.56.1:3001/images/"

        const datafinal = this.state.product.map((item, index) => {
            var id = item.id;
            var price = item.price;
            var deskripsi = item.deskripsi;
            var image = item.gambar;
            var name = item.detail_produk;

            return (
                    <Card key = {index} style = {{flex : 0}}>

                        <CardItem>
                            <Body>
                                <Body>
                                    <Text> {name} </Text>
                                    <Text note> Rp {price} </Text>
                                </Body>
                            </Body>
                        </CardItem>

                        <CardItem>
                            <Body>
                                <Image source = {{uri: `${foldergambar+image}`}} style = {{height: 200, width : 320, flex: 1}} />
                            </Body>
                        </CardItem>
                        
                        <CardItem>
                            <Body>
                            <Text note> {deskripsi} </Text>
                            <Button block primary onPress={() => Linking.openURL("http://instagram.com/mainplus_toys")}>
                                <Text> Cek di Instagram kami </Text>
                            </Button>
                            </Body>
                        </CardItem>
                    </Card>
            )
          })

        return(
            <Container>
                <Content>
                    {datafinal}
                </Content>
            </Container>
        )
    }
}

export default Product;