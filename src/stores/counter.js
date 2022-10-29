import { defineStore } from "pinia";

export const useCounter = defineStore("counter", {
  state: () => {
    return {
      count: 0,
    };
  },
  actions: {
    increase() {
      this.count++;
    },
    decrease() {
      this.count--;
    },
  },
  getters: {
    doubleCount() {
      return this.count * 5;
    },
  },
});
