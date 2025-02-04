import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null as { id: string; email: string; role: string } | null,
    token: localStorage.getItem("token") || "",
  }),

  actions: {
    setUser(user: any, token: string) {
      this.user = user;
      this.token = token;
      localStorage.setItem("token", token);
    },

    logout() {
      this.user = null;
      this.token = "";
      localStorage.removeItem("token");
    },
  },
});
