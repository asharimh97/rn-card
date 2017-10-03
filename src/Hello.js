import React, { Component } from 'react'
import { Text, StyleSheet , View } from 'react-native'

export default class Hello extends Component{
	render(){
		return(
			<Text>Hello { this.props.name }!</Text>
		) ;
	}
}