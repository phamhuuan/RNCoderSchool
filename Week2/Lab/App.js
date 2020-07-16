import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import {View, Image, FlatList, Text} from 'react-native';
import pic1 from './assets/pic1.png';
import pic2 from './assets/pic2.jpg';
import pic3 from './assets/pic3.jpg';
import pic4 from './assets/pic4.jpg';
import pic5 from './assets/pic5.jpg';

const feedData = [
  {
    id: 1,
    name: 'Pham Huu An 1',
    image: pic1,
    likeCount: 200,
    avatar: pic2,
  },
  {
    id: 2,
    name: 'Pham Huu An 2',
    image: pic3,
    likeCount: 234,
    avatar: pic5,
  },
  {
    id: 3,
    name: 'Pham Huu An 3',
    image: pic4,
    likeCount: 567,
    avatar: pic3,
  },
  {
    id: 4,
    name: 'Pham Huu An 4',
    image: pic2,
    likeCount: 145,
    avatar: pic1,
  },
  {
    id: 5,
    name: 'Pham Huu An 5',
    image: pic1,
    likeCount: 326,
    avatar: pic2,
  },
];
function Item({name, image, likeCount, avatar}) {
  return (
    <View style={{flex: 1, marginTop: 10}}>
      {/*AVT*/}
      <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 10}}>
        <Image resizeMode={'cover'} source={avatar} style={{height: 50, width: 50, borderRadius: 25}} />
        <Text style={{fontSize: 17, fontWeight: 'bold', marginLeft: 15}}>{name}</Text>
      </View>
      {/*Picture*/}
      <Image source={image} style={{height: 400, width: '100%', marginTop: 10}} resizeMode={'cover'} />
      {/*Tool*/}
      <View style={{flexDirection: 'row', marginTop: 10}}>
        <Feather name={'heart'} style={{fontSize: 30, marginLeft: 15}} onPress={() => alert('Like')} />
        <MaterialIcons name={'chat-bubble-outline'} style={{fontSize: 30, marginLeft: 15}} onPress={() => alert('Comment')} />
        <Feather name={'share'} style={{fontSize: 30, marginLeft: 15}} onPress={() => alert('Share')} />
      </View>
      {/*Line*/}
      <View style={{width: '100%', backgroundColor: 'gray', height: 0.5, marginTop: 10}} />
      {/*Like*/}
      <View style={{marginLeft: 15, marginTop: 10, flexDirection: 'row', alignItems: 'center'}}>
        <FontAwesome name={'heart'} style={{fontSize: 30}} />
        <Text style={{fontSize: 15, fontWeight: 'bold', marginLeft: 10}}>{likeCount} likes</Text>
      </View>
      {/*Line*/}
      <View style={{width: '100%', backgroundColor: 'gray', height: 0.5, marginTop: 10}} />
    </View>
  );
}
export default function App() {
  return (
    <View>
      {/*Header*/}
      <View style={{flexDirection: 'row', backgroundColor: '#f3f6fa', alignItems: 'center', justifyContent: 'space-between'}}>
        <View style={{width: 27}} />
        <Image
          source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png'}}
          style={{flex: 1, height: 44}}
          resizeMode="contain"
        />
        <Feather name={'inbox'} style={{fontSize: 27, marginRight: 5}} />
      </View>

      {/*Body*/}
      <FlatList
        data={feedData}
        renderItem={({item}) => (
          <Item image={item.image} name={item.name} avatar={item.avatar} likeCount={item.likeCount} />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
