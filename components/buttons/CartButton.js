import React from "react";
import { useNavigation } from "@react-navigation/native";

// Styles
import { CartButtonStyled } from "./styles";
import { Button, Text } from "native-base";
import cartStore from "../../stores/cartStore";
import { observer } from "mobx-react";

const CartButton = () => {
  const navigation = useNavigation();
  return (
    <Button transparent light onPress={() => navigation.navigate("Cart")}>
      <Text>{cartStore.totalQuantity}</Text>
      <CartButtonStyled type="MaterialCommunityIcons" name="cart" />
    </Button>
  );
};

export default observer(CartButton);
