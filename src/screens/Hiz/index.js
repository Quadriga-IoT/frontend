import React ,{useState , useEffect} from 'react';
import axios from 'axios'
import { View, ScrollView, Text,Image, TouchableOpacity} from 'react-native';
import { Chart, Line, Area, HorizontalAxis, VerticalAxis } from 'react-native-responsive-linechart'
function Hiz()
{
  const [hiz, sethiz] = useState([]);
  const [zaman, setzaman] = useState([]);
  useEffect(() => 
  {
    axios.get("http://164.92.130.208")
    .then(response => sethiz(response.data))
    .catch(error => console.log({error}));
  }, []);
     
    // var yenipil = pil.map(function(pil){
    //     return pil.id;      
    // })
    var yenihiz = new Array();
    // var sayi1 = 0;
   for (i = 0; i<9 ; i++)
    {   
    //  yenihiz[i] =sayi1;
    //  sayi1++;
     yenihiz[i] = hiz.data[i].speed;
    }
    // var yenihiz = [0,30,45,60,75,56,]
  
  // useEffect(() => 
  // {
  //   axios.get("http://164.92.130.208")
  //   .then(response => setzaman(response.data))
  //   .catch(error => console.log({error}));
  // }, []); 

  // var count = 0;
  // var yenizaman = zaman.map(function(zaman){
  //   count++;
  //   return zaman.id;
  // })

  var count = 9;
  var yenizaman= new Array();
  var b = 0;
  // var sayi = 240;
  for (i = 0; i<9 ; i++)
     {   
      b = hiz.data[i].workingTime;
       yenizaman[i] = b/60;
      //  sayi= sayi+10;
     }
  // var yenizaman = [0,2,4,6,8,10]

  const xdata = yenizaman;  
  const ydata = yenihiz;
  var i = 0;
  var sondizi =[];
  for (i = 0; i<count ; i++)
  {   
    sondizi[i] = {x: xdata[i] , y: ydata[i]}
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
    style={{ height: 300, width: 380 ,marginTop: 50}}
    data = {sondizi}
    padding={{ left: 60, bottom: 20, right: 20, top: 20 }}
    xDomain={{ min: 0, max: 22 }}
    yDomain={{ min: 0, max: 100 }}
    // viewport={{ size: { width: 2 } }}
    >
    
    <VerticalAxis tickCount={5} theme={{ 
       axis: { stroke: { color: '#aaa', width: 2 } },
       ticks: { stroke: { color: '#aaa', width: 2 } },
      labels: { formatter: v => String(v) + "  " + "km/sa"   } }} />
    <HorizontalAxis tickCount={5} theme={{ 
      axis: { stroke: { color: '#aaa', width: 2 } },
      ticks: { stroke: { color: '#aaa', width: 2 } },
      labels: { formatter: (v) => v.toFixed(0) } }}/>
    <Area theme={{ gradient: { from: { color: '#4A82A9' }, to: { color: '#153D5A', opacity: 0.4 } }}} />
    <Line theme={{ stroke: { color: '#4A82A9', width: 5 }, scatter: { default: { width: 4, height: 4, rx: 2 }} }} />
    </Chart>
  


  
    </View>  
  )}



export default Hiz;



  










