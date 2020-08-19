import React, { useState } from "react";
import NumericInput from "react-native-numeric-input";

// Styles
import defaultCookie from "../../default-cookie.jpg";
import {
  ListItem,
  Thumbnail,
  Left,
  Body,
  Right,
  Text,
  Button,
} from "native-base";
import { BakeryItemStyled } from "../BakeryList/styles";
import cartStore from "../../stores/cartStore";

const CookieItem = ({ cookie }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    const newItem = { quantity: quantity, cookieId: cookie.id };
    cartStore.addItem(newItem);
    console.log("handleAdd -> newItem", newItem);
  };
  return (
    <ListItem thumbnail>
      <Left>
        <Thumbnail
          source={cookie.image ? { uri: cookie.image } : defaultCookie}
        />
      </Left>
      <Body>
        <Text>{cookie.name}</Text>
      </Body>
      <Right>
        <NumericInput
          rounded
          value={quantity}
          onChange={setQuantity}
          totalWidth={80}
          totalHeight={30}
          initValue={1}
        />
        <Button onPress={handleAdd}>
          <Text>Add</Text>
        </Button>
      </Right>
    </ListItem>
  );
};

export default CookieItem;
