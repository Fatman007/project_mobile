import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';


const styles = 
{
    viewStyle: 
    {
    flexDirection: 'row',
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: "relative",
    marginLeft: 5,
    marginRight: 5,
    
    },

    textStyle: 
    {
        flex:2,
        fontSize: 25,
        textAlign: 'center'
    },

    iconStyle:
    {
        flex:1,
    }
};
    

const Header = (props) => {
    const { textStyle, viewStyle, iconStyle } = styles;

return (
    <View style={viewStyle}>
    {/* bisa juga kalo ga di destructure pakai {styles.viewStyle} */}
        <Icon style={iconStyle} name='3d-rotation' color='#00aced' />
        <Text style={textStyle}>{ props.headerText }</Text>
        <Icon style={iconStyle} name='inbox' color='#00aced' />
    </View>
    );
};
export default Header;
