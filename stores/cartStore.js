import { computed, decorate, observable } from "mobx";
import { AsyncStorage } from "react-native";

class CartStore {
  items = [];
  // items = [
  //   {
  //     cookieId: 1,
  //     quantity: 3,
  //   },
  //   {
  //     cookieId: 2,
  //     quantity: 2,
  //   },
  // ];

  fetchCart = async () => {
    const items = await AsyncStorage.getItem("myCart");
    this.items = items ? JSON.parse(items) : [];
  };

  addItem = async (newItem) => {
    const foundItem = this.items.find(
      (item) => item.cookieId === newItem.cookieId
    );
    if (foundItem) foundItem.quantity += newItem.quantity;
    else this.items.push(newItem);

    await AsyncStorage.setItem("myCart", JSON.stringify(this.items));
  };

  deleteItem = async (itemId) => {
    this.items = this.items.filter((item) => itemId !== item.cookieId);
    await AsyncStorage.setItem("myCart", JSON.stringify(this.items));
  };

  get totalQuantity() {
    let total = 0;
    this.items.forEach((item) => (total += item.quantity));
    return total;
  }
}

decorate(CartStore, {
  items: observable,
  totalQuantity: computed,
});

const cartStore = new CartStore();
cartStore.fetchCart();

export default cartStore;
