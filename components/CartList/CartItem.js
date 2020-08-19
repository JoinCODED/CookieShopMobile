import React from "react";
import { ListItem, Body, Text, Right } from "native-base";
import { TotalPrice, TrashIcon } from "./styles";
import cartStore from "../../stores/cartStore";

const CartItem = ({ item }) => {
  return (
    <ListItem>
      <Body>
        <Text>{item.name}</Text>
        <Text note>
          {item.price} KD x {item.quantity}
        </Text>
        <TotalPrice>{item.price * item.quantity} KD</TotalPrice>
      </Body>
      <Right>
        <TrashIcon
          type="Ionicons"
          name="trash"
          onPress={() => cartStore.deleteItem(item.id)}
        />
      </Right>
    </ListItem>
  );
};

export default CartItem;
