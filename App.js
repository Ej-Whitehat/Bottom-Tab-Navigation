import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchScreen from './screens/searchScreen';
import TransactionScreen from './screens/bookTransactionScreen';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
export default class App extends React.Component{
  render(){
    return(
      <AppContainer></AppContainer>
    )
  }
}
defaultNavigationOptions:({navigation})=>({
  tabBarIcon:({})=>{
    const routeName = navigation.state.routeName;
    console.log(routeName)
    if(routeName === "Transaction"){
      return(
        <Image
        source={require("./assets/book.png")}
        style={{width:40, height:40}}
      />
      )
      
    }
    else if(routeName === "Search"){
      return(
        <Image
        source={require("./assets/searchingbook.png")}
        style={{width:40, height:40}}
      />)
      
    }
  }
})
const TabNavigator = createBottomTabNavigator({
  Transaction: {screen: TransactionScreen},
  Search: {screen:SearchScreen}
})

const AppContainer = createAppContainer(
  TabNavigator
)
