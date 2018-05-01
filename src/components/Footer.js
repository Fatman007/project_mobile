import React from 'react';
import { View, Text } from 'react-native';
// import { Icon } from 'react-native-elements';
import Icon  from 'react-native-vector-icons/Entypo';


const styles = 
{
    viewStyle: 
    {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#F8F8F8',
        alignItems: 'center',
        height: 70,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: "absolute",
        left:0,
        right:0,
        bottom:0,
        marginLeft: 5,
        marginRight: 5,
    
    },

    iconStyle:
    {
        fontSize: 25
    }

};
    

const Footer = () => {
    const { viewStyle, iconStyle } = styles;

return (
    <View style={viewStyle}>
        <Icon style={iconStyle} name='home' color='#00aced' />
        <Icon style={iconStyle} name='magnifying-glass' color='#00aced' />
        <Icon style={iconStyle} name='circle-with-plus' color='#00aced' />
        <Icon style={iconStyle} name='heart' color='#00aced' />
        <Icon style={iconStyle} name='inbox' color='#00aced' />
    </View>
    );
};
export default Footer;