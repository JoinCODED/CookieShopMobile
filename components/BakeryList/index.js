import React from "react";
import { observer } from "mobx-react";

// Components
import BakeryItem from "./BakeryItem";

// Stores
import bakeryStore from "../../stores/bakeryStore";

// Styles
import { List, Content, Spinner } from "native-base";

const BakeryList = ({ navigation }) => {
  if (bakeryStore.loading) return <Spinner />;
  const bakeryList = bakeryStore.bakeries.map((bakery) => (
    <BakeryItem bakery={bakery} key={bakery.id} navigation={navigation} />
  ));
  return (
    <Content>
      <List>{bakeryList}</List>
    </Content>
  );
};

export default observer(BakeryList);
