import { defineStore } from "pinia";
import axios from "axios";

export const useBoardStore = defineStore("board", {
  state: () => ({
    response: null,
  }),
  actions: {
    async getBoardList() {
      const response = await axios.get("/api/board/list");

      this.response = response.data;
      return response.data;
    },
  },
});
