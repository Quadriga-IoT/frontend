// google charts
// import {GoogleCharts} from 'google-charts';
 
// //Load the charts library with a callback
// GoogleCharts.load(drawChart);
 
// function Hiz() {
 
//     // Standard google charts functionality is available as GoogleCharts.api after load
//     const data = GoogleCharts.api.visualization.arrayToDataTable([
//         ['Chart thing', 'Chart amount'],
//         ['Lorem ipsum', 60],
//         ['Dolor sit', 22],
//         ['Sit amet', 18]
//     ]);
//     const pie_1_chart = new GoogleCharts.api.visualization.PieChart(document.getElementById('chart1'));
//     pie_1_chart.draw(data);
// }

// export default Hiz;
//google charts




//****react-google-charts****
// import React, {Component} from 'react';
// import {View } from 'react-native';
// import {Chart} from 'react-google-charts';
// const options ={
//     hAxis: {
//         title: 'Gun',
//     },
//     vAxis: {
//         title: 'Dolar kuru',
//     },
// };

// const data = [
//     ['Gun' , 'Dolar kuru'],
//     [1, 5.69],
//     [1, 5.69],
//     [1, 5.69],
//     [1, 4.69],
//     [1, 5.69],
// ]

// export default class Hiz extends Component
// {
//     render()
//     {
//         return(
//             <Chart
//              width = {'600px'}
//              height = {'400px'}
//              charType = "LineChart"
//              loader = {<View> Yukleniyor</View>}
//              data = {data}
//              options = {options}
//             />
//         );
//     }
// }
//****react-google-charts****


//****react-google-charts****
// import { Chart } from "react-google-charts";

// <Chart
//   chartType="ScatterChart"
//   data={[["Age", "Weight"], [4, 5.5], [8, 12]]}
//   width="100%"
//   height="400px"
//   legendToggle
// />
//****react-google-charts****

  



//****react-chartjs-2****
// import React from 'react';
// import {Bar, Line, Pie} from 'react-chartjs-2';


// // import {
// //     LineChart,
// //     BarChart,
// //     PieChart,
// //     ProgressChart,
// //     ContributionGraph,
// //     StackedBarChart
// //   } from "react-native-chart-kit";
//   import {ScrollView, View, Text,Image, TouchableOpacity, StyleSheet} from 'react-native';

// function Hiz()
// {
//     const state = 
//     {
//         labels: ["Ocak","Subat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Agustos" , 
//         "Eylul", "Ekim", "Kasim", "Aralık" ],
//         datasets: [{
//             label: "Satislar",
//             backgroundColor: ["red", "green", "blue", "yellow", "purple", "brown" ,"pink", "gray"
//         , "lightblue", "orange", "lightgreen", "lime"],
//         data : [60,70,10,110,60,80,60,70,85,110,141,50]
//         }]
//     }
//     return(
//         // <div className= "Hiz"> 
//         // <section>
//         //     <Bar
//         //     data = {state}
//         //     /> 
//         // </section>
//         // </div>
//         <View > 
//             <Bar
//             data = {state}
//             /> 

//         </View>
//     );
// }

// export default Hiz;
//****react-chartjs-2****





//*******react-native-chart-kit****
// import React from 'react';
// import {
//     LineChart,
//     BarChart,
//     PieChart,
//     ProgressChart,
//     ContributionGraph,
//     StackedBarChart
//   } from "react-native-chart-kit";
//   import {
//     SafeAreaView,
//     Text,
//     View,
//     StyleSheet,
//     Dimensions,
//     ScrollView,
//   } from 'react-native';
   

//   const MyBezierLineChart = () => {
//     return (
//       <>
//         <Text style={styles.header}>Bezier Line Chart</Text>
//         <LineChart
//           data={{
//             labels: ['January', 'February', 'March', 'April'],
//             datasets: [
//               {
//                 data: [
//                   Math.random() * 100,
//                   Math.random() * 100,
//                   Math.random() * 100,
//                   Math.random() * 100,
//                   Math.random() * 100,
//                   Math.random() * 100,
//                 ],
//               },
//             ],
//           }}
//           width={Dimensions.get('window').width - 16}
//           height={220}
//           yAxisLabel={'Rs'}
//           chartConfig={{
//             backgroundColor: '#1cc910',
//             backgroundGradientFrom: '#eff3ff',
//             backgroundGradientTo: '#efefef',
//             decimalPlaces: 2, // optional, defaults to 2dp
//             color: (opacity = 255) => `rgba(0, 0, 0, ${opacity})`,
//             style: {
//               borderRadius: 16,
//             },
//           }}
//           bezier
//           style={{
//             marginVertical: 8,
//             borderRadius: 16,
//           }}
//         />
//       </>
//     );
//   };
   
//   const MyLineChart = () => {
//     return (
//       <>
//         <Text style={styles.header}>Line Chart</Text>
//         <LineChart
//           data={{
//             labels: 
//               ['January', 'February', 'March', 'April', 'May', 'June'],
//             datasets: [
//               {
//                 data: [20, 45, 28, 80, 99, 43],
//                 strokeWidth: 2,
//               },
//             ],
//           }}
//           width={Dimensions.get('window').width - 16}
//           height={220}
//           chartConfig={{
//             backgroundColor: '#1cc910',
//             backgroundGradientFrom: '#eff3ff',
//             backgroundGradientTo: '#efefef',
//             decimalPlaces: 2,
//             color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//             style: {
//               borderRadius: 16,
//             },
//           }}
//           style={{
//             marginVertical: 8,
//             borderRadius: 16,
//           }}
//         />
//       </>
//     );
//   };
   
//   const MyProgressChart = () => {
//     return (
//       <>
//         <Text style={styles.header}>Progress Chart</Text>
//         <ProgressChart
//           data={[0.4, 0.6, 0.8]}
//           width={Dimensions.get('window').width - 16}
//           height={220}
//           chartConfig={{
//             backgroundColor: '#1cc910',
//             backgroundGradientFrom: '#eff3ff',
//             backgroundGradientTo: '#efefef',
//             decimalPlaces: 2,
//             color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//             style: {
//               borderRadius: 16,
//             },
//           }}
//           style={{
//             marginVertical: 8,
//             borderRadius: 16,
//           }}
//         />
//       </>
//     );
//   };
   
//   const MyBarChart = () => {
//     return (
//       <>
//         <Text style={styles.header}>Bar Chart</Text>
//         <BarChart
//           data={{
//             labels:
//               ['January', 'February', 'March', 'April', 'May', 'June'],
//             datasets: [
//               {
//                 data: [20, 45, 28, 80, 99, 43],
//               },
//             ],
//           }}
//           width={Dimensions.get('window').width - 16}
//           height={220}
//           yAxisLabel={'Rs'}
//           chartConfig={{
//             backgroundColor: '#1cc910',
//             backgroundGradientFrom: '#eff3ff',
//             backgroundGradientTo: '#efefef',
//             decimalPlaces: 2,
//             color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//             style: {
//               borderRadius: 16,
//             },
//           }}
//           style={{
//             marginVertical: 8,
//             borderRadius: 16,
//           }}
//         />
//       </>
//     );
//   };
//   const MyStackedBarChart = () => {
//     return (
//       <>
//         <Text style={styles.header}>Stacked Bar Chart</Text>
//         <StackedBarChart
//           data={{
//             labels: ['Test1', 'Test2'],
//             legend: ['L1', 'L2', 'L3'],
//             data: [
//               [60, 60, 60],
//               [30, 30, 60],
//             ],
//             barColors: ['#dfe4ea', '#ced6e0', '#a4b0be'],
//           }}
//           width={Dimensions.get('window').width - 16}
//           height={220}
//           chartConfig={{
//             backgroundColor: '#1cc910',
//             backgroundGradientFrom: '#eff3ff',
//             backgroundGradientTo: '#efefef',
//             decimalPlaces: 2,
//             color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//             style: {
//               borderRadius: 16,
//             },
//           }}
//           style={{
//             marginVertical: 8,
//             borderRadius: 16,
//           }}
//         />
//       </>
//     );
//   };
   
//   const MyPieChart = () => {
//     return (
//       <>
//         <Text style={styles.header}>Pie Chart</Text>
//         <PieChart
//           data={[
//             {
//               name: 'Seoul',
//               population: 21500000,
//               color: 'rgba(131, 167, 234, 1)',
//               legendFontColor: '#7F7F7F',
//               legendFontSize: 15,
//             },
//             {
//               name: 'Toronto',
//               population: 2800000,
//               color: '#F00',
//               legendFontColor: '#7F7F7F',
//               legendFontSize: 15,
//             },
//             {
//               name: 'New York',
//               population: 8538000,
//               color: '#ffffff',
//               legendFontColor: '#7F7F7F',
//               legendFontSize: 15,
//             },
//             {
//               name: 'Moscow',
//               population: 11920000,
//               color: 'rgb(0, 0, 255)',
//               legendFontColor: '#7F7F7F',
//               legendFontSize: 15,
//             },
//           ]}
//           width={Dimensions.get('window').width - 16}
//           height={220}
//           chartConfig={{
//             backgroundColor: '#1cc910',
//             backgroundGradientFrom: '#eff3ff',
//             backgroundGradientTo: '#efefef',
//             decimalPlaces: 2,
//             color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//             style: {
//               borderRadius: 16,
//             },
//           }}
//           style={{
//             marginVertical: 8,
//             borderRadius: 16,
//           }}
//           accessor="population"
//           backgroundColor="transparent"
//           paddingLeft="15"
//           absolute //For the absolute number else percentage
//         />
//       </>
//     );
//   };
   
//   const MyContributionGraph = () => {
//     return (
//       <>
//         <Text style={styles.header}>Contribution Graph</Text>
//         <ContributionGraph
//           values={[
//             {date: '2019-01-02', count: 1},
//             {date: '2019-01-03', count: 2},
//             {date: '2019-01-04', count: 3},
//             {date: '2019-01-05', count: 4},
//             {date: '2019-01-06', count: 5},
//             {date: '2019-01-30', count: 2},
//             {date: '2019-01-31', count: 3},
//             {date: '2019-03-01', count: 2},
//             {date: '2019-04-02', count: 4},
//             {date: '2019-03-05', count: 2},
//             {date: '2019-02-30', count: 4},
//           ]}
//           endDate={new Date('2019-04-01')}
//           numDays={105}
//           width={Dimensions.get('window').width - 16}
//           height={220}
//           chartConfig={{
//             backgroundColor: '#1cc910',
//             backgroundGradientFrom: '#eff3ff',
//             backgroundGradientTo: '#efefef',
//             decimalPlaces: 2,
//             color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//             style: {
//               borderRadius: 16,
//             },
//           }}
//         />
//       </>
//     );
//   };
   
//   const Hiz = () => {
//     return (
//       <SafeAreaView style={{flex: 1}}>
//         <ScrollView>
//           <View style={styles.container}>
//             <View>
//               {/*Example of Bezier LineChart*/}
//               <MyBezierLineChart />
//               {/*Example of LineChart*/}
//               <MyLineChart />
//               {/*Example of Progress Chart*/}
//               <MyProgressChart />
//               {/*Example of Bar Chart*/}
//               <MyBarChart />
//               {/*Example of StackedBar Chart*/}
//               <MyStackedBarChart />
//               {/*Example of Pie Chart*/}
//               <MyPieChart />
//               {/*Example of Contribution Chart*/}
//               <MyContributionGraph />
//             </View>
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     );
//   };
   
//   export default Hiz;
//*******react-native-chart-kit****


   
//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: 'white',
//       justifyContent: 'center',
//       alignItems: 'center',
//       textAlign: 'center',
//       padding: 10,
//     },
//     header: {
//       textAlign: 'center',
//       fontSize: 18,
//       padding: 16,
//       marginTop: 16,
//     },
//   });






// import * as React from 'react';
// import { View, Text,Image, TouchableOpacity} from 'react-native';

// function Hiz() {
//     return(
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Hiz
//       </Text>
//       </View>  
//     )}
// export default Hiz;



//******react-native-responsive-linechart*****
// import React ,{useState , useEffect} from 'react';
// import { View, Text,Image, TouchableOpacity} from 'react-native';
// import { Chart, Line, Area, HorizontalAxis, VerticalAxis } from 'react-native-responsive-linechart'
// import axios from 'axios'


// function Hiz() {
//   const [pil, setpil] = useState([]);
//   const [zaman, setzaman] = useState([]);
//   useEffect(() => 
//   {
//     axios.get("https://jsonplaceholder.typicode.com/posts")
//     .then(response => setpil(response.data))
//     .catch(error => console.log({error}));
//   }, []);

//   const xdata = [-10, -15, 40, 60, 78, 42, 56];
//   var dizi1 = xdata.map(a => { return <View  > 
//     <Text> {a} </Text>
//     </View>} )
//   // const {ydata} = ["jan", "feb", "mar", "apr", "may", "jun", "jul"]

//   //const xdata = [5, 7, 40, 60, 78, 42, 80];
//    const ydata = [4, 4, 6, 8, 7, 4, 9];

//   // var dizi = pil.map(pil => { return <View key = {pil.id} > 
//   // <Text> {pil.id} </Text>
//   // </View>} )

//   var i = 0;
//   var data = [];
//   for(i=0;i<7;i++)
//   {
//     data[i] = [xdata[i], ydata[i]];
//   }

//   var dizi2 = data.map(a => { return <View  > 
//     <Text> {a} </Text>
//     </View>} )

//   //  var sondata = {for(i=0;i<7;i++)
//   //   { 
//   //     for(j=0;j<7;j++)
//   //     {
//   //       [{x: data[i][j], y:data[i][j+1]}]
//   //     }
      
//   //   }} 
   
//   //  for(i=0;i<7;i++)
//   //  {
//   //   <Text> data[i] </Text>    
//   //  }

//   // var bak = data.map(data => { return <View  > 
//   //    <Text> {data} </Text>
//   //   </View>} )

//     return(
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//        {/* {dizi} */}
//        {/* {bak} */}
//        {/* {dizi2} */}
       
// <Chart
//   style={{ height: 200, width: 400 }}
  
//   // data =  {[
//   //   {xdata, ydata}
//   // ]}

//   // data = {[

//   //     { x: data[i], y : data[i]}
    
    
//   // ]}
  


  
//   // data={[
//   //   { x: -2, y: 15 },
//   //   { x: -1, y: 10 },
//   //   { x: 0, y: 12 },
//   //   { x: 1, y: 7 },
//   //   { x: 2, y: 6 },
//   //   { x: 3, y: 8 },
//   //   { x: 4, y: 10 },
//   //   { x: 5, y: 8 },
//   //   { x: 6, y: 12 },
//   //   { x: 7, y: 14 },
//   //   { x: 8, y: 12 },
//   //   { x: 9, y: 13.5 },
//   //   { x: 10, y: 18 },
//   // ]}
//   padding={{ left: 40, bottom: 20, right: 20, top: 20 }}
//   // xDomain={{ min: -2, max: 10 }}
//   // yDomain={{ min: 0, max: 20 }}
//   xDomain={{ min: 5, max: 80 }}
//    yDomain={{ min: 4, max: 9 }}
// >
   
   
//   {/* <VerticalAxis tickCount={11} theme={{ labels: { formatter: (v) => v.toFixed(2) } }} />
//   <HorizontalAxis tickCount={5} /> */}
//   <VerticalAxis tickCount={7} theme={{ labels: { formatter: (v) => v.toFixed(2) } }}  />
//   <HorizontalAxis tickCount={7} />
//   <Area theme={{ gradient: { from: { color: '#ffa502' }, to: { color: '#ffa502', opacity: 0.4 } }}} />
//   <Line theme={{ stroke: { color: '#ffa502', width: 5 }, scatter: { default: { width: 4, height: 4, rx: 2 }} }} />
// </Chart>
//       </View>  
//     )}
// export default Hiz;



import * as React from 'react';
import { View, Text,Image, TouchableOpacity} from 'react-native';
import { Chart, Line, Area, HorizontalAxis, VerticalAxis } from 'react-native-responsive-linechart'
function Hiz() {
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Chart
  style={{ height: 200, width: 400 }}
  data={[
    { x: -2, y: 15 },
    { x: -1, y: 10 },
    { x: 0, y: 12 },
    { x: 1, y: 7 },
    { x: 2, y: 6 },
    { x: 3, y: 8 },
    { x: 4, y: 10 },
    { x: 5, y: 8 },
    { x: 6, y: 12 },
    { x: 7, y: 14 },
    { x: 8, y: 12 },
    { x: 9, y: 13.5 },
    { x: 10, y: 18 },
  ]}
  padding={{ left: 40, bottom: 20, right: 20, top: 20 }}
  xDomain={{ min: -2, max: 10 }}
  yDomain={{ min: 0, max: 20 }}
>
  <VerticalAxis tickCount={11} theme={{ labels: { formatter: (v) => v.toFixed(2) } }} />
  <HorizontalAxis tickCount={5} />
  <Area theme={{ gradient: { from: { color: '#ffa502' }, to: { color: '#ffa502', opacity: 0.4 } }}} />
  <Line theme={{ stroke: { color: '#ffa502', width: 5 }, scatter: { default: { width: 4, height: 4, rx: 2 }} }} />
</Chart>


    </View>  
  )}




export default Hiz;








