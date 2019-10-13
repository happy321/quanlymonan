import React, {Component} from 'react';
import {Text, View, FlatList, StyleSheet, Image, Alert, TouchableHighlight, Button, TextInput, TouchableOpacity, ActivityIndicator} from 'react-native';


import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { bold } from 'ansi-colors';

export default class Update extends Component {
  
    constructor(props) {
      
         super(props)
      
         this.state = {
      
           id:'',
           tenmon: '',
           gia: '',
           mota: '',
      
         }
      
       }
   
       componentDidMount(){
   
        // Received Student Details Sent From Previous Activity and Set Into State.
        this.setState({ 
          id : this.props.navigation.state.params.id,
          tenmon: this.props.navigation.state.params.tenmon,
          gia: this.props.navigation.state.params.gia,
          mota: this.props.navigation.state.params.mota,
          
        })
   
       }
    
      static navigationOptions =
      {
         title: '',
      };
   
      UpdateStudentRecord = () =>{
               fetch('http://192.168.1.75:8080/react/update.php', {
              //fetch('http://10.16.69.51:8080/react/update.php', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({

                id : this.state.id,
   
                tenmon : this.state.tenmon,
        
                gia : this.state.gia,
        
                mota : this.state.mota,
        
        
              })
        
              }).then((response) => response.json())
                  .then((responseJson) => {
        
                    // Showing response message coming from server updating records.
                    Alert.alert(responseJson);
        
                  }).catch((error) => {
                    //console.error(error);
                  });
                  this.props.navigation.navigate('Home');
        
        }
   
   
      DeleteStudentRecord = () =>{
            
             fetch('http://192.168.1.75:8080/react/delete.php', {
            //fetch('http://10.16.69.51:8080/react/delete.php', {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
          
              id : this.state.id
          
            })
          
            }).then((response) => response.json())
            .then((responseJson) => {
          
              // Showing response message coming from server after inserting records.
              Alert.alert(responseJson);
          
            }).catch((error) => {
               console.error(error);
            });
   
            this.props.navigation.navigate('Home');
   
        }
   
      render() {
   
        return (
     
     <View style={styles.MainContainer}>
     
            <Text style={{fontSize: 25,color:'green', textAlign: 'center', marginBottom: 7}}> SỬA THÔNG TIN MÓN ĂN</Text>
      
            <TextInput
              
              placeholder="Student Name Shows Here"
              
              value={this.state.tenmon}
     
              onChangeText={ TextInputValue => this.setState({ tenmon : TextInputValue }) }
     
             // underlineColorAndroid='transparent'
     
              style={styles.TextInputStyleClass}
            />
     
           <TextInput
              
              placeholder="Student Class Shows Here"
   
              value={this.state.gia}
     
              onChangeText={ TextInputValue => this.setState({ gia : TextInputValue }) }
     
             // underlineColorAndroid='transparent'
     
              style={styles.TextInputStyleClass}
            />
     
           <TextInput
              
              placeholder="Student Phone Number Shows Here"
   
              value={this.state.mota}
     
              onChangeText={ TextInputValue => this.setState({ mota : TextInputValue }) }
     
             // underlineColorAndroid='transparent'
     
              style={styles.TextInputStyleClass}
            />
     
           
     
           <TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={this.UpdateStudentRecord} >
     
              <Text style={styles.TextStyle}> CẬP NHẬT </Text>
     
           </TouchableOpacity>
     
           <TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={this.DeleteStudentRecord} >
     
              <Text style={styles.TextStyle}> XOÁ MÓN ĂN </Text>
     
           </TouchableOpacity>
      
     
     </View>
                
        );
      }
   
  }
  const styles = StyleSheet.create({
 
    MainContainer :{
   
      alignItems: 'center',
      flex:1,
      paddingTop: 30,
      backgroundColor: '#fff'
   
    },
   
    MainContainer_For_Show_StudentList_Activity :{
      
      flex:1,
      paddingTop: (Platform.OS == 'ios') ? 20 : 0,
      marginLeft: 5,
      marginRight: 5
      
      },
   
    TextInputStyleClass: {
          marginTop : 15,
          textAlign: 'center',
          width: '90%',
          marginBottom: 7,
          height: 40,
          borderWidth: 2,
          borderColor: 'black',
          color: 'white',
          borderRadius: 5 ,
          backgroundColor : 'mediumseagreen',
    },
   
    TouchableOpacityStyle: {
      marginTop : 20,
      paddingTop:10,
      paddingBottom:10,
      borderRadius:5,
      marginBottom:7,
      width: '90%',
      backgroundColor: 'tomato',
   
    },
   
    TextStyle:{
      color:'#fff',
      textAlign:'center',
    },
   
    rowViewContainer: {
      fontSize: 20,
      paddingRight: 10,
      paddingTop: 10,
      paddingBottom: 10,
    }
   
  });