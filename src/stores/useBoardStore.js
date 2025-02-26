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
    async getBoardDetail(idx) {
      const response = await axios.get(`/api/board/read/${idx}`);

      this.response = response.data;
      return response.data;
    },
    async registerBoard(postData) {
      const response = await axios.post("/api/board/register", postData);

      this.response = response.data;
      return response.data;
    },
  },
});
