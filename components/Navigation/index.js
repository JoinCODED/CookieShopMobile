import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Components
import Home from "../Home";
import BakeryList from "../BakeryList";
import CookieList from "../CookieList";
import CartList from "../CartList";
import CartButton from "../buttons/CartButton";

const { Navigator, Screen } = createStackNavigator();

const RootNavigator = () => {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "#90d4ed",
        },
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="Bakeries"
        component={BakeryList}
        options={{ headerRight: () => <CartButton /> }}
      />
      <Screen
        name="Cookies"
        component={CookieList}
        options={({ route }) => {
          const { bakery } = route.params;
          return {
            title: bakery.name,
            headerRight: () => <CartButton />,
          };
        }}
      />
      <Screen name="Cart" component={CartList} />
    </Navigator>
  );
};

export default RootNavigator;
