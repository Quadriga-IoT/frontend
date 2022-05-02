import React ,{useState , useEffect} from 'react';
import {ScrollView, View, Text,Image, TouchableOpacity, StyleSheet} from 'react-native';
import hizgörseli from '../../assets/yenihiz1.png';
import pilgörseli from '../../assets/battery3.jpg';
import Icon from "react-native-vector-icons/FontAwesome5";
import axios from 'axios'



function Home() 
{
  
      const [bilgiler, setbilgiler] = useState([]);
      useEffect(() => 
      {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response => setbilgiler(response.data))
        .catch(error => console.log({error}));
      }, []);

      var dizi = bilgiler.map(bilgiler => { return <View key = {bilgiler.id} > 
      <Text> {bilgiler.id} </Text>
      <Text> {bilgiler.title} </Text>
      <Text> {bilgiler.body} </Text>
      </View>} )

    return(
      <ScrollView >
      {dizi}
      </ScrollView>  
    )
  }

    
export default Home;






 // useEffect(() => 
      // {
      //   fetch("https://restcountries.eu/rest/v2/all")
      //   .then(response => response.json())
      //   .then(response => setcountries(response))
      // }, []);

       // const verileriOku = () => {
      //   fetch("https://randomuser.me/api/?results=50")
      //     .then((hamVeri) => hamVeri.json())
      //     .then((jsonSonuc) => console.log(jsonSonuc));
      // };


       {/* <Text style =  {styles.Text}>Aracın Hızı</Text>
      <Image class ="img-fluid" source = {hizgörseli} style ={{  height: 200 , width: 200, marginBottom: 50,  }}  />
      <Text style =  {styles.Text} >Aracın Pil Durumu</Text>
      <Image class ="img-fluid" source = {pilgörseli} style ={{  height: 100 , width: 200 }}  /> */} 

      // const styles = StyleSheet.create({
      //   Text: {
      //     marginTop: 45,
      //     marginBottom: 20,
      //     fontSize: 20,
      //     fontWeight: 'bold'
      //   }   
      // });