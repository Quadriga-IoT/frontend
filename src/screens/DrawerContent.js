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
                            label="Ana sayfa"
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
                                name="speedometer" 
                                color={"#000000"}
                                size={size}
                                />
                            )}
                            label="Hız"
                            onPress={() => {props.navigation.navigate('Hiz')}}
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
                        
                        <DrawerItem style = { styles.draweritem}
                            icon={({color, size}) => (
                                <Icon 
                                name="format-list-checks" 
                                color= {"#EDB74B"}
                                size={size}
                                />
                            )}
                            label="Yapılan Görev"
                            onPress={() => {props.navigation.navigate('YapilanGorev')}}
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
                                name="information-outline" 
                                color= {"#000000"}
                                size={size}
                                />
                            )}
                            label="Hakkımızda"
                            onPress={() => {props.navigation.navigate('Hakkimizda')}}
                        />
                    </Drawer.Section>

        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
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