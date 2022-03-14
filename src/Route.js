import * as React from 'react';
import {Button } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home'
import Pil from './screens/Pil'
import Bitki from './screens/Bitki'
import Hız from './screens/Hız'
import Konum from './screens/Konum'
//import Icon from "react-native-vector-icons/FontAwesome5";   
//ikisini aynı anda eklemek istersek?
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { DrawerContent } from './screens/DrawerContent';


const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />} >
        <Drawer.Screen name="Home" component={Home} options={{ title: 'Ev' ,
         headerRight: () => ( 
          <Button
            title="Sign in"
            icon={({color, size}) => (
              <Icon 
              name="login" 
              color={color}
              size={size}
              />
             )}                                  
             //icon hata vermemesine rağmen butonun içine icon eklemedi.
          />)   
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

        <Drawer.Screen name="Hız" component={Hız} options={{ title: 'Hız' 
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
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;


