import React from "react";
import { observer } from "mobx-react";

// Components
import CookieItem from "./CookieItem";

// Stores
import cookieStore from "../../stores/cookieStore";

// Styles
import { List, Content, Spinner } from "native-base";

const CookieList = ({ route, navigation }) => {
  if (cookieStore.loading) return <Spinner />;
  const { bakery } = route.params;

  const cookieList = bakery.cookies
    .map((cookie) => cookieStore.getCookieById(cookie.id))
    .map((cookie) => (
      <CookieItem cookie={cookie} key={cookie.id} navigation={navigation} />
    ));

  return (
    <Content>
      <List>{cookieList}</List>
    </Content>
  );
};

export default observer(CookieList);
