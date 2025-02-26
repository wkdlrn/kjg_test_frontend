import { defineStore } from "pinia";
import axios from "axios";

const backend = "/api";

export const useBoardStore = defineStore("board", {
  actions: {
    async getBoardList() {
      const response = await axios.get(backend + "/board/list");
      console.log(response.data);
      return response.data;
    },
  },
});
