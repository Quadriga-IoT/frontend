//class yöntemiyle veri çekme
import React from 'react';
import { View, Text,FlatList} from 'react-native';
import axios from 'axios';
export default class Vericekmeornekleri extends React.Component 
{

  constructor(props) {
    super(props);
    this.state = {
        data:[]
    }
  }
  componentDidMount(){
      axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res)=>
      {
        this.setState({data : res.data})
      })
      .catch((e) => console.log(e))
  }
  
    render(){
      const {data} = this.state;
      return(<View>
       <FlatList 
       data = {data}
       keyExtractor = {(item) => item.id.toString()}
       renderItem = {({item}) => 
       <View style = {{padding: 10}}>
         <Text> {item.title}</Text>
         <Text> {item.body}</Text>
       </View>}/>      
      </View>  
      )
    }
}






//use state episodes
// import React, { useState, useEffect } from 'react'
// import { View, Text, FlatList, ActivityIndicator } from 'react-native'
// import axios from 'axios'

// const API = 'https://rickandmortyapi.com/api/character'
// const Episodes = () => {
//   const [characters, setCharacters] = useState([])
//   //yüklenip yüklenmeme durumunu boolean olarak tutacağımız bir state oluşturuyoruz
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     setTimeout(() => {
//       fetchData()
//     })
//   }, [])
//   const fetchData = async () => {
//     const response = await axios.get(API)
//     console.warn(response.data.results)
//     setCharacters(response.data.results)
//      //Datayı set ettikten hemen sonra loading değerini false a çekiyoruz
//     setLoading(false)
//   }

//   const renderItem = ({ item }) => {
//     return (
//       <Text>{item.name}</Text>
//     )
//   }
//   return (
//     <View style={{ flex: 1, backgroundColor: 'green', alignItems: 'center', justifyContent: 'center' }}>
//       {
//       //Burada loading değeri eğer true ise FlatList i ekrana basıyoruz. False ise ActivityIndıcator döndürüyoruz.
//         !loading ? (
//           <FlatList data={characters} renderItem={renderItem}></FlatList>
//         ) :
//           <ActivityIndicator />
//       }
//     </View>
//   )
// }
// export default Episodes
//use state episodes




//function yöntemiyle veri çekme
// import React ,{useState , useEffect} from 'react';
// import {ScrollView, View, Text,Image, TouchableOpacity, StyleSheet} from 'react-native';
// import hizgörseli from '../../assets/yenihiz1.png';
// import pilgörseli from '../../assets/battery3.jpg';
// import Icon from "react-native-vector-icons/FontAwesome5";
// import axios from 'axios'



// function Home() 
// {
  
//       const [bilgiler, setbilgiler] = useState([]);
//       useEffect(() => 
//       {
//         axios.get("https://jsonplaceholder.typicode.com/posts")
//         .then(response => setbilgiler(response.data))
//         .catch(error => console.log({error}));
//       }, []);

//       var dizi = bilgiler.map(bilgiler => { return <View key = {bilgiler.id} > 
//       <Text> {bilgiler.id} </Text>
//       <Text> {bilgiler.title} </Text>
//       <Text> {bilgiler.body} </Text>
//       </View>} )

//     return(
//       <ScrollView >
//       {dizi}
//       </ScrollView>  
//     )
//   }

    
// export default Home;
//function yöntemiyle veri çekme





