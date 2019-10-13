import * as React from 'react';
import { Button, View, Text, StyleSheet, FlatList, Image, TextInput } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class HomeScreen extends React.Component {
  constructor(props) {
        super(props);
        this.state = {
            flower: '',
            flowerId: '',
            newFlowerDesription: ''
        };

      }

  render() {
    return (

      <View style={styles.container}>
      <View style={styles.addText}>
      <Text style={styles.addTitle}> THÊM HOA</Text>
        
      <Text> Tên hoa </Text>
      <TextInput 
                    onChangeText={(text) => this.setState({ flower: text })}
                    placeholder="nhập tên hoa"
                    value={this.state.flower} 
                                            />
          
      </View>
      <Text> Mã hoa </Text>
      <TextInput
                    onChangeText={(text) => this.setState({ flowerId: text })}
                    placeholder="Nhập mã hoa"
                    value={this.state.flowerId} 
       />
      <Text> Mô tả </Text>
      <TextInput 

                    onChangeText={(text) => this.setState({ newFlowerDesription: text })}
                    placeholder="Nhập mô tả"
                    value={this.state.newFlowerDesription} 
            />
        <Button
          title="Thêm"
         onPress={() => {
         
            if (this.state.flowerId.length == 0 || this.state.flower.length == 0 || this.state.newFlowerDesription.length == 0) {
                            alert(" Vui lòng nhập đầy đủ thông tin");
                            return;
                        }  
            this.props.navigation.navigate('Details', {
              flower:this.state.flower,
              flowerId: this.state.flowerId,
              newFlowerDesription: this.state.newFlowerDesription,
              
            });

          }}
        />
      </View>
    
     
    );
  }
}

class DetailsScreen extends React.Component {
      constructor(props){
    super(props);
    this.state = { dsmonan: [
      {
        "key": "1",
        "name": "Hoa hồng",   
        "imageUrl": "https://vuonhoaviet.vn/wp-content/uploads/2017/10/100.-Hoa-h%E1%BB%93ng-ngo%E1%BA%A1i-Aoi.jpg",                    
        "foodDescription": "đây là hoa hồng"
    },
    {
        "key": "2",
        "name": "hoa hồng tím",        
        "imageUrl": "https://mrhoa.com/wp-content/uploads/2017/08/hoa-hong-xanh-y-nghia.jpg",    
        "foodDescription": "đây là hoa hồng tím"
    },
    {
        "key": "3",
        "name": "hoa hồng xanh lá",
        "imageUrl": "http://sieuthihatgiong.com.vn/wp-content/uploads/2019/01/hoa-hong-xanh-la.jpg",
        "foodDescription": "đây là hoa hồng xanh lá"
    },
    {
        "key": "4",
        "name": "hoa hồng xanh",        
        "imageUrl": "https://hatgionghoadep.vn/olapapa/uploads/2019/03/hat-giong-hoa-hong-xanh-duong-hcm-hat-giong-hoa-dep-vn-2.jpg",
        "foodDescription": "đây là hoa hồng xanh"
    },
   
    
      ],

      };

       const newFood = {
                            key: this.props.navigation.getParam('flower', 'NO-ID'),
                            name: this.props.navigation.getParam('flower', 'NO-NAME'),
                            imageUrl: "https://hatgiongtihon.net/wp-content/uploads/2018/05/hoa-h%E1%BB%93ng-leo-Ph%C3%A1p-m%C4%A9-h%E1%BA%A1t-gi%E1%BB%91ng-t%C3%AD-hon-3.png",
                            foodDescription: this.props.navigation.getParam('newFlowerDesription', 'NO-DES')
                        };    
                        this.state.dsmonan.push(newFood);   
                        
  }
  
  render() {
    return (
    <View style={styles.container}>
      <View style="abc">
          <Text style={styles.addTitle}>DANH SÁCH HOA</Text>
          
          </View>
      
      <FlatList
          data={this.state.dsmonan}
          renderItem={({item}) =>  (
      <View style={styles.row}>

          <Image source={{uri: item.imageUrl }} style={styles.thumb}/>
          <View style="abc">
          <Text style={styles.text1}>{item.name}</Text>
          <Text style={styles.text}>{item.foodDescription}</Text>
          </View>
          
          
      </View>
      ) }

       /> 
        </View>
    );
  }
}

const RootStack = createStackNavigator({
  Home: HomeScreen,
  Details: DetailsScreen,
});

export default createAppContainer(RootStack);

const styles = StyleSheet.create({
  container: {
    borderColor:'green',
    borderWidth:1,
   flex: 2,
   paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    
  },
  row: {
    flexDirection: 'row',

    padding: 10,
    backgroundColor: '#F6F6F6',
    borderBottomWidth: 1,
    borderColor: '#c9c9c9',
  },

  thumb: {
    width: 64,
    height: 64,
  },

  text: {
 
    flex: 1,
    padding: 10
  },
   text1: {
    fontSize: 20,
    flex: 1,
    padding: 10
  },
  abc: {
    flexDirection: 'column'
  },
  addTitle: {
    color:'red',
    fontSize: 25,
    paddingLeft: 100,
  }

})
