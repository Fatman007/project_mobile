import React, { Component } from 'react';
import { Container, Header, Content, Footer, Spinner, Thumbnail, Icon, Button, Text, Form, Item, Image, Label, Input, Fab, View, FooterTab, Body, Left, Right} from 'native-base';
import { AppState, Alert, Modal} from 'react-native'
import { createStackNavigator } from 'react-navigation';
import PushController from './src/components/Push';
import PushNotification from 'react-native-push-notification';

import AlbumList from './src/components/AlbumList';
import Category from './src/components/Category';
import Product from './src/components/Product';
// import Login from './src/components/Login';

const RootStack = createStackNavigator(
  {
    AlbumList: {screen: AlbumList},
    Category : {screen: Category},
    Product : {screen: Product},
    // Login : {screen: Login}
  },
  {
    initialRouteName : "AlbumList"
  }
)


class App extends Component {

  constructor() {
    super();
    this.handleAppStateChange = 
    this.handleAppStateChange.bind(this);

    this.state = {
      active: true,
      modalVisible: false,
      ms:50000
    };
  }

  componentDidMount(){
    AppState.addEventListener(
      'change', this.handleAppStateChange);
  }

  handleAppStateChange(appState) {
    if(appState === 'background') {
      PushNotification.localNotificationSchedule({
        title: 'Pesan Masuk',
        message: 'Update terbaru Mainplustoys !',
        date: new Date(Date.now() + (this.state.ms)),
      });
    }
  }

  setModal(visible) {
    this.setState({modalVisible: visible});
  }

 render() { 
  return (
      <Container>
        
        <Header searchBar rounded>
          <Item>
              <Input placeholder="Cari" />
              <Button transparent><Icon name="search" /></Button>
          </Item>
        </Header>



        {/* <Content> */}

          <RootStack />

          <Modal
            animationType="slide" transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {}}>
            <View style={{marginTop: 22}}>
              <View>
              <Button block transparent style={{flexDirection: 'row', textAlign:'center'}} title='Tutup Modal' onPress={() => {this.setModal(!this.state.modalVisible);}}>
              <Text>Tutup modal</Text></Button>
                
              {/* <Button block transparent style={{flexDirection: 'row', textAlign:'center'}} title='Login' onPress={() => this.navigation.navigate("Login")}>
              <Text>Login</Text></Button> */}
              </View>
            </View>
          </Modal>
        
          <PushController/>

        {/* </Content> */}




        <Footer>
          <FooterTab>

          <Left>
              <Button vertical><Icon name="home" />
              <Text> Rumah </Text></Button>
          </Left>
          
              <Button vertical onPress={() => {this.setModal(true);}}><Icon name='menu' />
              <Text> Menu </Text></Button>

          <Right>
              <Button vertical><Icon name="cart" />
              <Text> Cart </Text></Button>
          </Right>
          
          </FooterTab>
        </Footer>

      </Container>
      );
  }
}

export default App;





