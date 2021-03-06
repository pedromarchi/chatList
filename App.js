import React, { Component } from 'react';
import { View, Platform, StyleSheet, FlatList } from 'react-native';
import ListItem from './src/ListItem';

export default class ListaCvs extends Component{
  constructor(props){
    super(props);
    this.state = {
      list:[
        {key:'1', img:'https://www.b7web.com.br/avatar1.png', nome:'Pedro Marchi', msg:'Quero fazer um orçamento contigo!'},
        {key:'2', img:'https://www.b7web.com.br/avatar2.png', nome:'André Esteves', msg:'Quero um aplicativo para meu trabalhar em meu negócio'},
        {key:'3', img:'https://www.b7web.com.br/avatar3.png', nome:'Mariana Monteiro', msg:'Olá, bom dia. Visualizou o meu email com as propostas?'},
        {key:'4', img:'https://www.b7web.com.br/avatar2.png', nome:'João Gonçalves', msg:'Fala, parceiro! Tudo bem? Queria conversar contigo à respeito da sua entrevista'},
        {key:'5', img:'https://www.b7web.com.br/avatar1.png', nome:'Fábio Oliveira', msg:'Olá amigo!'},
        {key:'6', img:'https://www.b7web.com.br/avatar3.png', nome:'Susane Araújo', msg:'Gostaria de sair para jantar?'}
      ]
    };
  }
  render(){
    return(
      <View style={styles.container}>
        <FlatList 
          data={this.state.list}
          renderItem={({item})=> <ListItem data={item}/>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:(Platform.OS=='ios') ? 20 : 0
  }
});