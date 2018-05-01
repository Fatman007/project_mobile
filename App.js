

// import React, {Component} from 'react';
// import { AppState, View, Text } from "react-native";
// import PushController from './src/components/Push';
// import PushNotification from 'react-native-push-notification';

// class App extends Component {
//   constructor() {
//     super();
//     this.handleAppStateChange = 
//     this.handleAppStateChange.bind(this);
//     this.state = {ms:5000};
//   }

//   componentDidMount(){
//     AppState.addEventListener(
//       'change', this.handleAppStateChange);
//   }

//   handleAppStateChange(appState) {
//     if(appState === 'background') {
//       PushNotification.localNotificationSchedule({
//         title: 'Pesan Masuk',
//         message: 'Haik kak, ada pesan masuk nih',
//         date: new Date(Date.now() + (this.state.ms)),
//       });
//     }
//   }

//   render() {
//     return (
//       <View>
//         <Text> Halo </Text>
//         <PushController/>
//       </View>
//     );
//   }
// }

// export default App;




import React, { Component } from 'react';
import { Container, Header, Content, Footer, Spinner, Thumbnail, Icon, Button, Text, Form, Item, Image, Label, Input, Fab, View, FooterTab, Body, Left, Right} from 'native-base';

import AlbumList from './src/components/AlbumList';

class App extends Component {

  constructor() {
    super();
    this.state = {active: true};
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

        <Content>

        {/* <View style={{flexDirection: 'row', justifyContent:'center'}}>
          <Image
          style={{width: 250, height: 250}}
          source={require('../images/logo_main_plus_opaque.png')}
          />
        </View> */}

        <AlbumList />
        
{/* 
          <Icon name='share' style={{fontSize:40, color:'red'}} type='FontAwesome' />
          <Thumbnail square source={{uri:''}}/>
          
          <Button iconLeft light>
          <Icon name='arrow-back' />
          <Text>Back</Text>
          </Button>
     */}
        </Content>

        <Footer>
        <FooterTab>

        <Left>
            <Button vertical><Icon name="home" />
            <Text> Kami </Text></Button>
        </Left>
          
        
            <Button vertical active><Icon name='menu' />
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


////////// LATIHAN AMBIL DATA





// import React, { Component } from 'react';
// import { Container, Header, Content, Text } from "native-base";
// import axios from 'axios';

// class App extends Component {

//   constructor(){
//     super();
//     this.state = {member:[]};
//   }

//   componentDidMount(){
//     var url='http://jsonplaceholder.typicode.com/users';
//     axios.get(url).then((ambilData)=>{

//       console.log(ambilData.data);

//       // buat liat hasil log ini dari cmd masuk ke foldernya, terus ketik react-native log-android

//       this.setState({
//         member: ambilData.data
//       })
//     })
//   }

//   render(){

//     const data = this.state.member.map(
//       (item,index)=>{
//         var daftar = [item.id, item.name].join('-');
//         // di data ada 2 yang bs diambil dari jsonnya, id sama name 
//         return <Text key={index}>{daftar}</Text>
//       })

//     return (
//     <Container>
//       <Header/>
//       <Text style={{fontSize:50}}> Daftar ibu2 pkk </Text>
//       {data}
//     </Container>
//     )
//   }
// }

// export default App;