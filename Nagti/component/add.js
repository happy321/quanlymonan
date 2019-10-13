import React, {Component} from 'react';
import {Text, View, FlatList, StyleSheet, Image, Alert, TouchableHighlight, Button, TextInput, TouchableOpacity, ActivityIndicator} from 'react-native';


import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { bold } from 'ansi-colors';




export default  class Add extends Component {
 
  
 
constructor(props) {
 
   super(props)
 
   this.state = {
 
     tenmon: '',
     gia: '',
     mota: '',
     //anh: '',
 
   }
 
 }
 
 InsertStudentRecordsToServer = () =>{
  if (this.state.tenmon.length == 0 || this.state.gia.length == 0 || this.state.mota.length == 0 ) {
    Alert.alert(
      'Thong bao',
      'Ban can dien day du thong tin ?')
    return;}
       fetch('http://192.168.1.75:8080/react/insert.php', { 
      //fetch('http://10.16.69.51:8080/react/insert.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
 
        tenmon : this.state.tenmon,
 
        gia : this.state.gia,
 
        mota : this.state.mota,
 
        //anh: this.state.anh
 
      })
 
      }).then((response) => response.json())
          .then((responseJson) => {
 
            // Showing response message coming from server after inserting records.
            Alert.alert(responseJson);
 
          }).catch((error) => {
            console.error(error);
          });


 
}
 
 GoTo_Show_StudentList_Activity_Function = () =>
  {
    this.props.navigation.navigate('Home');
  }
 
 render() {
   return (
 
<View style={styles.MainContainer}>
 
 
       <Text style={{fontSize: 25,color: 'green', textAlign: 'center', marginBottom: 20, TextStyle: bold}}> THÊM MÓN ĂN MỚI </Text>
 
       <TextInput
         
         placeholder="Nhập tên món ăn"
 
         onChangeText={ TextInputValue => this.setState({ tenmon : TextInputValue }) }
 
         //underlineColorAndroid='transparent'
 
         style={styles.TextInputStyleClass}
       />
 
      <TextInput
         
         placeholder="Nhập giá"
 
         onChangeText={ TextInputValue => this.setState({ gia : TextInputValue }) }
 
         //underlineColorAndroid='transparent'
 
         style={styles.TextInputStyleClass}
       />
 
      <TextInput
         
         placeholder="nhập mô tả"
 
         onChangeText={ TextInputValue => this.setState({ mota : TextInputValue }) }
 
         //underlineColorAndroid='transparent'
 
         style={styles.TextInputStyleClass}
       />
 
       {/* <TextInput
 
         placeholder="Enter Student Email"
 
         onChangeText={ TextInputValue => this.setState({ anh : TextInputValue }) }
 
         underlineColorAndroid='transparent'
 
         style={styles.TextInputStyleClass}
       /> */}
 
      <TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={this.InsertStudentRecordsToServer} >
 
        <Text style={styles.TextStyle}> THEM MOI </Text>
 
      </TouchableOpacity>
 
      <TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={this.GoTo_Show_StudentList_Activity_Function} >
 
        <Text style={styles.TextStyle}> DANH SACH </Text>
 
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