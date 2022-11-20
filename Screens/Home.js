import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

function Home({ navigation }) {
  return (
    <View style={styles.mainView}>
      <TouchableOpacity
        style={styles.TO}
        onPress={() => navigation.navigate("LoginScreen")}
      >
        <Text>Go to LoginScreen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TO}
        onPress={() => navigation.navigate("RegistrationScreen")}
      >
        <Text>Go to RegistrationScreen</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  TO: {
    marginBottom: 100,
    borderRadius: 20,

    shadowColor: "blue",
    shadowOpacity: 20,
    shadowRadius: 10,
  },
});

export default Home;
