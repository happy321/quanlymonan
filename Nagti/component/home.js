import React, {Component} from 'react';
import {Text, View, FlatList, StyleSheet, Image, Alert, TouchableHighlight,Button} from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Add from './add';
import Update from './update';

 class DanhSach extends Component{
    static navigationOptions =
  {
     title: 'DANH SÁCH MÓN ĂN',
     
  };
    constructor(props) {
        super(props);     
        this.state = ({
            
            myData : [],           
        });
      //  this._onPressAdd = this._onPressAdd.bind(this);
    }

    
    // ham load du lieu tu server
    loadDataFromServer = () => {
        //http://192.168.1.116/react/test.php
         fetch('http://192.168.1.75:8080/react/showall.php')
        //fetch('http://10.16.69.51:8080/react/test.php')
          .then((response) => response.json())
          .then((responseJson) => {
            this.setState({
              myData: responseJson,
            });
          })
          .catch((e) => {
            alert(e)
          });
      }
      componentDidMount() {
        this.loadDataFromServer();
      }
      //Lay du lieu sv theo id
      GetStudentIDFunction=(id,tenmon, gia, mota, anh)=>{
        this.props.navigation.navigate('Sua', { 
          id : id,
          tenmon : tenmon,
          gia : gia,
          mota : mota,
          anh : anh
        });
   }
    render (){
        return(
            <View style={{flex: 1}}>
                
                <FlatList 
                    ref={"flatList"}
                    data = {this.state.myData}
                    
                    renderItem = {({item}) =>(
                        <View style={styles.item}>
                            <View style={styles.viewItem}>
                                <Image
                                    source = {{uri: item.anh}}
                                    style= {styles.anh}
                                >
                                </Image>
                                <View style={styles.textItem}>
                                    <Text style={styles.text}>{item.tenmon}</Text>
                                    <Text style={styles.text}>{item.mota}</Text>
                                    <Text style={styles.text}>{item.gia}</Text>
                                </View>
                                <TouchableHighlight 
                                onPress={this.GetStudentIDFunction.bind(
                                    this, item.id,
                                    item.tenmon, 
                                    item.gia, 
                                    item.mota, 
                                    
                                    )} > 
                                    <Text style={{fontSize:18,color: 'blue', margin:10 , justifyContent: 'center',alignItems:'center'}}>SUA</Text>
                                </TouchableHighlight>
                                
                            </View>
        
                        <View style={styles.vien}>
        
                        </View>
                    </View>
                    )}
              
                >
               
                    
                </FlatList>
                
                
               <View style= {styles.hearder}>
                    <Button style={styles.btthem}
                        title="Thêm"
                        onPress={() => this.props.navigation.navigate('Them')}
                        />
                        
                </View>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    item:{
        flex: 1,
        flexDirection: 'column',
    },
    text: {
        color: 'white',
        padding: 5,
        fontSize: 16,
    },
    textItem :{
        height: 100,
        flexDirection: 'column',
        flex: 1,
    },
    viewItem: {
        flex: 1,
        backgroundColor: 'gray',
        flexDirection: 'row',
    },
    anh: {
        height: 100,
        width: 100,
        margin: 5,
    },
    vien: {
        height: 1,
        backgroundColor: 'white',
    },
    hearder: {
       // backgroundColor: 'blue',
        height: 40,
        flexDirection: 'row',               
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    btthem:{
      flex: 1,
      width:200,
      
       
     
    }
})
const RootStack = createStackNavigator(
    {
      Home: DanhSach,
      Them: Add,
      Sua: Update,
     
   

    },
    {
      initialRouteName: 'Home',
    }
  );
  
  const AppContainer = createAppContainer(RootStack);
  
  export default class App extends React.Component {
    render() {
      return <AppContainer />;
    }
  }