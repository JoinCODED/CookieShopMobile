import React from "react";
import { observer } from "mobx-react";

// Stores
import cartStore from "../../stores/cartStore";
import cookieStore from "../../stores/cookieStore";
import CartItem from "./CartItem";

// Styles
import { List, Spinner } from "native-base";

const CartList = () => {
  if (cookieStore.loading) return <Spinner />;
  const cartList = cartStore.items
    .map((item) => ({
      ...cookieStore.getCookieById(item.cookieId),
      quantity: item.quantity,
    }))
    .map((cookie) => <CartItem item={cookie} key={cookie.id} />);

  return <List>{cartList}</List>;
};

export default observer(CartList);
