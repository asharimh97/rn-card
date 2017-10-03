import React, { Component } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export default class ContactContent extends Component{
    constructor(props){
        super(props)
    }
    
    render(){
        let { img } = this.props
        const pathFile = img === 'man' ? require('../../assets/img/man.png') : img === 'phone' ? require('../../assets/img/phone.png') : img === 'mail' ? require('../../assets/img/mail.png') : require('../../assets/img/internet.png')
        //const imgPath = this.props.img ? { uri: pathFile } : require('../../assets/img/man.png')
        const text = this.props.text

        return(
            <View style={styles.contentContainer}>
                <Image source={pathFile} style={styles.contentImage}/>
                <Text style={styles.contentText}>{ text }</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    contentContainer: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        paddingTop: 5,
        paddingBottom: 5,
        marginTop: 10
    },
    contentImage: {
        width: 30,
        height: 30,
        marginRight: 15
    },
    contentText: {
        fontSize: 18,
        color: '#333'
    }
})