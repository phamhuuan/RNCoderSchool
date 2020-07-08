import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import {View, Image, FlatList, Text, TouchableOpacity} from 'react-native';
import Foundation from 'react-native-vector-icons/Foundation';
import pic1 from './assets/pic1.png';
import pic2 from './assets/pic2.jpg';
import pic3 from './assets/pic3.jpg';
import pic4 from './assets/pic4.jpg';
import pic5 from './assets/pic5.jpg';
const imgData = [
  {id: 1, imgSource: pic1},
  {id: 2, imgSource: pic2},
  {id: 3, imgSource: pic3},
  {id: 4, imgSource: pic4},
  {id: 5, imgSource: pic5},
];

function Item({source}) {
  return (
    <View style={{flex: 1}}>
      <Image source={source} style={{width: 150, height: 150}} resizeMode={'contain'} />
    </View>
  );
}
export default function App() {
  return (
    <View style={{flex: 1}}>
      {/*StatusBar*/}
      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 30, marginTop: 10}}>
        <Ionicons name={'arrow-back-outline'} style={{fontSize: 30, color: 'gray'}} />
        <Foundation name={'indent-more'} style={{fontSize: 30, color: 'gray'}} />
      </View>

      {/*AVT*/}
      <View style={{marginTop: 10, flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 30}}>
        <Image source={pic1} style={{width: 100, height: 100, borderRadius: 50}} />
        <View>
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>Huu An</Text>
          <Text style={{color: 'gray'}}>Developer</Text>
          <View style={{marginTop: 10, flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity
              style={{backgroundColor: 'rgb(71,113,246)', width: 90, height: 30, alignItems: 'center', justifyContent: 'center', borderRadius: 15}}
              onPress={() => alert('follow')}>
              <Text style={{fontSize: 15, color: '#FFF'}}>Follow</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{backgroundColor: 'rgb(120,213,250)', width: 45, height: 30, alignItems: 'center', justifyContent: 'center', borderRadius: 15}}
              onPress={() => alert('send')}>
              <Ionicons name={'send-sharp'} style={{color: '#FFF', fontSize: 15}} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/*CountFollow*/}
      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 30, marginTop: 20}}>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>210</Text>
          <Text style={{color: 'gray'}}>Photos</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>15K</Text>
          <Text style={{color: 'gray'}}>Followers</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>605</Text>
          <Text style={{color: 'gray'}}>Following</Text>
        </View>
      </View>
      {/*Picture*/}
      <FlatList
        style={{marginHorizontal: 30, marginTop: 20}}
        data={imgData}
        renderItem={({item}) => <Item source={item.imgSource} />}
        numColumns={2}
        keyExtractor={item => item.id}
      />
      <View style={{alignItems: 'center', justifyContent: 'center', height: 40}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-around', width: 200}}>
          <Entypo name={'sound-mix'} style={{fontSize: 25, color: 'gray'}} />
          <Ionicons name={'add-circle-outline'} style={{fontSize: 25, color: 'gray'}} />
          <Feather name={'user'} style={{fontSize: 25, color: 'gray'}} />
        </View>
      </View>
    </View>
  );
}
