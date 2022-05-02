import React ,{useState , useEffect} from 'react';
import { ScrollView, View, Text, Button } from 'react-native';
import axios from 'axios';
import * as Progress from 'react-native-progress';



function Pil() 
{
  const [pil, setpil] = useState([]);
  useEffect(() => 
      {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response => setpil(response.data))
        .catch(error => console.log({error}));
      }, []);
      
      var dizi = pil.map(pil => { return <View style = {{ marginBottom: 20}} key = {pil.id} > 
        <Progress.Bar style = {{ marginBottom: 10}} size={100} progress={pil.id/100} width={200} />
        <Progress.Circle size={100}  progress={pil.id/100}  />
        </View>} )
  return (
    <ScrollView  >
      {dizi}
      {dizi[0]}

    </ScrollView>
  );
}
export default Pil;