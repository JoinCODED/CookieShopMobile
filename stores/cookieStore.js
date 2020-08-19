import { decorate, observable } from "mobx";
import instance from "./instance";

class CookieStore {
  cookies = [];
  loading = true;

  fetchCookies = async () => {
    try {
      const res = await instance.get("/cookies");
      this.cookies = res.data;
      this.loading = false;
    } catch (error) {
      console.error("CookieStore -> fetchCookies -> error", error);
    }
  };

  getCookieById = (cookieId) =>
    this.cookies.find((cookie) => cookie.id === cookieId);
}

decorate(CookieStore, {
  cookies: observable,
  loading: observable,
});

const cookieStore = new CookieStore();
cookieStore.fetchCookies();

export default cookieStore;
