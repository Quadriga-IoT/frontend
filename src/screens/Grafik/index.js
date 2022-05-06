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
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response => setpil(response.data))
    .catch(error => console.log({error}));
  }, []);
     
    var yenipil = pil.map(function(pil){
      return pil.id;
    })
  
  useEffect(() => 
  {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response => setzaman(response.data))
    .catch(error => console.log({error}));
  }, []); 

  var count = 0;
  var yenizaman = zaman.map(function(zaman){
    count++;
    return zaman.id;
  })

  const xdata = yenizaman;
  const ydata = yenipil;
  var i = 0;
  var sondizi =[];
  for (i = 0; i<count ; i++)
  {   
    sondizi[i] = {x: xdata[i] , y: ydata[i]}
  }
 
  return(
    <ScrollView>
    <Chart
    style={{ height: 300, width: 400 }}
    data = {sondizi}
    padding={{ left: 40, bottom: 20, right: 20, top: 20 }}
    xDomain={{ min: 0, max: 10 }}
    yDomain={{ min: 0, max: 20 }}
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
    <Area theme={{ gradient: { from: { color: '#ffa502' }, to: { color: '#ffa502', opacity: 0.4 } }}} />
    <Line theme={{ stroke: { color: '#ffa502', width: 5 }, scatter: { default: { width: 4, height: 4, rx: 2 }} }} />
    </Chart>
    </ScrollView>  
  )}




export default Grafik;
