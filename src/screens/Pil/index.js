import React ,{useState , useEffect} from 'react';
import { ScrollView, View, Text, Button } from 'react-native';
import axios from 'axios';
import { Chart, Line, Area, HorizontalAxis, VerticalAxis } from 'react-native-responsive-linechart'



function Pil()
{
  const [pil, setpil] = useState([]);
  const [zaman, setzaman] = useState([]);
  useEffect(() => 
  {
    axios.get("http://164.92.130.208")
    .then(response => setpil(response.data))
    .catch(error => console.log({error}));
  }, []);

  var yenipil = new Array();
   var sayi1 = 0;
  for (i = 0; i<9 ; i++)
   {   
    // yenipil[i] =sayi1;
    // sayi1++;
    yenipil[i] = pil.data[i].battery0;
   }

  //   // var yenipil = pil.map(function(pil){
  //   //     return pil.id;      
  //   // })

  //   for (i = 0; i<9 ; i++)
  //   {   
  //     var yenipil = pil.data[i].battery0;
  //   }
  //   // var yenipil = [10,20,30,50,70,80]
  
  // useEffect(() => 
  // {
  //   axios.get("http://164.92.130.208")
  //   .then(response => setzaman(response.data))
  //   .catch(error => console.log({error}));
  // }, []); 

  // // var count = 0;
  // // var yenizaman = zaman.map(function(zaman){
  // //   count++;
  // //   return zaman.id;
  // // })

   var count = 9;
   var yenizaman = new Array();
  var sayi = 240;
  var b = 0;
   for (i = 0; i<9 ; i++)
      {   
        b = pil.data[i].workingTime;
        yenizaman[i] = b/60;
        // sayi= sayi+10;
        // yenizaman[i] = sayi/60;
      }
  // var yenizaman = [0,2,4,6,8,10];

  const xdata = yenizaman;
  const ydata = yenipil;
  var a = 0;
  var sondizi =[];
  for (a = 0; a<count ; a++)
  {   
    sondizi[a] = {x: xdata[a] , y: ydata[a]}
  }





        
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
    <View style={{ flex: 1, alignItems: 'center'}}>
      {/* {yenipil} */}
      {/* {dizi} */}
    <Chart
    style={{ height: 300, width: 380, marginTop: 50}}
    data = {sondizi}
    padding={{ left: 40, bottom: 20, right: 20, top: 20 }}
    xDomain={{ min: 0, max: 22 }}
    yDomain={{ min: 0, max: 100 }}
    // viewport={{ size: { width: 2 } }}
    >
    
    <VerticalAxis tickCount={5} theme={{ 
       axis: { stroke: { color: '#aaa', width: 2 } },
       ticks: { stroke: { color: '#aaa', width: 2 } },
      labels: { formatter: v =>" °%" + String(v)    } }} />
    <HorizontalAxis tickCount={5} theme={{ 
      axis: { stroke: { color: '#aaa', width: 2 } },
      ticks: { stroke: { color: '#aaa', width: 2 } },
      labels: { formatter: (v) => v.toFixed(0) } }}/>
    <Area theme={{ gradient: { from: { color: '#951B1B' }, to: { color: '#D35959', opacity: 0.4 } }}} />
    <Line theme={{ stroke: { color: '#D35959', width: 5 }, scatter: { default: { width: 4, height: 4, rx: 2 }} }} />
    </Chart>
  


  
    </View>  
  )}



export default Pil;