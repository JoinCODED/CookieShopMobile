import React from "react";
import { NavigationContainer } from "@react-navigation/native";

// Components
import RootNavigator from "./components/Navigation";

// Styles
import { ThemeProvider } from "styled-components";

const theme = {
  light: {
    mainColor: "#242424",
    backgroundColor: "#fefafb",
    black: "#242424",
    pink: "#ff85a2",
    red: "#ff3232",
  },
  dark: {
    mainColor: "#fefafb",
    backgroundColor: "#242424",
    black: "#242424",
    pink: "#ff85a2",
    red: "#ff3232",
  },
};

export default function App() {
  return (
    <ThemeProvider theme={theme.light}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}
