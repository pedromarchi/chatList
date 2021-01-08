import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight, StyleSheet } from 'react-native';

export default class ListItem extends Component{
	constructor(props){
		super(props);
		this.click = this.click.bind(this);
	}
	click(){

	}
	render(){
		return(
			<TouchableHighlight onPress={this.click} underlayColor="#CCCCCC">
				<View style={styles.item}>
					<Image 
					source={{uri:this.props.data.img}} 
					style={styles.image}/>
				</View>
			</TouchableHighlight>
		);
	}
}

const styles = StyleSheet.create({
	item:{
		height:60,
		marginLeft:10,
		marginRight:10,
		borderBottomWidth:1,
		borderColor:"#CCCCCC",
		flex:1,
		flexDirection:'row'
	},
	image:{
		width:40,
		height:40,
		marginTop:10,
		borderRadius:20
	}
});