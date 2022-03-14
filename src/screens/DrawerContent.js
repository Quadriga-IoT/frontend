import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



export function DrawerContent(props) {

    return(
        <View style={{flex:1, backgroundColor: "#F3F3F3" }}>
            
            <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem style = { styles.draweritem}
                            icon={({color, size}) => (
                                <Icon 
                                name="home-outline" 
                                color={"#C758BE"}
                                size={size}
                                />
                            )}
                            label="Ev"
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                        <DrawerItem style = { styles.draweritem}
                            icon={({color, size}) => (
                                <Icon 
                                name="battery-80" 
                                color={"#C75B58"}
                                size={size}
                                />
                            )}
                            label="Pil" 
                            onPress={() => {props.navigation.navigate('Pil')}}
                        />
                        <DrawerItem style = { styles.draweritem}
                            icon={({color, size}) => (
                                <Icon 
                                name="sprout" 
                                color={"#41805D"}
                                size={size}
                                />
                            )}
                            label="Bitki"
                            onPress={() => {props.navigation.navigate('Bitki')}}
                        />
                        <DrawerItem style = { styles.draweritem}
                            icon={({color, size}) => (
                                <Icon 
                                name="speedometer" 
                                color={"#000000"}
                                size={size}
                                />
                            )}
                            label="Hız"
                            onPress={() => {props.navigation.navigate('Hız')}}
                        />
                        <DrawerItem style = { styles.draweritem}
                            icon={({color, size}) => (
                                <Icon 
                                name="map-marker-radius" 
                                color= {"#103199"}
                                size={size}
                                />
                            )}
                            label="Konum"
                            onPress={() => {props.navigation.navigate('Konum')}}
                        />
                    </Drawer.Section>

            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="exit-to-app" 
                        color={"#000000"}
                        size={size}
                        />
                    )}
                    label="Sign Out"
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    bottomDrawerSection: {
        backgroundColor: "#DEEFF8",
        marginTop: 300,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 3
    },
    drawerSection: {
      backgroundColor: "#F3F3F3",
      marginTop: 15,
    },
    draweritem :
    {
     //padding, font size
     marginBottom: 15
    }
  });