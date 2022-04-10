import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LoginForm from "./src/components/LoginForm/LoginForm";
import { NavigationContainer } from "@react-navigation/native";
import Saludar from "./src/components/Saludar/Saludar";

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Text>Hola mundo</Text>
        <Saludar firstname="Brayan Ismael" lastname="Peñaranda Rincón" />
        <LoginForm />
      </View>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
