import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight, StyleSheet } from 'react-native';

export default class ListItem extends Component{
	constructor(props){
		super(props);
		this.state = {
			msg:props.data.msg
		}
		this.click = this.click.bind(this);
	}
	click(){
		alert('Clicou para abrir a conversa: '+this.props.data.key)
	}
	render(){
		return(
			<TouchableHighlight onPress={this.click} underlayColor="#CCCCCC">
				<View style={styles.item}>
					<Image 
					source={{uri:this.props.data.img}} 
					style={styles.image}/>
					<View style={styles.info}>
						<Text style={styles.nome}>{this.props.data.nome}</Text>
						<Text numberOfLines={1} style={styles.msg}>{this.state.msg}</Text>
					</View>
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
		borderRadius:30
	},
	info:{
		flex:1,
		flexDirection:'column',
		justifyContent:'center',
		marginLeft:10
	},
	nome:{
		fontSize:15,
		fontWeight:'bold'
	}
});