import React, { Component } from 'react';
import { Alert, Button, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

import ContactContent from './src/components/ContactContent'

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      name: ''
    }
  }

  handlePressButton(){
    // let name = this.state.name === '' ? 'anon' : this.state.name 
    return Alert.alert('Thank you!')
  }

  render() {
    let image = require('./assets/img/mount.jpg')
    let profileImage = require('./assets/img/peop.jpg')
    let icon = require('./assets/img/man.png')
    
    return(
      <View style={styles.container}>
        <View style={styles.topFrame}>
          <Image source={image} style={styles.image} />
          <View style={styles.overlayFrame}></View>
          <Image source={profileImage} style={styles.profileImage} />
          <Text style={styles.textName}>ASHARI MUHAMMAD HISBULLOH</Text>
          <Text style={styles.textProfession}>Just a student</Text>
        </View>
        <View style={styles.bottomFrame}>
          <Text style={ styles.big }>Hi!</Text>
          <Text>I am Ashari Muhammad Hisbulloh</Text>

          <ContactContent img='man' text='Lorem Ipsum Dolorsit Amet' />
          <ContactContent img='phone' text='+62 812 3456 7890' />
          <ContactContent img='mail' text='loremipsum@mail.com' />
          <ContactContent img='internet' text='www.loremipsum.com' />

          <View style={styles.contentContact}>
            <TextInput 
              style={{ height: 40, width: '100%' }} 
              placeholder='Enter your name...'
              onChangeText={ name => this.setState({name}) }/>
          </View>

          <View style={styles.contentContact}>
            <Button 
              onPress={this.handlePressButton} 
              title='Press me!' 
              style={styles.contactButton} />
          </View>

        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa'
  },
  topFrame: {
    flex: 2,
    backgroundColor: '#34495e',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10
  },
  overlayFrame: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  textName: {
    color: '#fff',
    backgroundColor: '#e74c3c',
    padding: 10,
    fontSize: 19,
    fontWeight: 'bold'
  },
  textProfession:{
    color: '#fff',
    fontSize: 12,
    backgroundColor: '#e74c3c',
    padding: 5
  },
  bottomFrame: {
    flex: 3,
    backgroundColor: '#f0f0f0',
    padding: 15,
  },
  big: {
    fontSize: 23,
    color: '#000',
    opacity: 0.5
  },
  contentContact:{
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 10
  },
  iconContact: {
    width: 30,
    height: 30,
    marginRight: 15
  },
  textContact: {
    fontSize: 18,
    color: '#333'
  },
  contactButton: {
    backgroundColor: '#fff',
    color: 'steelblue',
  }
});
