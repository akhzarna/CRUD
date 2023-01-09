import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./Home";
import ProfileScreen from "./ProfileScreen.js";
import Dashboard from "./Dashboard";
import LearnFlatList from "./LearnFlatList";
import Settings from "./Settings";
import Chatting from "./Chatting";
import SettingsScreen from "./SettingsScreen";
import HomeForClass from "./HomeForClass";
import HomeForFunctional from "./HomeForFunctional";
import SettingForClass from "./SettingForClass";
import DuaDetailPage from "./DuaDetailPage";
import { Image, Text } from "react-native";
import Duain from "./Duain";
import BookMark from "./BookMark";
//setting splash screen
// function SplashScreen({ navigation }) {
//   setTimeout(() => {
//     navigation.navigate("Home");
//   }, 3000);
//   return (
//     <Image
//       // style={{ height: 40, width: 40 }}
//       source={require("./assets/SplashScreen1.jpg")}
//     />
//   );
// }

const Stack = createNativeStackNavigator();
export default function App(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Navigator initialRouteName="SplashScreen" headerMode="none"> */}
        {/* <Stack.Screen name="Welcome to Dua App" component={SplashScreen} /> */}
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Duain" component={Duain} />
        <Stack.Screen name="DuaDetailPage" component={DuaDetailPage} />
        <Stack.Screen name="BookMark" component={BookMark} />
        {/* <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="LearnFlatList" component={LearnFlatList} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Chatting" component={Chatting} />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
        <Stack.Screen name="HomeForClass" component={HomeForClass} />
        <Stack.Screen name="HomeForFunctional" component={HomeForFunctional} />
        <Stack.Screen name="SettingForClass" component={SettingForClass} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
