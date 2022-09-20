import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

import Top from './Top';
import Center from './Center';
import Bottom from './Bottom';

export default function App() {
  return (
    <View style={{flex:1, backgroundColor:'black'}}>
      <Top />
      <Center />
      <Bottom />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});