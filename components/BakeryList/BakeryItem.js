import React from "react";

// Styles
import { ListItem, Text } from "native-base";
import { BakeryItemStyled } from "./styles";

const BakeryItem = ({ bakery, navigation }) => {
  return (
    <ListItem
      onPress={() => navigation.navigate("Cookies", { bakery: bakery })}
    >
      <BakeryItemStyled>{bakery.name}</BakeryItemStyled>
    </ListItem>
  );
};

export default BakeryItem;
