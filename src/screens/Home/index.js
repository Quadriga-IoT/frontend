import * as React from 'react';
import { View, Text,Image, TouchableOpacity} from 'react-native';
import image from '../../assets/home.png';
import Icon from "react-native-vector-icons/FontAwesome5";

function Home() {
    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Image class ="img-fluid" source = {image} style ={{  height: 200 , width: 200 }}  />
      {/* <TouchableOpacity>
         <Icon name={"linkedin"} color={"#0077B5"} size={30}  style = { {marginTop: 200}} />
      </TouchableOpacity>   */}
      </View>  
    )}
export default Home;

