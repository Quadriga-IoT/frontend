import * as React from 'react';
import {Button } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home'
import Pil from './screens/Pil'
import Bitki from './screens/Bitki'
import Hiz from './screens/Hiz'
import Konum from './screens/Konum'
import Hakkimizda from './screens/Hakkimizda'
import YapilanGorev from './screens/YapilanGorev'
import Grafik from './screens/Grafik'
import Udemy from './screens/Udemy'
import Vericekmeornekleri from './screens/Vericekmeornekleri'

//import Icon from "react-native-vector-icons/FontAwesome5";   
//ikisini aynı anda eklemek istersek?
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { DrawerContent } from './screens/DrawerContent';


const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />} >
        <Drawer.Screen name="Home" component={Home} options={{ title: 'Ana Sayfa'
        //  headerRight: () => ( 
        //   <Button
        //     title="Sign in"
        //     icon={({color, size}) => (
        //       <Icon 
        //       name="login" 
        //       color={color}
        //       size={size}
        //       />
        //      )}                                  
        //      //icon hata vermemesine rağmen butonun içine icon eklemedi.
        //   />)   
        //   , 
        //   drawerIcon: ({focused, size}) => (
        //     <Icon
        //        name="home-outline"
        //        size={size}
        //        color={focused ? '#7cc' : '#ccc'}
        //     />
        //  )
         }}/>
        <Drawer.Screen name="Pil" component={Pil} options={{ title: 'Pil'
        //  ,
        // drawerIcon: ({focused, size}) => (
        //   <Icon
        //      name="battery-80"
        //      size={size}
        //      color={focused ? '#7cc' : '#ccc'}
        //   />)
         }} />

        <Drawer.Screen name="Bitki" component={Bitki} options={{ title: 'Bitki' 
        // ,
        // drawerIcon: ({focused, size}) => (
        //   <Icon
        //      name="sprout"
        //      size={size}
        //      color={focused ? '#7cc' : '#ccc'}
        //   />)
         }} />

        <Drawer.Screen name="Hiz" component={Hiz} options={{ title: 'Hız' 
        // ,
        // drawerIcon: ({focused, size}) => (
        //   <Icon
        //      name="speedometer"
        //      size={size}
        //      color={focused ? '#7cc' : '#ccc'}
        //   />)
         }} />

        <Drawer.Screen name="Konum" component={Konum} options={{ title: 'Konum' 
        // ,
        // drawerIcon: ({focused, size}) => (
        //   <Icon
        //      name="map-marker-radius"
        //      size={size}
        //      color={focused ? '#7cc' : '#ccc'}
        //   />)
         }} />
        <Drawer.Screen name="Hakkimizda" component={Hakkimizda} options={{ title: 'Hakkımızda' 
        // ,
        // drawerIcon: ({focused, size}) => (
        //   <Icon
        //      name="map-marker-radius"
        //      size={size}
        //      color={focused ? '#7cc' : '#ccc'}
        //   />)
         }} />
         <Drawer.Screen name="YapilanGorev" component={YapilanGorev} options={{ title: 'YapilanGorev' 
         }} />
         <Drawer.Screen name="Grafik" component={Grafik} options={{ title: 'Grafik' 
         }} />
         <Drawer.Screen name="Udemy" component={Udemy} options={{ title: 'Udemy' 
         }} />
         <Drawer.Screen name="Vericekmeornekleri" component={Vericekmeornekleri} options={{ title: 'Veri cekme ornekleri' 
         }} /> 
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;


