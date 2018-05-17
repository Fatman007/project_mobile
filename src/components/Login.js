import React,{Component} from 'react';
import axios from 'axios';
import { FormLabel, FormInput} from 'react-native-elements'
import { Container, Button } from 'native-base';


class Login extends Component{

  constructor() {
    super();

    this.state = {
      nama: [],
      password: [],
    };
  }

      postlogin = (login_data) => {
          this.props.postLogin(login_data);
      }

        render()
        {
      
        return (
          <Container>

              <FormLabel>username</FormLabel>
              <FormInput placeholder='username' shake={true} onChangeText={(input)=>this.setState({nama:input})}/>

              <FormLabel>password</FormLabel>
              <FormInput placeholder='password' shake={true} onChangeText={(input)=>this.setState({password:input})}/>

              <Button
              onPress={()=>{this.setState({x:this.state.y})}}
              title='Login'
              color='blue'
              /> 
            
          </Container>
        );
      }
  }
  
    
export default Login;
