import { selector } from "recoil";
import axios from "axios";

export const todosSelector = selector({
  key: "todosSelector",
  get: async () => {
    const response = await axios.get("http://localhost:3000/todos");
    return response.data.Todos;
  }
});
