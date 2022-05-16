import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Home from './src/screen/Home';
import About from './src/screen/About';
import { BannerAd, TestIds, BannerAdSize } from 'react-native-google-mobile-ads';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
const Tab = createBottomTabNavigator();

const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-1106044391052060/7556093643';

function App() {
  return (
    <NavigationContainer>
     <Tab.Navigator
     initialRouteName="Feed"
     screenOptions={{
       tabBarActiveTintColor: '#4FB8FF',
     }}
     >
       <Tab.Screen name='Home' component={Home} options={{headerShown: false,  tabBarLabel: 'home', tabBarIcon : ({color, size}) => (<Icon name='home' color={color} size={size} /> ) }} />
       <Tab.Screen name='About' component={About} options={{ tabBarLabel: 'About', tabBarIcon : ({color, size}) => (<Icon name='address-card' color={color} size={size} /> ) }} />
     </Tab.Navigator>
     <View style={{alignSelf: 'center'}}>
        <BannerAd size={BannerAdSize.BANNER} unitId={adUnitId} />
     </View>
    </NavigationContainer>
  );
}

export default App;