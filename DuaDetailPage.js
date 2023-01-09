import React, { Component, useEffect, useState } from "react";
import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import { Card, Button, Title, Paragraph } from "react-native-paper";
import BookMark from "./BookMark";
const DuaDetailPage = ({ route, navigation }) => {
  const { arabic } = route.params;
  const { translation } = route.params;
  const { title } = route.params;
  const { intro } = route.params;
  const [state, setState] = useState(false);
  const handleState = () => {
    setState(true);
    // navigation.navigate("BookMark", { title });
  };
  return (
    <ScrollView>
      <Card style={{ padding: 10, margin: 15 }}>
        <Card.Title
          title={
            // <View>
            <Text>
              <Image
                style={{ height: 40, width: 40 }}
                source={require("./assets/icons8-tulip-96.png")}
              />
              {title}
              <Image
                style={{ height: 40, width: 40 }}
                source={require("./assets/icons8-tulip-96.png")}
              />
            </Text>
            // </View>
          }
          titleStyle={{
            fontWeight: "bold",
            fontSize: 20,
            textAlign: "center",
            padding: 20,
            margin: 5,
          }}
        />
        <Card.Content>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              marginTop: 20,
              marginBottom: 20,
            }}
          >
            {arabic}
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              marginBottom: 20,
              textAlign: "center",
            }}
          >
            <Image
              style={{ height: 40, width: 40 }}
              source={require("./assets/hand.png")}
            />
            {intro}
          </Text>
          <Text style={{ fontSize: 20, marginTop: 20, marginBottom: 20 }}>
            {translation}
          </Text>
        </Card.Content>
        {/* <Card.Actions> */}
        <TouchableOpacity
          // variant="contained"
          style={{
            // position: "relative",
            justifyContent: "center",
            alignItems: "center",
            margin: 30,
            padding: 15,
            borderRadius: 10,
            backgroundColor: state ? "#fa6161" : "white",
          }}
          onPress={handleState}
        >
          <Text>Book Mark</Text>
        </TouchableOpacity>
        {/* </Card.Actions> */}
      </Card>
    </ScrollView>
  );
};

export default DuaDetailPage;
{
  /* <Image
          style={{ height: 50, width: 50 }}
          source={require("./assets/favorite.png")}
        /> */
}
