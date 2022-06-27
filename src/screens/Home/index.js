import React ,{useState , useEffect} from 'react';
import { View, Text,Image, TouchableOpacity, StyleSheet} from 'react-native';
import axios from 'axios';
import * as Progress from 'react-native-progress';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Circle } from "react-native-svg";

import hizgörseli from '../../assets/yenihiz1.png';
import pilgörseli from '../../assets/battery3.jpg';
import Icon from "react-native-vector-icons/FontAwesome5";

function Home() 
{
  const [pil, setpil] = useState([]);
  useEffect(() => 
      {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response => setpil(response.data))
        .catch(error => console.log({error}));
      }, []);
      
      var dizi = pil.map(pil => { return <View style = {{ marginBottom: 20, alignItems: 'center'}} key = {pil.id} > 
        <Progress.Bar style = {{ marginBottom: 10}} size={200} progress={pil.id/100} width={200}  color= "#3d5875"  />
        <Text style = {{ fontSize: 20}}>73%</Text>
        </View>} )

    var dizi2 = pil.map(pil => { return <View style = {{ marginBottom: 20}} key = {pil.id} > 
       <Progress.Circle size={120}  progress={pil.id/100}  />
  </View>} )
  this.state = {
    fill: 90 
}
  

  return (
    <View  style={{ flex: 1, alignItems: 'center' , backgroundColor: "#F7F7F7"}} >
    <Text style = {{marginTop: 150, fontSize: 20, fontWeight: 'bold'}}> Anlık pil durumu </Text>
    <Text style = {{marginTop: 20,  marginBottom: 120 }} >{dizi[73]} </Text>
    <Text style ={{fontSize: 20, fontWeight: 'bold',marginBottom: 20 }}> Anlık hız durumu </Text>
    
    {/* <Text style = {{marginTop: 20 }}>{dizi2[64]}</Text> */}
    {/* <AnimatedCircularProgress
          size={120}
          width={5}
          backgroundWidth={20}
          fill={90}
          tintColor="#FFD058"
          tintColorSecondary="#ff0000"
          backgroundColor="#3d5875"
          arcSweepAngle={240}
          rotation={240}
          lineCap="round"
        /> */}
        {/* <AnimatedCircularProgress
        size={100}
        width={3}
        fill={70}
        tintColor="#2706AF">
          {
         (fill) => (
         <Text>
         { this.state.fill }
          </Text>
           )
        }      
        </AnimatedCircularProgress> */}

        {/* <AnimatedCircularProgress
  size={120}
  width={15}
  fill={50}
  tintColor="#00e0ff"
  backgroundColor="#3d5875"
  padding={10}
  renderCap={({ center }) => <Circle cx={center.x} cy={center.y} r="10" fill="blue" />}
  /> */}
       {/* <AnimatedCircularProgress
  size={100}
  width={15}
  fill={70}
  rotation = {230}
  arcSweepAngle = {250}
  tintColor="#00e0ff"
  onAnimationComplete={() => console.log('onAnimationComplete')}
  backgroundColor="#3d5875" 
  /> */}

        <AnimatedCircularProgress
          size={150}
          width={5}
          backgroundWidth={20}
          fill={90}
          tintColor="#FFD058"
          tintColorSecondary="#ff0000"
          backgroundColor="#3d5875"
          arcSweepAngle={240}
          rotation={240}
          lineCap="round"
        >
        {
         (fill) => (
         <Text style = {{ fontSize: 20}}>
         { this.state.fill }
          </Text>
           )
        }   
       
        </AnimatedCircularProgress>


    </View>
  );
}

/////////eski resimli anasayfa
// function Home() {
//     return(
//       <View style={{ flex: 1, alignItems: 'center' , backgroundColor: "#F7F7F7"}}>
//       <Text style =  {styles.Text}>Aracın Hızı</Text>
//       <Image class ="img-fluid" source = {hizgörseli} style ={{  height: 200 , width: 200, marginBottom: 50,  }}  />
//       <Text style =  {styles.Text} >Aracın Pil Durumu</Text>
//       <Image class ="img-fluid" source = {pilgörseli} style ={{  height: 100 , width: 200 }}  />
//       {/* <TouchableOpacity>
//          <Icon name={"linkedin"} color={"#0077B5"} size={30}  style = { {marginTop: 200}} />
//       </TouchableOpacity>   */}
//       </View>  
//     )}

//     const styles = StyleSheet.create({
//       Text: {
//         marginTop: 45,
//         marginBottom: 20,
//         fontSize: 20,
//         fontWeight: 'bold'
//       },
     
//     });
/////////eski resimli anasayfa
export default Home;





     