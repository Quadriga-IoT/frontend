import React ,{useState , useEffect} from 'react';
import axios from 'axios'
import { View, ScrollView, Text,Image, TouchableOpacity} from 'react-native';
import { Chart, Line, Area, HorizontalAxis, VerticalAxis } from 'react-native-responsive-linechart'
function Grafik()
{
  const [pil, setpil] = useState([]);
  const [zaman, setzaman] = useState([]);
  useEffect(() => 
  {
    axios.get("http://164.92.130.208/")
    .then(response => setpil(response.data))
    .catch(error => console.log({error}));
  }, []);
     
    // var yenipil = pil.map(function(pil){
    //     return data[0];      
    // })
    
    // console.log(pil);
    // console.log(pil.data[0].battery0);


        // yenipil = pil[0];
    // yenipil = data[0];
    // var dizi1 = pil.data;
    // var dizi2 = dizi1.map(dizi1 => { return <View key = {dizi1._id} > 
    //           <Text> {dizi1._id} </Text>
    // </View>} )
//    var dizi3 = dizi1[0].battery0;
//    var dizi5 = pil.battery0;
//    var dizi4 = pil.data[0].battery0;
//    for (i = 0; i<9 ; i++)
//    {   
//      var dizi4 = pil.data[i].battery0;
//    }

   var yenipil = new Array();

for (i = 0; i<9 ; i++)
   {   
     yenipil[i] = pil.data[i].battery0;
   }

//   console.log(yenipil);

 
  
 




        
  // var dizi = bilgiler.map(bilgiler => { return <View key = {bilgiler.id} > 
  //         <Text> {bilgiler.id} </Text>
  //      </View>} )
    // var yenipil = pil.map(function(pil){
    //   return pil.battery0;
    // })

     

      // var yenipil = dizi.map(dizi => { return <View key = {dizi.battery0} > 
      //   <Text> {dizi.battery0} </Text>

      //  </View>} )
  
    // var yenipil = pil.map(pil => { return <View key = {pil.data} > 
    //       <Text> {pil.data.battery0} </Text>

    //      </View>} )

    // console.log(pil);
  // useEffect(() => 
  // {
  //   axios.get("http://164.92.130.208/")
  //   .then(response => setzaman(response.data))
  //   .catch(error => console.log({error}));
  // }, []); 

  // var count = 0;
  // var yenizaman = zaman.map(function(zaman){
  //   count++;
  //   return zaman.workingTime;
  // })

  // const xdata = yenizaman;
  // const ydata = yenipil;
  // var i = 0;
  // var sondizi =[];
  // for (i = 0; i<count ; i++)
  // {   
  //   sondizi[i] = {x: xdata[i] , y: ydata[i]}
  // }
 
  return(
    <ScrollView>
      {/* {yenipil} */}
      {/* {dizi} */}
    {/* <Text>{dizi2} </Text> */}
    {/* <Text>{dizi3} </Text> */}
    {/* <Text>{dizi4} </Text> */}
    {/* <Text>{yenipil} </Text>
     */}
     <Text> {yenipil}  </Text>

    </ScrollView>  
  )}




export default Grafik;
