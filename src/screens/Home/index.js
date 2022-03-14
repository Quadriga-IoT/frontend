import * as React from 'react';
import { View, Text,Image, TouchableOpacity, StyleSheet} from 'react-native';
import hizgörseli from '../../assets/yenihiz1.png';
import pilgörseli from '../../assets/battery3.jpg';
import Icon from "react-native-vector-icons/FontAwesome5";

function Home() {
    return(
      <View style={{ flex: 1, alignItems: 'center' , backgroundColor: "#F7F7F7"}}>
      <Text style =  {styles.Text}>Aracın Hızı</Text>
      <Image class ="img-fluid" source = {hizgörseli} style ={{  height: 200 , width: 200, marginBottom: 50,  }}  />
      <Text style =  {styles.Text} >Aracın Pil Durumu</Text>
      <Image class ="img-fluid" source = {pilgörseli} style ={{  height: 100 , width: 200 }}  />
      {/* <TouchableOpacity>
         <Icon name={"linkedin"} color={"#0077B5"} size={30}  style = { {marginTop: 200}} />
      </TouchableOpacity>   */}
      </View>  
    )}

    const styles = StyleSheet.create({
      Text: {
        marginTop: 45,
        marginBottom: 20,
        fontSize: 20,
        fontWeight: 'bold'
      },
     
    });
export default Home;

