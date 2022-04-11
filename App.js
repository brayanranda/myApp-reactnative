import "react-native-gesture-handler";
import React from "react";
import { StyleSheet } from "react-native";
// import LoginForm from "./src/components/LoginForm/LoginForm";
import { NavigationContainer } from "@react-navigation/native";
// import Saludar from "./src/components/Saludar/Saludar";
// import NavigationStack from "./src/navigation/NavigationStack";
// import NavigationTab from "./src/navigation/NavigationTab";
import NavigationDrawer from "./src/navigation/NavigationDrawer";

export default function App() {
  return (
    <NavigationContainer>
      {/* <View style={styles.container}>
        <Text>Hola mundo</Text>
        <Saludar firstname="Brayan Ismael" lastname="Peñaranda Rincón" />
        <LoginForm />
      </View> */}

      {/* <NavigationStack /> */}
      {/* Con NavegationTab no es necesario el Stack */}
      {/* <NavigationTab /> */}
      <NavigationDrawer />
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
